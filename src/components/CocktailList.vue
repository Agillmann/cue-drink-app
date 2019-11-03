<template>
  <div class="container">
    <div v-if="data.length > 0">
      <card 
        v-for="recipe in data[0]" 
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
    <div v-else class="content_loading">
      <div class="loading"></div>
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
.content_loading{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>