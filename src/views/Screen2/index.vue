<template>
  <v-row>
    <v-col class="d-flex justify-center" cols="12">
      <v-img :src="url" max-width="90%"></v-img>
    </v-col>
  </v-row>
</template>


<script setup>

const url = new URL('../../assets/celula_eucarionte_atualizada.jpg', import.meta.url).href


</script>
