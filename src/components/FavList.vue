<template>
  <div class="container">
    <div v-if="data.length > 0">
      <card 
        v-for="recipe in data" 
        :key="recipe._id" 
        :cocktailName="recipe.name"
        :srcImg="recipe.srcImg.url"
        :instruction="recipe.instruction"
        :ingredients="recipe.ingredients"
        :isFavorite="recipe.isFavorite"
        :_id="recipe._id"
        :data="recipe"
      ></card>
    </div>
      <h3 v-else>Vous n'avez pas encore de favoris</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '@/components/Card/Card.vue';
import LocalStorage from '@/services/localStorage.ts';
import { mapState, mapGetters } from 'vuex';

export default Vue.extend({
  components: {
    Card,
  },
  name: 'FavList',
  props: {
    localFav: Array,
  },
  data(): {} {
    return {
      data: [],
    };
  },
  watch: {},
  computed: {
    ...mapState('cocktail', ['favList']),
  },
  mounted() {
    this.$data.data = LocalStorage.getFromLocalStorage('favList');
  },
  methods: {

  },
});
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
  margin-top: 80px;
}
</style>