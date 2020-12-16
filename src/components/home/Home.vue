<template>
  <div>
    <h1 class="centralizado">{{ title }}</h1>
    <p v-show="mensagem">{{ mensagem }}</p>
    <input
      type="search"
      class="filtro"
      v-on:input="filtro = $event.target.value"
      placeholder="filtre por parte do título"
    />
    <ul class="lista-fotos">
      <li
        class="lista-fotos-item"
        v-for="picture of pictures"
        :key="picture.url"
      >
        <ImagemResponsiva
          :url="picture.url"
          :titulo="picture.titulo"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Painel from "../shared/painel/Painel.vue";
import Botao from "../shared/botao/Botao.vue";
import { computed } from "vue";
import { useStore } from "../../store";

export default {
  //Import de componentes. A chave do objeto é o "apelido" do componente.
  setup() {
    const store = useStore();
    store.dispatch("loadPictures");
    return {
      pictures: computed(() => store.getters.getPictures),
    }
  },
  components: {
    ImagemResponsiva,
  },
  //Fonte de dados que se deseja controlar (state).
  data() {
    return {
      title: "Alurapic",
      fotos: [],
      filtro: "",
      mensagem: "",
    };
  },
  computed: {
    /*fotosComFiltro() {
      if (this.filtro) {
        const exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },*/
  },
};

</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>

