<template>
  <p>Affichage de l'utilisateur courant</p>
  <p>{{ Utilisateur.name }}</p>
  <p>{{ Utilisateur.age }}</p>
</template>

<script setup lang='js'>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(['Utilisateur'])

const Utilisateur = ref({
  name: props.name,
  age: props.age
});

</script>

<style scoped lang="css">
</style>