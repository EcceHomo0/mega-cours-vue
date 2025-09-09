<template>
  <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <h3>{{ chaine }}</h3>
    <h3>{{ booleen }}</h3>
    <h3>{{ nombre }}</h3>
    <h3>{{ tableau }}</h3>
    <h3>{{ tableau[0] }}</h3>
    <h3>{{ objet }}</h3>
    <h3>{{ objet.name }}</h3>
    <h3>{{ objet["name"] }}</h3>
    <h3>{{ objet.tel }}</h3>
    <h3>{{ objet["tel"] }}</h3>
    <h3>{{ sayhello() }}</h3>
    <h3>{{ random() }}</h3>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</template>

<script setup lang="js">
import {ref} from 'vue';
const chaine = ref("Les mémoires de Steven Seagal");
const booleen = ref(false);
const nombre = ref(1234567890);
const tableau = ref(["du texte",99]);
const objet = ref({"name":"COOL","tel":"060503030"});
function sayhello(){
  return "Hello World";
} 
function random(){
  // const nombre = Math.random();
  // if (nombre < 0.5){
  //   return 'le livre de boba fet'
  // }
  // else{
  //   return 'le livre de la jungle'
  // }
  return nombre < 0.5 ? 'le livre de boba fet' :'le livre de la jungle';
}
</script>


<style scoped>
</style>
