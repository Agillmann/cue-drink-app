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
      state.favList.push(payload);
    },
    removeFav(state, payload: {favList: any}) {
      state.favList.push(payload);
    },
  },
  actions: {
    async fetchData(context, payload: { data: any }) {
      let data: any = [];
      const favList = LocalStorage.getFromLocalStorage('favList');
      context.state.data = [];
      data = await ApiService.getRecipes();
      data.data.forEach((d: any) => {
        if (favList) {
          favList.forEach((el: any) => {
            if (d._id === el._id) {
              d.isFavorite = true;
            }
          });
        }
      });
      context.commit('fetchData', data);
    },
    addFav(context, payload: { recipe: any , isFavorite: boolean}) {
      const favList = LocalStorage.getFromLocalStorage('favList');
      payload.recipe.isFavorite = payload.isFavorite;
      context.state.favList = [];
      favList.push(payload.recipe);
      LocalStorage.setToLocalStorage(favList, 'favList');
      context.commit('addFav', favList);
    },
    removeFav(context, payload: { recipe: any }) {
      const favList = LocalStorage.getFromLocalStorage('favList');
      context.state.favList = [];
      favList.forEach((fav: any, index: number) => {
        if (fav._id === payload.recipe._id) {
          delete favList[index];
        }
      });
      const newFav = favList.filter((fav: any) => fav);
      LocalStorage.setToLocalStorage(newFav, 'favList');
      context.commit('removeFav', newFav);
    },
  },
};

export default cocktail;
