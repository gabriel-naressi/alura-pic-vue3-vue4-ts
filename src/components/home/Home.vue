<template>
  <div>
    <h1 class="centralizado">{{ title }}</h1>
    <p v-show="deleteFeedback">{{ deleteFeedback }}</p>
    {{ filterText }}
    <input
      type="search"
      class="filtro"
      v-model="filterText"
      placeholder="filtre por parte do título"
    />
    <ul class="lista-fotos">
      <li
        class="lista-fotos-item"
        v-for="picture of filteredPictures"
        :key="picture.url"
      >
        <div class="painel">
          <Painel :titulo="picture.titulo">
            <ImagemResponsiva
              :url="picture.url"
              :titulo="picture.titulo"
            />
            <Botao
              tipo="button"
              rotulo="REMOVER"
              @botaoAtivado="deletePicture($event, picture)"
              :confirmacao="false"
              estilo="perigo"
            />
          </Painel>
        </div>
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
import { Foto } from '@/domain/foto/Foto';

export default {
  //Import de componentes. A chave do objeto é o "apelido" do componente.
  setup() {
    const store = useStore();
    store.dispatch("loadPictures");
    return {
      deletePicture: (e: Event, picture: Foto) => { store.dispatch("deletePicture", picture) },
      //Two-way Computed Property. Reference: https://next.vuex.vuejs.org/guide/forms.html#two-way-computed-property
      filterText: computed({
        get (): string {
          return store.state.filterText;
        },
        set (value: string): void {
          return store.commit('updateFilterText', value);
        }
      }),
      filteredPictures: computed(() => store.getters.getFilteredPictures),
      deleteFeedback: computed(() => store.getters.deleteFeedback),
      pictures: computed(() => store.getters.getPictures),
    }
  },
  components: {
    ImagemResponsiva,
    Botao,
    Painel,
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

