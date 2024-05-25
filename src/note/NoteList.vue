<template>
  <LayoutHeader />
  <div>
    <ul class="note-board">
      <li v-for="note in notes" :key="note.id" class="list">
        <div>
          <strong>{{ note.title }}</strong>
          <p >{{ note.content }}</p>
        </div>
        <div class="button-container">
          <button @click="editNote(note)" class="list-button"><i class="fa-solid fa-pen"></i></button>
          <button @click="deleteNote(note.id)" class="list-button"><i class="fa-solid fa-trash"></i></button>
        </div>
      </li>
    </ul>
    <button @click="addNote" class="addNote list-button"><i class="fa-solid fa-pen-to-square"></i></button>

    <NoteForm v-if="showForm" :initialNote="currentNote" @close-window="closeForm" @note-saved="loadNotes" />
  </div>
  <LayoutFooter />
  

</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NoteForm from './NoteForm.vue';
import LayoutHeader from '../views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '../views/Layout/components/LayoutFooter.vue'
import '../styles/note.css';


const notes = ref([]);
const showForm = ref(false);
const currentNote = ref({});

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
  const response = await axios.get('http://localhost:8080/api/notes');
  console.log(response);
  notes.value = response.data;
}

onMounted(loadNotes);
</script>

