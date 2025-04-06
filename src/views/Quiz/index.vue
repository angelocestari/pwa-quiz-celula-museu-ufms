<template>
  <v-app style="background-color: #0088B7">
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="auto">
            <div>
              <questions
                  v-if="currentQuestion"
                  :image="currentQuestion.image"
                  :question="currentQuestion.question"
                  :options="currentQuestion.options"
                  :correct="currentQuestion.correct"
                  @answered="handleAnswered"
              ></questions>
              <div v-else-if="selectQuizStarted && !selectQuizFinished">
                <SelectQuestions @finished="handleSelectQuizFinished"></SelectQuestions>
              </div>
              <div v-else-if="selectQuizFinished" class="text-h4" style="color: white">
                Quiz Finalizado! Pontuação: {{ finalScore }}/{{ questionList.length + 4 }}

                <v-btn text="Finalizar Aventura"
                       @click="goToHome"
                ></v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
import { ref, computed } from "vue";
import Questions from "@/views/Quiz/components/questions.vue";
import SelectQuestions from "@/views/Quiz/components/SelectQuestions.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const questionList = [
  {
    image: 'src/assets/mitocondria_fabrica.jpg',
    question: '1- Quando precisamos de energia, nós nos alimentamos e os macronutrientes são conduzidos para todas as nossas células. Qual é a organela responsável por transformar os macronutrientes em energia?',
    options: ['Réticulo endoplasmático', 'Ribossomo', 'Mitocôndria', 'Lisossomo'],
    correct: 'Mitocôndria'
  },
  {
    image: 'src/assets/complexo_de_golgi.jpg',
    question: '2- Qual a organela se comporta como sacos achatados e empilhados com a capacidade de direcionar o que é produzido dentro da célula, funcionando como verdadeiros centros de distribuição?',
    options: ['Lisossomos', 'Aparelho de Golgi', 'Núcleo', 'Retículo endoplasmático'],
    correct: 'Aparelho de Golgi'
  },
  {
    image: '',
    question: '3- Você se tornou o que é devido a um fenômeno chamado de multiplicação celular. Você é constituído por milhares de células, mas um dia foi somente uma. Quando uma célula dá origem a duas, existe uma organela importante que organiza o direcionamento dos cromossomos duplicados. Quem são essas organelas?',
    options: ['Mitocôndria', 'Centríolos', 'Núcleo', 'Vacúolo'],
    correct: 'Centríolos'
  },
  {
    image: '',
    question: '4- As células podem apresentar diferentes formas, desde achatadas até prismáticas. Algumas podem se movimentar como o que ocorre com as células do nosso sistema imunológico. Existem estruturas que formam uma rede dinâmica e que garantem propriedade estrutural às células. De que rede estamos falando?',
    options: ['Centríolos', 'Citoesqueleto', 'Núcleo', 'DNA'],
    correct: 'Citoesqueleto'
  },
  {
    image: 'src/assets/lisossomo.jpg',
    question: '5- Dentro da célula existem organelas responsáveis em reciclar aquilo que não está sendo útil. E isso permite que o indesejado seja degradado e possa retornar a ser utilizado pela célula. Quem são essas organelas?',
    options: ['Lisossomos', 'Complexo de Golgi', 'Centríolos', 'Réticulo endoplasmático'],
    correct: 'Lisossomos'
  },
  {
    image: 'src/assets/peroxissomo.jpg',
    question: '6- Quem são os peroxissomos?',
    options: [
        'Organelas que degradam partículas inúteis dentro da célula',
        'Organelas que neutralizam e transformam substâncias tóxicas em inofensivas dentro da célula',
        'Organelas que produzem muitas energia',
        'Organelas que armazenam gordura'
    ],
    correct: 'Organelas que neutralizam e transformam substâncias tóxicas em inofensivas dentro da célula'
  }
]

const currentIndex = ref(0)
const score = ref(0)
const selectQuizStarted = ref(false)
const selectQuizFinished = ref(false)
const finalScore = computed(() => score.value + extraScore.value)
const extraScore = ref(0)

const currentQuestion = computed(() => questionList[currentIndex.value] || null);

function handleAnswered(isCorrect) {
  if (isCorrect) {
    score.value++
  }
  currentIndex.value++

  if (currentIndex.value >= questionList.length) {
    selectQuizStarted.value = true
  }
}

function handleSelectQuizFinished(correctCount) {
  extraScore.value = correctCount
  selectQuizFinished.value = true
}

function goToHome() {
  router.push('/')
}


</script>