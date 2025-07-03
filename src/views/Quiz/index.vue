<template>
  <v-app>
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
              <div v-else>
                <v-card color="transparent" class="text-center">
                  <v-card-title class="text-h4 text-white">
                    Quiz Finalizado!
                  </v-card-title>
                  <v-card-text class="text-h5 text-center text-white">
                    {{score}}/{{questionList.length}} acertos
                  </v-card-text>
                  <v-btn color="#0088B7"
                         variant="elevated"
                         class="px-6 py-3 text-white rounded-lg mt-5"
                         @click="goToHome"
                  >Finalizar</v-btn>
                </v-card>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
import {ref, computed} from "vue";
import Questions from "@/views/Quiz/components/questions.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const questionList = [
  {
    image: new URL('@/assets/mitocondria.png', import.meta.url).href,
    question: '1- Qual é a organela conhecida como a "usina de energia" da célula, responsável por produzir energia a partir dos nutrientes?',
    options: ['Réticulo endoplasmático', 'Ribossomo', 'Mitocôndria', 'Lisossomo'],
    correct: 'Mitocôndria'
  },
  {
    image: new URL('@/assets/aparelho_golgi.png', import.meta.url).href,
    question: '2- Qual organela, formada por sacos achatados e empilhados, atua como um centro de distribuição na célula, transformando e direcionando o que é produzido para os lugares certos?',
    options: ['Lisossomos', 'Aparelho de Golgi', 'Núcleo', 'Retículo endoplasmático'],
    correct: 'Aparelho de Golgi'
  },
  {
    image: new URL('@/assets/divisao_celular.png', import.meta.url).href,
    question: '3- Quando você cresce ou se recupera de um machucado, suas células precisam se dividir para formar novas células. Durante essa divisão, existe uma organela que organiza e direciona os cromossomos duplicados para que a divisão ocorra corretamente. Qual é essa organela?',
    options: ['Mitocôndria', 'Centríolos', 'Núcleo', 'Vacúolo'],
    correct: 'Centríolos'
  },
  {
    image: new URL('@/assets/citoesqueleto.png', import.meta.url).href,
    question: '4- As células podem ter várias formas e algumas, como as do sistema imunológico, conseguem se movimentar. Qual é o nome da rede dinâmica dentro das células que dá suporte estrutural e ajuda nesse movimento?',
    options: ['Centríolos', 'Citoesqueleto', 'Núcleo', 'DNA'],
    correct: 'Citoesqueleto'
  },
  {
    image: new URL('@/assets/lisossomo.png', import.meta.url).href,
    question: '5- Dentro da célula existem organelas responsáveis em reciclar aquilo que não está sendo útil. E isso permite que o indesejado seja degradado e possa retornar a ser utilizado pela célula. Quem são essas organelas?',
    options: ['Lisossomos', 'Complexo de Golgi', 'Centríolos', 'Réticulo endoplasmático'],
    correct: 'Lisossomos'
  },
  {
    image: new URL('@/assets/peroxissomo.png', import.meta.url).href,
    question: '6- Quem são os peroxissomos?',
    options: [
      'Organelas que degradam partículas inúteis dentro da célula',
      'Organelas que neutralizam e transformam substâncias tóxicas em inofensivas dentro da célula',
      'Organelas que produzem muitas energia',
      'Organelas que armazenam gordura'
    ],
    correct: 'Organelas que neutralizam e transformam substâncias tóxicas em inofensivas dentro da célula'
  },
  {
    image: new URL('@/assets/membrana.png', import.meta.url).href,
    question: '7- Ela controla o que entra e o que sai e ainda permite que a célula se comunique com o ambiente externo. Ela reveste a célula se comportando como uma verdadeira fronteira. Ela é o(a):',
    options: ['Lisossomos', 'Complexo de Golgi', 'Membrana plasmática', 'Réticulo endoplasmático'],
    correct: 'Membrana plasmática'
  },
  {
    image: new URL('@/assets/nucleo.png', import.meta.url).href,
    question: '8- A célula possui um centro que comanda todo o seu funcionamento, pois abriga a molécula (DNA) responsável por ditar todas as regras dentro dela. Quem é esse centro?',
    options: ['Mitocôndria', 'Membrana plasmática', 'Núcleo', 'Vacúolo'],
    correct: 'Núcleo'
  }
]

const currentIndex = ref(0)
const score = ref(0)
const selectQuizStarted = ref(false)
const selectQuizFinished = ref(false)
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

function goToHome() {
  router.push('/')
}

</script>

<style scoped>

.v-application {
  background-image: url("@/assets/imagem_fundo_quiz.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
}

</style>