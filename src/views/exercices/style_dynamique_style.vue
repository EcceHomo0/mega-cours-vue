<template>

  <section>
    <div id="card1bis" :style="active1 ? {backgroundColor: 'red'} : { backgroundColor: 'gray'}" @click="active1 = !active1"> Card 1 bis</div>
    <div id="card2bis" :style="active2 ? {backgroundColor: 'yellow', color:'black'} : { backgroundColor: 'green', color: 'white'}" @click="active2 = !active2">Card 2 bis</div>
  </section>
  
</template>

<script setup lang='js'>
  
  import { ref } from 'vue';

  const active1 =  ref(true);
  const active2 =  ref(true);

</script>