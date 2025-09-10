<template>
  <div class="bg-base-100 shadow-sm">
    <h1>TP Event Binding</h1>
    <input type="text" v-model="inputValue"/>
    <p>Le contenu de l'input 1 est: {{ inputValue }}</p>
    <input type="text" v-model="inputValue2" v-on:keydown.esc="updateDisplayValue2" />
    <p>Le contenu de l'input 2 est: {{ displayValue2 }}</p>
    <button class="btn btn-primary" v-on:click="alerte">Cliquez ici</button>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const inputValue = ref('');
const inputValue2 = ref('');
const displayValue2 = ref('');

const updateDisplayValue2 = () => {
  displayValue2.value = inputValue2.value;
}

const alerte = () => {
  alert('Bouton cliqué !');
}

</script>





