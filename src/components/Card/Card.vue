<template>
  <article class="card">
      <header class="card__header">
        <img @click="showMore()" :src="srcImg" class="card__img" />
        <ul ref="card__list" class="card__list" :class="isActive ? 'card__list-is-active' : 'card__list-is-hidden'">
          <li 
            v-for="ingredient in ingredients" 
            :key="ingredient.id" 
            :class="isActive ? 'card__list-is-active' : 'card__list-is-hidden'">{{ ingredient.name }}</li>
        </ul>
      </header>
      <div class="card__body">
        <h2 class="card__title" @click="showMore()">{{cocktailName}}</h2>
        <p ref="card__desc" class="card__desc " :class="isActive ? 'card__desc-is-active' : 'card__desc-is-hidden'">{{instruction}}</p>
        <footer class="card__footer">
          <div  class="icon" :class="isFav ? 'icon-star' : 'icon-star-alt'" @click="addFav()"></div>
        </footer>
        <button @click="showMore()" class="button card__show">{{ isActive ? "X" : "Preparation"}}</button>
      </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import LocalStorage from '@/services/localStorage';
export default Vue.extend({
  components: {

  },
  name: 'Card',
  props: {
    msg: String,
    _id: String,
    cocktailName: String,
    srcImg: String,
    instruction: String,
    ingredients: Array,
    isFavorite: Boolean,
    data: Object,
  },
  data(): {} {
    return {
      isActive: false,
      isFetch: false,
      isFav: this.isFavorite ? true : false,
    };
  },
  watch: {
  },
  computed: {

  },
  methods: {
    showMore(): void {
      this.$data.isActive ? this.$data.isActive = false : this.$data.isActive = true;
    },
    addFav(): void {
      if (this.$data.isFav) {
        this.$data.isFav = false;
        this.$store.dispatch('cocktail/removeFav', { recipe: this.data, isFavorite: true});
      } else {
        this.$data.isFav = true;
        this.$store.dispatch('cocktail/addFav', { recipe: this.data, isFavorite: true});
      }

    },
  },

});
</script>
<style lang="scss" scoped>
</style>