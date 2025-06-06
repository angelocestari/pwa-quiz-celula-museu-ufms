<template>
  <v-container>
    <v-row
        v-for="(question, index) in selectQuestions"
        :key="index"
        align="center"
    >
      <v-col cols="12" md="8">
        <v-card variant="elevated" class="pa-2" style="border-radius: 12px;">
          <div class="font-weight-medium text-subtitle-1">
            {{ index + 1 }} - {{ question.question }}
          </div>
          <v-select
              :items="question.options"
              v-model="userAnswers[index]"
              label="Escolha a resposta"
              variant="solo-filled"
              density="comfortable"
              class="white-select"
              :disabled="isCorrectArray[index] !== null"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="text-center">
        <v-img
            v-if="question.image"
            :src="question.image"
            max-width="120"
            class="rounded-lg elevation-4"
            style="border: 2px solid white; background-color: white;"
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-btn
            color="white"
            class="font-weight-bold"
            @click="finalizeSelectQuiz"
        >
          Finalizar Quiz Seletivo
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import {ref, defineEmits} from 'vue';

const emit = defineEmits(['finished']);
const selectQuestions = [
  {
    image: new URL('@/assets/nucleo.jpg', import.meta.url).href,
    question: 'Centro que comanda todo o funcionamento celular, pois abriga a molécula (DNA) responsável por ditar todas as regras dentro dela.',
    options: ['Núcleo', 'Réticulo endoplasmático', 'Membrana Plasmática', 'Ribossomo'],
    correct: 'Núcleo',
  },
  {
    image: new URL('@/assets/ribossomo.jpg', import.meta.url).href,
    question: 'Pequenas estruturas responsáveis pela síntese de proteínas.',
    options: ['Núcleo', 'Réticulo endoplasmático', 'Membrana Plasmática', 'Ribossomo'],
    correct: 'Ribossomo',
  },
  {
    image: new URL('@/assets/reticulo_endoplasmatico.jpg', import.meta.url).href,
    question: 'Pode ser visto como uma rede de túneis interconectados responsável por formar proteínas e lipídios para compor partes da célula e permitir seu perfeito funcionamento.',
    options: ['Núcleo', 'Retículo endoplasmático', 'Membrana Plasmática', 'Ribossomo'],
    correct: 'Retículo endoplasmático'
  },
  {
    image: new URL('@/assets/membrana_celular.jpg', import.meta.url).href,
    question: 'A Membrana Plasmática controla o que entra e o que sai e ainda permite que a célula se comunique com o ambiente externo. Ela reveste a célula se comportando como uma verdadeira fronteira.',
    options: ['Núcleo', 'Réticulo endoplasmático', 'Membrana Plasmática', 'Ribossomo'],
    correct: 'Membrana Plasmática'
  }
];

const userAnswers = ref(Array(selectQuestions.length).fill(null));
const isCorrectArray = ref(Array(selectQuestions.length).fill(null));


function finalizeSelectQuiz() {
  let correctAnswers = 0;
  selectQuestions.forEach((question, index) => {
    if (userAnswers.value[index] === question.correct) {
      correctAnswers++;
    }
  });
  emit('finished', correctAnswers);
}
</script>




