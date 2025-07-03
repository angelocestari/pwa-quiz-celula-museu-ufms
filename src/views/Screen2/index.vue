<template>
  <v-app>
    <div class="top-bar">
      <v-container>
        <v-row>
          <v-col cols="auto">
            <v-btn text="Voltar"
                   color="#0088B7"
                   variant="elevated"
                   class="px-6 py-3 text-white rounded-lg"
                   @click="goToHomePage"
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-main>
      <div class="card-lateral">
        <v-card class="pa-6 elevation-4 text-white text-center"
                color="transparent"
                width="60%"
        >
          <v-card-title class="text-h5 font-weight-bold text-white text-wrap">
            Você já parou pra pensar no que acontece dentro da sua célula?
          </v-card-title>
          <v-card-text class="text-h6">
            <br>
            O que será que ela carrega por aí? E por que será que ela é tão importante pra gente? <br>
            Está na hora de colocar seu cérebro para trabalhar!<br>
            Topa encarar um quiz cheio de curiosidades sobre esse universo microscópico? Vamos ver quantas você acerta!
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="#0088B7"
                   variant="elevated"
                   class="px-6 py-3 text-white rounded-lg mt-5"
                   @click="goToQuiz"
            >Iniciar</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function goToQuiz() {
  router.push("/quiz");
}

function goToHomePage() {
  router.push("/");
}

</script>

<style scoped>

.v-main {
  min-height: 100vh;
  padding-top: 80px;
  position: relative;
}

.v-application {
  background-image: url("@/assets/imagem_fundo_quiz.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
}

.top-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-lateral {
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translateY(-50%);
}


</style>