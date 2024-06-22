<template>
  <!-- alert start -->
  <div v-if="visible" class="alert-container">
    <div class="alert alert-success d-flex align-items-center" role="alert">
      <i class="fa-regular fa-circle-check fs-3 me-3"></i>
      <div>{{ message }}</div>
    </div>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </div>
  <!-- alert end -->
</template>

<script setup>
import { ref } from 'vue';
import { defineExpose, defineProps } from 'vue';

const visible = ref(false);
const progress = ref(0);

const props = defineProps({
  message: {
    type: String,
    default: '修改成功'
  }
});

const showAlert = () => {
  progress.value = 0;
  visible.value = true;
  console.log(progress.value)

  const interval = setInterval(() => {
    progress.value += 4;

    if (progress.value >= 110) {
      clearInterval(interval);
      visible.value = false;
    }
  }, 30);
};

defineExpose({
  showAlert,
})
</script>

<style scoped>
/* alert start */
.alert-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 300px;
  z-index: 1050;
}
.progress {
  height: 5px;
  margin-top: 0.5rem;
}
.progress-bar {
  height: 30px;
  background-color: #4caf50;
  transition: width 0.1s;
}
</style>