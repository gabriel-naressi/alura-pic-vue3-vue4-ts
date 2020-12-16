<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>
    <p>Titulo: {{foto.titulo}}</p>
    <p>Url: {{foto.url}}</p>
    <p>Descricao: {{foto.descricao}}</p>
    <form @submit.prevent="create()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" @input="update('titulo', $event)" :value="foto.titulo" />
      </div>
      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" @input="update('url', $event)" :value="foto.url" />
        <imagem-responsiva
          v-show="url"
          :url="url"
          :titulo="titulo"
        />
      </div>
      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          id="descricao"
          autocomplete="off"
          @input="update('descricao', $event)" :value="foto.descricao"
        ></textarea>
      </div>
      <div class="centralizado">
        <Botao rotulo="GRAVAR" tipo="submit" />
        <router-link to="/">
          <Botao rotulo="VOLTAR" tipo="button"/>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import { computed } from "vue";
import { useStore } from "../../store";
import { Foto } from '@/domain/foto/Foto';

export default {
  setup() {
    const store = useStore();
    return {
      update (key: string, event: any) {
        store.commit('update', {
          path: key,
          value: event.target.value
        });
      },
      foto: computed(() => store.state.foto),
      create(): void {
        store.dispatch("createPicture");
      }
    }
  },
  components: {
    ImagemResponsiva,
    Botao,
  },
};
</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>