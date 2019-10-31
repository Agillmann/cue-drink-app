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
    getData(){

    }
  },
  mutations: {
    fetchData(state, payload: {data: any}) {
      state.data.push(payload.data);
    },
    addFav(state, payload: {favList: any}) {
      state.favList.push(payload);
    },
  },
  actions: {
    async fetchData(context, payload: { data: any }) {
      let data: any = [];
      let favList = LocalStorage.getFromLocalStorage('favList');
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
    addFav(context, payload: { favList: any , isFavorite: boolean}) {
      let favList = LocalStorage.getFromLocalStorage('favList');
      payload.favList['isFavorite'] = payload.isFavorite;
      context.state.favList = [];
      favList.push(payload.favList);
      LocalStorage.setToLocalStorage(favList, 'favList');
      context.commit('addFav',favList);
    },
  },
};

export default cocktail;
