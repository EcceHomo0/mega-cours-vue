<template>
  
  <section>
    <div id="card1" :class="{ rouge: isActive1 }" @click="isActive1 = !isActive1">Card 1</div>
    <div id="card2" :class="{ vert: isActive2 }" @click="isActive2 = !isActive2">Card 2</div>
  </section>

</template>

<script setup lang='js'>
  
  import { ref } from 'vue';
  const isActive1 = ref(true);
  const isActive2 = ref(true);

</script>
 

<style scoped lang="css">

  .rouge{
    background-color: red;
  }
  .vert{
    background-color: green;
  }

</style>