<template>
  <div class="container">
    <div class="">
      <card 
        v-for="recipe in data" 
        :key="recipe._id" 
        :cocktailName="recipe.name"
        :srcImg="recipe.srcImg.url"
        :instruction="recipe.instruction"
        :ingredients="recipe.ingredients"
      ></card>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '@/components/Card/Card.vue';
import ApiService from '@/services/cocktailApi';

export default Vue.extend({
  components: {
    Card,
  },
  name: 'CocktailList',
  props: {
    msg: String,
  },
  data(): {} {
    return {
      data: [],
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      const response = await ApiService.getRecipes();
      this.$data.data = response.data;
    },
  },
});
</script>

<style lang="scss" scoped>
</style>