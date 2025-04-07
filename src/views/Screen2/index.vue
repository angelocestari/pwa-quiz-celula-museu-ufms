<template>
  <v-app>
    <top-bar></top-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container class="mt-n4">
        <v-row class="align-center">
          <v-col cols="12" md="6">
            <v-card class="pa-6 text-center elevation-3" max-width="500px">
              <v-card-title class="text-h4 font-weight-bold">Células Eucariontes</v-card-title>
              <v-card-subtitle class="text-h6 mt-3">O que você sabe sobre elas?</v-card-subtitle>
              <v-card-text class="text-body-1 mt-4">
                Você sabia que dentro do seu corpo existem verdadeiras cidades microscópicas funcionando sem parar?
                Agora chegou sua vez de explorar esse universo invisível, cheio de organelas incríveis e funções essenciais.
                <br>
                Prepare-se para descobrir os bastidores da vida! Vamos ver quem realmente manda na produção de energia, quem distribui proteínas e quem protege a célula como uma verdadeira muralha!
                <br>
                Partiu quiz das células?
              </v-card-text>
              <v-btn color="green"
                     variant="outlined"
                     class="px-6 py-3 rounded-lg"
                     @click="goToQuiz"
                     text="Iniciar o Quiz"
              ></v-btn>
            </v-card>
          </v-col>
          <v-col cols="12"
                 md="6"
                 class="d-flex justify-center">
            <v-img :src="urlCelula" max-width="700" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TopBar from "@/views/components/topBar.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const urlCelula = new URL('@/assets/celula_eucarionte_atualizada.jpg', import.meta.url).href

function goToQuiz() {
  router.push("/quiz");
}

</script>

<style scoped>

.v-main {
  min-height: 100vh;
}

v-card {
  border-radius: 12px;
}

</style>