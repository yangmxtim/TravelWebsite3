<template>
  <form @submit.prevent="handleSubmit" class="note-form">
    <label for="title" class="note-label">Title : </label>
    
    <input id="title" type="text" v-model="note.title" class="note-title">
    <br>
    <br>
    <label for="content" class="note-label">Content : </label>

    <textarea id="content" v-model="note.content" class="note-textbox"></textarea>

    <div>
      <input type="submit" value="送出" class="bottomBtn">
      <button type="button" @click="close" class="bottomBtn">關閉</button>
    </div>
  </form>
</template>


<script setup>
import { ref, watchEffect, inject } from 'vue';

import '@/styles/note.css';
import axios from 'axios';


//抓取會員ＩＤ
const uid = inject("id");
const emit = defineEmits(['close-window', 'note-saved']);
const props = defineProps({
  initialNote: {
    type: Object,
    default: () => ({ title: '', content: ''})
  }
});

const note = ref({ ...props.initialNote });

watchEffect(() => {
  note.value = { ...props.initialNote };
  note.value.userId = uid;
  note.value.updateTime = noteUpdateTime();
  console.log(note.value)

  
});

function close() {  
  emit('close-window');
}

async function handleSubmit() {
  if (note.value.title.trim() === '' || note.value.content.trim() === '') {
    return;
  }

  if (note.value.id) {
    await axios.put(`http://localhost:8080/api/notes/${note.value.id}`, note.value);
  } else {
    await axios.post('http://localhost:8080/api/notes', note.value);
  }
  
  emit('note-saved');
  close();
}
function noteUpdateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

</script>


