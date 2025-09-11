<template>
  <div>
    <h2>Dynamic Styling avec des classes</h2>
    <DynamicStylingCompClass></DynamicStylingCompClass>
    <h2>Dynamic Styling avec des styles en ligne</h2>
    <DynamicStylingCompStyle></DynamicStylingCompStyle>
  </div>
</template>

<script setup lang='js'>

  import { defineAsyncComponent } from 'vue';
  const DynamicStylingCompClass = defineAsyncComponent(() => import('./style_dynamique_class.vue'));
  const DynamicStylingCompStyle = defineAsyncComponent(() => import('./style_dynamique_style.vue'));

</script>

<style scoped lang="css">
</style>