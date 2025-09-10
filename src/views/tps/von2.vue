<template>
  <div class="bg-base-100 shadow-sm">
    <h1>TP Event Binding</h1>
    <input type=text v-on:keyup="afficherInput($event)" />
    <p>Le contenu de l'input 1 est: {{ inputValue }}</p>
    <input type="text" @keyup.esc="InputConfirm($event)" />
    <p>Le contenu de l'input 2 est: {{ inputValue2 }}</p>
    <button class="btn btn-primary" v-on:click="alerte">Cliquez ici</button>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const inputValue = ref('');
const inputValue2 = ref('');

function afficherInput(event){
  console.log(event);
  inputValue.value = event.target.value;
}

function InputConfirm(event) {
  inputValue2.value = event.target.value;
}

const alerte = () => {
  alert('Bouton cliqué !');
}

</script>






