<template>
    <h1>TP: Dynamic Styling Mode : Composition</h1>
    <input id="input1" placeholder="Entrez votre texte ici" v-model="texte"></input>
    <h2 id="h2_1" :class="[{ maClasseHello: texte === 'hello' , maClasseWorld: texte === 'world'},{invisible: estInvisible}]">Hello World (class dynamique)</h2>
    <input id="input2" placeholder="Entrez votre texte ici" v-model="couleur"></input>
    <h2 id="h2_2" :style="{ color: couleur }">Hello World (couleur dynamique)</h2>
    <br></br>
    <button class="btn btn-primary" @click="visible = !visible">Afficher 1er Titre</button>
</template>


<script setup lang='js'>

    import { ref } from 'vue';
    const texte = ref('');
    const couleur = ref('');
    const estInvisible = ref(false);

</script>


<style scoped lang="css">

    .maClasseHello{
        color: blue;
        font-size: 24px;
        font-weight: bold;
    }
    .maClasseWorld{
        color: green;
        font-size: 20px;
        font-weight: bold;
    }
    .invisible{
        display:none;
    }

</style>