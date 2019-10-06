<template>
  <div class="">
    <cocktail-list></cocktail-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CocktailList from '@/components/CocktailList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    CocktailList,
  },
});
</script>
