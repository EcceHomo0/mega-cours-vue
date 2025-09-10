<template>
  <div class="flex items-center gap-4 bg-green-200">
    <button v-on:click="decrement(1)" class="btn btn-secondary">-</button>
    <p class="m-0">Le nombre: {{ counter }}</p>
    <button @click="increment(15)" class="btn btn-success">+</button>
    <p>{{ afficher_username }}</p>
  </div>
</template>

<script setup lang='js'>
  import { ref, computed } from 'vue';

  const counter = ref(0);
  const username = ref('');

  const decrement = (val) => {
    counter.value -= val;
  };
  const increment = (val) => {
      counter.value += val;
  };

  const afficher_username = computed(() => {
    console.log("La fonction est appelée");
    if(username.value == ''){
      return "test";
    } else {
      return "autre test";
    }
  });

</script>
