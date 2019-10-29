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
    alreadyFav(state): any {
      state.data[0].forEach((d: any) => {
        state.favList.forEach((el: any) => {
          if (d._id === el._id) {
            d.isFavorite = true;
          }
        });
      });
      return state.data;
    },
  },
  mutations: {
    fetchData(state, payload: {data: any}) {
      state.data.push(payload.data);
    },
  },
  actions: {
    async fetchData(context, payload: { data: any }) {
      context.commit('fetchData', await ApiService.getRecipes());
      context.state.data[0].forEach((d: any) => {
        context.state.favList.forEach((el: any) => {
          if (d._id === el._id) {
            d.isFavorite = true;
          }
        });
      });
    },
  },
};

export default cocktail;
