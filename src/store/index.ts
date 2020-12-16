import { Foto } from "@/domain/foto/Foto";
import FotoService from "@/domain/foto/FotoService";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  fotos: Foto[];
}

export const key: InjectionKey<Store<State>> = Symbol();

const service = new FotoService();

export const store = createStore<State>({
  strict: process.env.NODE_ENV !== "production",
  state: {
    fotos: []
  },
  mutations: {
    loadPictures(state, fotos: Foto[]): void {
      state.fotos = fotos;
    }
  },
  actions: {
    loadPictures({ commit }, pictures: Foto[]): void {
      service.listar().then((response) => commit("loadPictures", response.data));
    }
  },
  getters: {
    getPictures(state): Foto[] {
      return state.fotos;
    }
  }
});

export function useStore() {
  return baseUseStore(key);
}
