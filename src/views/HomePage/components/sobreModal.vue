<template>
  <v-dialog :model-value="isOpen" max-width="600">
    <v-card class="overflow-y-hidden">
      <v-card-title class="text-h5">Sobre esta aplicação</v-card-title>
      <v-card-text class="text-justify">
        Aplicação desenvolvida voluntariamente pelo acadêmico Angelo Henrique Peres Cestari Junior do curso de
        Engenharia de Computação sob orientação da
        professora Luciana Montera e colaboração da professora Ludimila Canuto Faccioni (autoria das imagens e
        curadoria de conteúdo).
      </v-card-text>
      <v-row>
        <v-col cols="6">
          <v-img :src="urlLogofacom" max-height="100"></v-img>
        </v-col>
        <v-col cols="6">
          <v-img :src="urlLogoUfms" max-height="100"></v-img>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-row class="mt-2" justify="end">
          <v-col cols="auto">
            <v-btn color="red" @click="closeModal">Fechar</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {computed, defineProps, defineEmits} from "vue";

const props = defineProps({
  modelValue: Boolean,
});

const urlLogoUfms = new URL('../../../assets/logo_ufms.svg', import.meta.url).href
const urlLogofacom = new URL('../../../assets/logo_facom.svg', import.meta.url).href


const emit = defineEmits(["update:modelValue"]);

const isOpen = computed(() => props.modelValue);

function closeModal() {
  emit("update:modelValue", false);
}
</script>

<style scoped>
</style>
