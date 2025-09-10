<template>
  <div class="flex items-center gap-4 bg-green-200">
    <button v-on:click.right="decrement(1)" class="btn btn-secondary">-</button>
    <p class="m-0">Le nombre: {{ counter }}</p>
    <button @click.middle="increment(15)" class="btn btn-success">+</button>
  </div>
</template>

<script setup lang='js'>
  import { ref } from 'vue';

  const counter = ref(0);

  const decrement = (val) => {
    counter.value -= val;
  };
  const increment = (val) => {
      counter.value += val;
    
  };

</script>
