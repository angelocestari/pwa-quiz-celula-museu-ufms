<template>
  <v-app style="background-color: #0088B7">
    <v-main class="d-flex align-center justify-center">
      <div>
        <questions
            v-if="currentQuestion"
            :image="currentQuestion.image"
            :question="currentQuestion.question"
            :options="currentQuestion.options"
            :correct="currentQuestion.correct"
            @answered="handleAnswered"
        ></questions>
        <div v-else class="text-h4" style="color: white">
          Quiz Finalizado! Pontuação: {{ score }}/{{ questionList.length }}

          <v-btn text="Finalizar Aventura"
                 @click="goToHome"
          ></v-btn>
        </div>
      </div>
    </v-main>
  </v-app>
</template>


<script setup>
import { ref, computed } from "vue";
import Questions from "@/views/Quiz/components/questions.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const questionList = [
  {
    image: 'src/assets/mitocondria_fabrica.jpg',
    question: 'Quando precisamos de energia, nós nos alimentamos e os macronutrientes são conduzidos para todas as nossas células. Qual é a organela responsável por transformar os macronutrientes em energia?',
    options: ['Réticulo endoplasmático', 'Ribossomo', 'Mitocôndria', 'Lisossomo'],
    correct: 'Mitocôndria'
  },
]

const currentIndex = ref(0)
const score = ref(0)

const currentQuestion = computed(() => questionList[currentIndex.value] || null);

function handleAnswered(isCorrect) {
  if (isCorrect) {
    score.value++
  }
  currentIndex.value++
}

function goToHome() {
  router.push('/')
}


</script>