<template>
  <div class="corpo">
    <meu-menu :rotas="routes" />
    <router-view />
  </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu.vue";
import { routes } from "@/router/routes";

export default {
  components: {
    "meu-menu": Menu,
  },
  data() {
    return { routes };
  },
};
</script>

<style scoped>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.4s;
}
</style>
