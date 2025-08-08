<template>
  <v-container class="pa-0 ma-0 d-flex justify-center" style="background: none;">
    <iframe
      :src="iframeSrc"
      width="1600"
      height="800"
      frameborder="0"
      scrolling="no"
      style="border: none; border-radius: 0; display: block; overflow: hidden;"
    ></iframe>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'

const iframeSrc = computed(() => {
  const base = import.meta.env.VITE_GW_URL
  return `${base}/chatbot/`
})
</script>