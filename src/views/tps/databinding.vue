<!-- <template>
  <div>
    <img v-bind:src="src_image" :alt="nom" />
    <h3>Nom: {{ nom }}</h3>
    <input type="text" v-bind:value="nom" />
    <h3>Age: {{ age }}</h3>
    <h3>Age: {{ age10() }}</h3>
    <h3>Nombre fétiche: {{ random() }}</h3>
  </div>
</template>

<script setup lang='js'>

  import {ref} from 'vue';
  const src_image = 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg';
  const nom = ref("Dr Mario");
  const age = ref(45);
  const age10 = function(){
    return age.value + 10;
  }
  const random = () => Math.random();

</script> -->

<template>
  <div class="card bg-base-100 shadow-md p-6">
    <h5>Tp-Databinding : Mode Composition</h5>
  <div class="flex flex-col items-center justify-center">
      <!-- v-bind de l'attribut src de l'image -->
  <img v-bind:src="imageUser" :alt="nameUser" class="rounded-full w-24 h-24 object-cover" />
      <!-- interpolation du nom -->
  <span class="font-bold text-lg mt-3">{{ nameUser }}</span>
      <!-- v-bind de l'attribut value d'un input -->
  <input type="text" :value="nameUser" class="input input-bordered text-center mt-2" />
      <!-- <input type="text" v-model ="nameUser"> -->
  <div class="flex flex-row justify-center items-center gap-2 mt-2">
        <!-- interpolation de l'age -->
  <span class="badge badge-info">{{ ageUser }} ans</span>
      </div>
  <div class="flex flex-row justify-center items-center mt-3">
        <!-- interpolation fonction qui agmente l'age -->
        <span>age + 10 :
          <span class="badge badge-success">{{ augmenterAge() }} ans</span>
        </span>
      </div>
      <div class="px-2 rounded mt-4 bg-base-200">
        NB Fétiche :
        <!-- interpolation de la fonction qui génère un nb random  -->
        <span class="badge badge-warning">{{ nombreRandom() }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const nameUser = ref('Dr Mario');
const ageUser = ref(30);
const imageUser = 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg'

const augmenterAge = () => {
  // Avec les ref on peut acceder a leur value 
  // Voyez ref comme une sorte de conteneur reactif de vue pour les variables 
  return ageUser.value + 10;
}

const nombreRandom = () => {
  return Math.random();
  // return Math.floor(Math.random() * 100);
}
</script>