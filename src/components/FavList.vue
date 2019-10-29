<template>
  <div class="container">
    <div class="">
      <card 
        v-for="recipe in data" 
        :key="recipe._id" 
        :cocktailName="recipe.cocktailName"
        :srcImg="recipe.srcImg"
        :instruction="recipe.instruction"
        :ingredients="recipe.ingredients"
        :isFavorite="recipe.isFavorite"
        :_id="recipe._id"
      ></card>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '@/components/Card/Card.vue';
import LocalStorage from '@/services/localStorage.ts';

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
  computed: {},
  mounted() {
    this.$data.data = LocalStorage.getFromLocalStorage('favList');
    // console.log(this.$data.data);
  },
  methods: {

  },
});
</script>

<style lang="scss" scoped>
</style>