<template>
  <article class="card">
    <div class="row">  
      <header class="card__thumb">
        <a href="#">
          <img src="@/assets/logo.png">
        </a>
      </header>
      <div class="card__body">
        <h2 class="card__title"><a href="#">Bender Should Not Be Allowed on TV</a></h2>
        <h3 class="card__subtitle">Type d'alcool</h3>
        <div class="card__description">
          <ul>
            <li>ingredient-1</li>
            <li>ingredient-2</li>
            <li>ingredient-3</li>
          </ul>
          <p>
            Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.
          </p>
        </div>
      </div>
      <footer class="card__footer">
        <a href="#" ><img src="@/assets/svg/star.svg" class="icon icon--fav"/></a>
        <a href="#" ><img src="@/assets/svg/star.svg" class="icon icon--fav"/></a>
      </footer>
    </div>
    
  </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  name: 'Card',
  props: {
    msg: String,
  },
  data(): {} {
    return {

    };
  },
  watch: {},
  computed: {},
  methods: {},
});
</script>

<style lang="scss" scoped>
  .icon {
    width: 2em;
  }
</style>