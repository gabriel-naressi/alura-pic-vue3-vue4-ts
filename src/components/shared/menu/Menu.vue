<template>
  <nav>
    <ul>
      <li v-for="rota in rotas" :key="rota.name">
        <router-link :to="rota.path ? rota.path : '/'">
          {{ rota.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Menu",
  props: {
    rotas: {
      type: Array,
      required: true,
    },
  },
});
</script>