<template>
  <h1>Communication entre composants</h1>
  <main>
    <UserData @submitFormulaire="recupDonnees"></UserData>
    <UserActive :Utilisateur="userData"></UserActive>
  </main>
</template>

<script setup lang='js'>
import UserActive from './UserActive.vue';
import UserData from './UserData.vue';
import { ref } from 'vue';

const userData = ref({
  name: '',
  age: 0
});

function recupDonnees(data) {
  userData.value = data;
}

</script>


<style scoped lang="css">
main{
  background-color: lightgrey;
}

</style>