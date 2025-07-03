<template>
  <v-app>
    <Navbar @open-modal="openModal"></Navbar>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-row class="justify-center text-center">
          <v-col cols="12">
            <v-img :src="urlLogoMuseu" max-width="400"></v-img>
          </v-col>
        </v-row>
        <v-row class="justify-center text-end mt-8 mr-8">
          <v-col cols="12">
            <v-btn color="#0088B7"
                   text="Iniciar Aventura"
                   variant="elevated"
                   class="px-6 py-3 text-white rounded-lg"
                   @click="goToTela2"
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <SobreModal v-model="showModal"></SobreModal>
  </v-app>
</template>


<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";
import Navbar from "@/views/HomePage/components/navbar.vue";
import SobreModal from "@/views/HomePage/components/sobreModal.vue";

const showModal = ref(false);
const router = useRouter();
const urlLogoMuseu = new URL('@/assets/logo_museu.png', import.meta.url).href


function openModal() {
  showModal.value = true;
}

function goToTela2() {
  router.push("/screen2");
}

</script>

<style scoped>
.v-main {
  min-height: calc(100vh - 64px);
}

.v-btn{
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
}


</style>