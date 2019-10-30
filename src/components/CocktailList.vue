<template>
  <div class="container">
    <div class="">
      <card 
        v-for="recipe in data[0]" 
        :key="recipe._id" 
        :cocktailName="recipe.name"
        :srcImg="recipe.srcImg.url"
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
import ApiService from '@/services/cocktailApi';
import { mapState, mapGetters } from 'vuex';

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
    };
  },
  watch: {

  },
  computed: {
     ...mapState('cocktail', ['data']),
  },
  mounted() {
    this.$store.dispatch('cocktail/fetchData');
  },
  methods: {
  },
});
</script>

<style lang="scss" scoped>
</style>