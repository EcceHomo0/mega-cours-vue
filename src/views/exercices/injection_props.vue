<template>

  <h1>Ici La page des Copains !</h1>
  <!-- <OneFriend 
    id="toto"
    unAmiName="totoName"
    unAmiPhone="totoPhone"
    unAmiMail="totoMail"
    :premium="true"
    ></OneFriend> -->

  <!-- On arrive a l'utiliser une fois on va le répéter plusieurs fois (cf autant de fois qu'on a des elements dans le tableau) -->
  <OneFriend
    v-for="ami in lesAmis"
    :id="ami.id"
    :unAmiName="ami.name"
    :unAmiPhone="ami.phone"
    :unAmiMail="ami.email"
    :premium="ami.premium"
    @delete="delete_friend($event)"
    @change="changer_statut($event)"
    @addFriend="ajoutAmi($event)"
  ></OneFriend>
  <!-- <NewFriend>
    @addFriend="add_friend($event)"
  </NewFriend> -->
</template>

<script setup lang="js">
import OneFriend from "../../components/OneFriend.vue";
import { ref, defineEmits } from "vue";

const lesAmis = ref([
  {
    id: "lasticot",
    name: "COCO L ASTICOT",
    phone: "01234 5678 991",
    email: "coco@lasticot.com",
    premium: true,
  },
  {
    id: "lasticot2",
    name: "COCO L ASTICOT",
    phone: "01234 5678 991",
    email: "coco@lasticot.com",
    premium: true,
  },
  {
    id: "kimonoSurUnFrigo",
    name: "Steven Seagal",
    phone: "+338765477",
    email: "steven@seagal.com",
    premium: true,
  },
  {
    id: "yoyoyo",
    name: "JAROD",
    phone: "+338765477",
    email: "jAROD@seagal.com",
    premium: true,
  },
  {
    id: "yorobo",
    name: "Arafat DJ",
    phone: "+338765477",
    email: "jAROD@seagal.com",
    premium: true,
  },


]);


function delete_friend() {
  lesAmis.value.splice(lesAmis.id, 1);
}

function changer_statut(id) {
  const amiAtrouver = lesAmis.value.find((unAmi) => unAmi.id === id);
  console.log(amiAtrouver.premium);
  if (amiAtrouver) {
    amiAtrouver.premium = !amiAtrouver.premium;
  }
  console.log(amiAtrouver.premium);
}

function ajoutAmi(nouvelAmi) {
lesAmis.value.push(nouvelAmi);
}

</script>
