<template>

    <h2>Ajouter un ami:</h2>
    <form @submit.prevent="ajouterAmi">
        <input v-model="name" type="text" placeholder="Nom" />
        <input v-model="tel" type="tel" placeholder="Téléphone" />
        <input v-model="mail" type="email" placeholder="Email" />
        <button type="submit" class="btn btn-accent">Ajouter</button>
    </form>

    <div class="card w-full max-w-md bg-base-200 shadow-xl my-4">
        <div class="card-body">
            <h2 class="card-title text-primary">
                👤 {{ unAmiName }}
                <div class="badge" :class="premium ? 'badge-success' : 'badge-ghost'">
                    {{ premium ? 'Ami en or' : 'Ami en plomb' }}
                </div>
            </h2>

            <div class="space-y-2 text-base-content">
                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-primary">ID</span>
                    {{ id }}
                </p>

                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-secondary">📞</span>
                    {{ unAmiPhone }}
                </p>

                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-accent">📧</span>
                    {{ unAmiMail }}
                </p>
            </div>

            <div class="card-actions justify-end mt-4">
                <button class="btn btn-sm btn-error" @click="delete_friend">Supprimer</button>
                <button class="btn btn-sm btn-info" @click="changer_statut">Changer statut</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    unAmiName: {
        type: String,
        required: true,
    },
    unAmiPhone: {
        type: String,
        required: true,
    },
    unAmiMail: {
        type: String,
        required: true,
    },
    premium: {
        type: Boolean,
        required: false,
        default: false,
    },
})
const emit = defineEmits(['delete','change','addFriend'])
const delete_friend = () => {emit('delete',props.id)};
const premiumData = ref(props.premium);
const statut = () => {
    console.log('clic');
premiumData.value = !premiumData.value;
};
const changer_statut = () => {emit('change',props.id)};

const name = ref('');
const tel = ref('');
const mail = ref('');

function ajouterAmi() {
  const nouvelAmi = {
    id: Math.random().toString(36).substr(2, 9),
    name: name.value,
    phone: tel.value,
    email: mail.value,
    premium: false,
  };
  
  emit('addFriend', nouvelAmi);
  name.value = '';
  tel.value = '';
  mail.value = '';
}

</script>