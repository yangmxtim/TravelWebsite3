<template>
  <form @submit.prevent="handleSubmit" class="note-form">
    <label for="title" class="note-label">Title : </label>
    <br>
    <input id="title" type="text" v-model="note.title" class="title">
    <br><br>
    <label for="content" class="note-label">Content : </label>
    <br>
    <textarea id="content" v-model="note.content" class="textbox"></textarea>
    <br><br>
    <input type="submit" value="Submit" class="bottomBtn">
    <button type="button" @click="close" class="bottomBtn">Close</button>
  </form>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import '../styles/note.css';
import axios from 'axios';

const emit = defineEmits(['close-window', 'note-saved']);
const props = defineProps({
  initialNote: {
    type: Object,
    default: () => ({ title: '', content: '' })
  }
});

const note = ref({ ...props.initialNote });

watchEffect(() => {
  note.value = { ...props.initialNote };
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
</script>


