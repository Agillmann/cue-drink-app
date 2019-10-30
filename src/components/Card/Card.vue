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
          <div  class="icon" :class="isFavorite ? 'icon-star' : 'icon-star-alt'" @click="addFav()"></div>
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
  },
  data(): {} {
    return {
      isActive: false,
      isFetch: false,
      data: [],
    };
  },
  watch: {
    isFavorite(){
      console.log('change')
      return this.isFavorite
    }
  },
  computed: {

  },

  methods: {
    showMore(): void {
      this.$data.isActive ? this.$data.isActive = false : this.$data.isActive = true;
    },
    addFav(): void {
      this.$data.isFavorite = true;
      const data = LocalStorage.getFromLocalStorage('favList');
      const props = this.$props;
      console.log('props1',props)
      let alreadyFav = false;
      data.forEach((d: any) => {
        if (d._id === props._id) {
          alreadyFav = true;
        }
      });
      if (!alreadyFav) {
        props.isFavorite = true
        data.push(props);
        console.log(data);
        this.$store.dispatch('cocktail/addFav', { favList: data });
      }

    },
  },

});
</script>
<style lang="scss" scoped>
</style>