<template>
  <img class="imagem-responsiva" :src="url" :alt="titulo" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImagemResponsiva",
  props: {
    url: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
</style>