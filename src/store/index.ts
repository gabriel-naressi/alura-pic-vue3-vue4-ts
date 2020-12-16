import { Foto } from "@/domain/foto/Foto";
import FotoService from "@/domain/foto/FotoService";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  foto: Foto;
  fotos: Foto[];
  deleteFeedback: string;
  filterText: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

const service = new FotoService();

export const store = createStore<State>({
  strict: process.env.NODE_ENV !== "production",
  state: {
    foto: new Foto(),
    fotos: [],
    deleteFeedback: '',
    filterText: '',
  },
  mutations: {
    updatePicture(state, picture: Foto) {
      state.foto = picture;
    },
    pictureCreated(state, picture: Foto) {
      state.fotos.push(picture);
    },
    updateFilterText(state, value) {
      state.filterText = value;
    },
    pictureDeleted(state, picture: Foto) {
      const index = state.fotos.indexOf(picture);
      state.fotos.splice(index, 1);
      state.deleteFeedback = "Foto excluída com sucesso";
    },
    loadPictures(state, fotos: Foto[]): void {
      state.fotos = fotos;
    }
  },
  actions: {
    createPicture({commit}, picture: Foto): void {
      service.create(picture).then(
        () => { commit("pictureCreated", picture)},
        (err) => { commit("errorOnCreate", err )}
      )
    },
    deletePicture({ commit }, picture: Foto): void {
      service.delete(picture._id).then(
        () => { commit("pictureDeleted", picture)},
        (err) => { commit("errorOnDelete", err) }
      );
    },
    loadPictures({ commit }, pictures: Foto[]): void {
      service.listar().then((response) => commit("loadPictures", response.data));
    }
  },
  getters: {
    getPictures(state): Foto[] {
      return state.fotos;
    },
    getFilteredPictures(state): Foto[] {
      if (state.filterText) {
        const exp = new RegExp(state.filterText.trim(), "i");
        return state.fotos.filter((pic) => exp.test(pic.titulo));
      } else {
        return state.fotos;
      }
    }
  }
});

export function useStore() {
  return baseUseStore(key);
}
