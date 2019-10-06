<template>
  <article class="card">
      <header class="card__thumb">
        <a href="#">
          <img src="@/assets/logo.png">
        </a>
      </header>
      <div class="card__body">
        <h2 class="card__title"><a href="#">Moscow Mule</a></h2>
        <h3 class="card__subtitle">Gin</h3>
        <footer class="card__footer">
          <a href="#" class="card__footer-icon"><img src="@/assets/svg/star.svg" class="icon icon--fav"/></a>
          <a href="#" class="card__footer-icon"><img src="@/assets/svg/star.svg" class="icon icon--fav"/></a>
          <a href="#" class="card__footer-icon"><img src="@/assets/svg/star.svg" class="icon icon--fav"/></a>
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
    width: 2.7em;
  }
  .card {
    margin: 0 0.5em;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 0px 20px rgba(0,0,0, 0.1);
  }
  .card__body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 0; 
  }
  .card__title {
    font-size: 2em;
    font-weight: 700;
    margin: 0;
    flex-grow: 1;
    a {
      color:inherit;
      text-decoration: none;  
    }
  }
  .card__subtitle {
    flex-grow: 1;
    margin: 0
  }
  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 2;
  }

</style>