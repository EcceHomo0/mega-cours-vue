<template>
  <div>
    <DynamicStylingComp></DynamicStylingComp>
  </div>
</template>

<script setup lang='js'>

  import { defineAsyncComponent } from 'vue';
  const DynamicStylingComp = defineAsyncComponent(() => import('./exercice_style_dynamique.vue'));

</script>

<style scoped lang="css">
</style>