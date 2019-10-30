import { Module } from 'vuex';
import ApiService from '@/services/cocktailApi';
import LocalStorage from '@/services/localStorage.ts';

const cocktail: Module<{favList: any, data: any }, any> = {
  namespaced: true,
  state: {
    favList: LocalStorage.getFromLocalStorage('favList'),
    data: [],
  },
  getters: {
  },
  mutations: {
    fetchData(state, payload: {data: any}) {
      state.data.push(payload.data);
    },
    addFav(state, payload: {favList: any}) {
      state.favList.push(payload.favList);
    },
  },
  actions: {
    async fetchData(context, payload: { data: any }) {
      let data: any = [];
      context.state.data = [];
      data = await ApiService.getRecipes();
      console.log(data);
      data.data.forEach((d: any) => {
        context.state.favList.forEach((el: any) => {
          if (d._id === el._id) {
            d.isFavorite = true;
          }
        });
      });
      context.commit('fetchData', data);
    },
    addFav(context, payload: { favList: any }) {
      LocalStorage.setToLocalStorage(payload.favList, 'favList');
      context.commit('fetchData', LocalStorage.getFromLocalStorage('favList'));
    },
    updateFav(context, payload: { isFavorite: boolean }) {
      context.commit('fetchData', payload.isFavorite);
    },
  },
};

export default cocktail;
