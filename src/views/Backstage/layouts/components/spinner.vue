<template>
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 
                              start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
          <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- Spinner End -->
</template>

<script setup>
import { onMounted } from "vue";


var spinner = function () {
  setTimeout(function () {
      var spinnerElement = document.getElementById('spinner');
      if (spinnerElement) {
          // spinnerElement.classList.remove('show');
          spinnerElement.remove();
      }
  }, 50);
};

onMounted(() => {
  spinner();
});

</script>