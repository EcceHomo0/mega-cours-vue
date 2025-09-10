<template>
  <div class="flex items-center gap-4 bg-green-200">
    <p class="m-0">Le nombre: {{ counter }}</p>
    <button @click="increment()" class="btn btn-success">+</button>
  </div>
</template>

<script setup lang='js'>
  import { ref, watch } from 'vue';

  const counter = ref(0);

  const increment = () => {
      counter.value += 1;
  };

  watch(counter, (newValue) => {
    if (newValue > 6){
      counter.value = 0;
    }
  });

</script>
