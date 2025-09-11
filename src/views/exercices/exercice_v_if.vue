<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">WatchList 🎬 (Films à voir) - Mode : Composition</h2>

            <input  type="text" placeholder="Entrez le nom d'un film" class="input input-bordered w-full mb-3" v-model="film"/>

            <button  class="btn btn-primary mb-4" @click="ajouterFilm">
                Ajouter à votre Liste
            </button>

            <hr class="my-4" />

            <div >
                <h3 class="text-xl font-semibold mb-2">Votre film ajouté : </h3>
            </div>

            <p class="text-gray-500">
                <!-- Pas encore de films dans votre liste ? Veuillez en ajouter un. -->
                 <!-- {{ films[films.length - 1] }} -->
                  {{ contenu }}
            </p>
        </div>
    </div>
</template>

<script setup lang='js'>

    import { ref } from 'vue';
    const films = ref([]);
    const film = ref('');
    const contenu = ref('Pas encore de films dans votre liste ? Veuillez en ajouter un.');
    function ajouterFilm() {
      films.value.push(film.value);
      contenu.value = film.value;
    }
    

    

</script>