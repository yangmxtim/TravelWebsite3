<template>
  <LayoutHeader />
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3 " data-aos="fade-up">
          <WeatherDate></WeatherDate>
        </div>
        <div class="col-md-9">
          <MembersNav></MembersNav>
          <div v-if="loading" class="loading"></div>
          <div v-else-if="error" class="loading">{{ error }}</div>
          <div v-else>
          <ul class="note-board">
            <li v-for="note in notes" :key="note.id" class="note-list">
              <div>
                <strong class="note-title-strong">{{ note.title }}</strong>
                <p class="note-content">{{ note.content }}</p>
              </div>
              <div class="button-container">
                <button @click="editNote(note)" class="list-button"><i class="fa-solid fa-pen"></i></button>
                <button @click="deleteNote(note.id)" class="list-button"><i class="fa-solid fa-trash"></i></button>
              </div>
            </li>
          </ul>
          <button @click="addNote" class="addNote list-button"><i class="fa-solid fa-pen-to-square"></i></button>
          </div>
          <NoteForm v-if="showForm" :initialNote="currentNote" @close-window="closeForm" @note-saved="loadNotes" />

        </div>
        
      </div>
    </div>

  </div>
  <LayoutFooter />


</template>

<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';
import MembersNav from '../Category/components/MembersNav.vue';
import NoteForm from './NoteForm.vue';
import LayoutHeader from '../Layout/components/LayoutHeader.vue';
import LayoutFooter from '../Layout/components/LayoutFooter.vue';

import WeatherDate from '../Weather/WeatherDate.vue';

import '@/styles/note.css';



const notes = ref([]);
const showForm = ref(false);
const currentNote = ref({});
const loading = ref(true);
const error = ref(null);
//抓取會員ＩＤ
const uid = 1;


function addNote() {
  currentNote.value = {};
  showForm.value = true;
}

function editNote(note) {
  currentNote.value = { ...note };
  showForm.value = true;
}

function closeForm() {
  showForm.value = false;
}

async function deleteNote(id) {
  await axios.delete(`http://localhost:8080/api/notes/${id}`);
  loadNotes();
}

async function loadNotes() {
  try{
    const response = await axios.get(`http://localhost:8080/api/notes/${uid}`);
    notes.value = response.data;
  }catch(err){
    error.value = '無法載入筆記';
  }finally{
    loading.value = false;
  }
}

onMounted(loadNotes);

</script>
