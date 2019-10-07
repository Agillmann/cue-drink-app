<template>
  <article class="card">
      <header class="card__header" @click="showMore()">
        <img src="@/assets/logo.png" class="card__img"/>
        <ul ref="card__list" :class="isActive ? 'card__list-is-active' : 'card__list-is-hidden'">
          <li>ingredient 1</li>
          <li>ingredient 2</li>
          <li>ingredient 3</li>
          <li>ingredient 4</li>
          <li>ingredient 5</li>
        </ul>
      </header>
      <div class="card__body">
        <h2 class="card__title" @click="showMore()"><a href="#">Moscow Mule</a></h2>
        <h3 class="card__subtitle">Gin</h3>
        <p ref="card__desc" class="card__desc " :class="isActive ? 'card__desc-is-active' : 'card__desc-is-hidden'" @click="showMore()">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptas veritatis iure deserunt reiciendis</p>
        <footer class="card__footer">
          <button href="#" class="card__footer-icon"><font-awesome-icon icon="thumbs-up" class="icon icon__tu"/></button>
          <button href="#" class="card__footer-icon"><font-awesome-icon icon="thumbs-down" class="icon icon__td"/></button>
          <button href="#" class="card__footer-icon"><font-awesome-icon icon="star" class="icon icon__star"/></button>
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
      isActive: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    showMore(): void {
      this.$data.isActive ? this.$data.isActive = false : this.$data.isActive = true;
    },
  },
});
</script>

<style lang="scss" scoped>
  .icon {
    font-size: 2.8em;
    color: rgba(244, 177, 19, 1);
  }
  .icon__tu{
    color: rgba(0, 174, 239, 1);
  }
  .icon__td{
    color: rgba(206, 47, 47, 1);
  }
  .card {
    cursor: pointer;
    margin: 1em 0.5em;
    max-width: 550px;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 0px 20px rgba(0,0,0, 0.1);
    transition: box-shadow 300ms ease;
    
    &:hover {
      box-shadow: 0px 0px 20px rgba(0,0,0, 0.3);
    }
    &:active {
      box-shadow: 0px 0px 10px rgba(0,0,0, 0.1);
    }
  }
  .card__body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 10px; 
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
  .card__desc-is-hidden,
  .card__list-is-hidden {
    opacity: 0;
    height: 20px;
    
  }

  .card__desc-is-active,
  .card__list-is-active {
    overflow: hidden;
    opacity: 1;
    height: 100%;
  }
  .card__desc,
  .card__list {
    overflow-y: hidden;
    transition: opacity 0.7s ease, height 1.5s ease-out;
  }

</style>