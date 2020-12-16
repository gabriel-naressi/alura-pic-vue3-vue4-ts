<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>
    <form @submit.prevent="create()">
      <!--<div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo" />
      </div>-->
      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="url" />
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
          v-model="descricao"
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
      url: computed({
        get (): string {
          return store.state.foto.url;
        },
        set (value: string): void {
          return store.commit('updatePictureUrl', value);
        }
      }),
      title: computed({
        get (): string {
          return store.state.foto.titulo;
        },
        set (value: string): void {
          return store.commit('updatePictureTitle', value);
        }
      }),
      description: computed({
        get (): string {
          return store.state.foto.descricao;
        },
        set (value: string): void {
          return store.commit('updatePictureDesc', value);
        }
      }),
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