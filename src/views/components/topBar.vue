<template>
  <v-app-bar color="#0088B7">
    <v-toolbar-title class="text-center w-100">
      Conhecendo as Células Eucariontes
    </v-toolbar-title>
    <v-img :src="url" max-width="100" class="mr-4"></v-img>
  </v-app-bar>
</template>

<script setup>

const url = new URL('@/assets/logo_ufms.svg', import.meta.url).href

</script>