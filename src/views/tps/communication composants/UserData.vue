<template>
  <h2>Composant formulaire d'édition:</h2>
    <form @submit.prevent="MAJuser">
        <input v-model="name" type="text" placeholder="Entrez votre Nom" />
        <input v-model="age" type="number" placeholder="Entrez votre Âge" />       
        <button type="submit" class="btn btn-accent">Mettre à jour</button>
    </form>
</template>

<script setup lang='js'>
import { ref, defineEmits } from 'vue';

const name = ref('');
const age = ref('');

const emit = defineEmits(['submitFormulaire']);

const Objet_utilisateur = ref({
  name: name.value,
  age: age.value
});

function MAJuser() {
  Objet_utilisateur.value.name = name.value;
  Objet_utilisateur.value.age = age.value;
  console.log(Objet_utilisateur.value);
  emit('submitFormulaire', Objet_utilisateur);
}

 

</script>

<style scoped lang="css">
</style>