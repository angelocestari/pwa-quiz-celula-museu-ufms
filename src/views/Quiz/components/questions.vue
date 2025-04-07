<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-img :src="image" height="200px"></v-img>
        <v-card-title class="text-h5 mb-2 text-justify"
                         style="word-wrap: break-word ; white-space: normal ; color: white">

          {{ question }}
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="(option, index) in options"
                   :key="index"
                   cols="12"
                   class="mb-2"
            >
              <v-btn block :color="getButtonColor(option)"
                     @click="selectOption(option)"
                     :class="{'animate-correct': selectedOption === option && option === correct, 'btn-wrap': true}">
                {{ option }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import {ref} from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  question: {
    type: String,
    default: "Qual é a sua pergunta?"
  },
  options: {
    type: Array,
    default: () => ['Option 1', 'Option 2', 'Option 3', 'Option 4']
  },
  correct: {
    type: String,
    required: true
  }
})

const emit = defineEmits(["answered"])

const selectedOption = ref(null)

function selectOption(option) {
  if (selectedOption.value === null){
    selectedOption.value = option
    const isCorrect = option === props.correct
    if (!isCorrect) {
      console.log("Resposta errada")
    }
    setTimeout(() => {
      emit("answered", isCorrect);
      selectedOption.value = null
    }, 1000)
  }
}

function getButtonColor(option) {
  if (selectedOption.value === null){
    return 'primary'
  }
  if (selectedOption.value === option) {
    return option === props.correct ? 'green' : 'red'
  }

  return 'primary'
}

</script>

<style scoped>

.animate-correct {
  animation: pulse 1s ease-in-out;
}

.btn-wrap ::v-deep .v-btn__content {
  white-space: normal !important;
  word-wrap: break-word !important;
  text-align: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>