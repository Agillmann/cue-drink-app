<template>
  <article class="card">
      <header class="card__header">
        <img @click="showMore()" :src="srcImg" class="card__img" />
        <o ref="card__list" class="card__list" :class="isActive ? 'card__list-is-active' : 'card__list-is-hidden'">
          <li 
            v-for="ingredient in ingredients" 
            :key="ingredient.id" 
            :class="isActive ? 'card__list-is-active' : 'card__list-is-hidden'">{{ ingredient.name }}</li>
        </o>
      </header>
      <div class="card__body">
        <h2 class="card__title" @click="showMore()">{{cocktailName}}</h2>
        <!-- <h3 class="card__subtitle">Gin</h3> -->
        <p ref="card__desc" class="card__desc " :class="isActive ? 'card__desc-is-active' : 'card__desc-is-hidden'">{{instruction}}</p>
        <footer class="card__footer">
        </footer>
        <button @click="showMore()" class="button card__show">{{ isActive ? "X" : "Preparation"}}</button>
      </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {

  },
  name: 'Card',
  props: {
    msg: String,
    cocktailName: String,
    srcImg: String,
    instruction: String,
    ingredients: Array,
  },
  data(): {} {
    return {
      isActive: false,
      isFetch: false,
      data: [],
    };
  },
  watch: {},
  computed: {

  },

  methods: {
    showMore(): void {
      this.$data.isActive ? this.$data.isActive = false : this.$data.isActive = true;
    },

  },

});
</script>

<style lang="scss" scoped>
  .card__img {
    @media screen and (max-width: 768px) {
       max-width: 150px;
    }
  }
  .icon {
    font-size: 2.5em;
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
    padding: 15px 10px 10px 10px; 
    transition: height 2s linear;
  }
  .card__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .card__title {
    font-size: 2.5em;
    font-weight: 700;
    margin: 0;
    color: #1A1A1A;
    flex-grow: 0;
    a {
      color:inherit;
      text-decoration: none;  
    }
    @media screen and (max-width: 768px) {
      font-size: 1.3em;
    }
  }
  .card__subtitle {
    flex-grow: 0;
    color: #1A1A1A;
    margin: 0
  }
  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-grow: 2;
  }
  .card__footer-icon{
    background-color: white;
    border: none;
  }

  .card__list {
    margin: 0;
    padding: 0px 10px; 
    @media screen and (max-width: 768px) {
      font-size: 0.7em;
      padding: 0px;
    }
  }
  .card__desc{
    padding: 0px 10px;
    @media screen and (max-width: 768px) {
      font-size: 0.9em;
      padding: 0px;
    }
  }
  .card__desc,
  .card__list {
    overflow: hidden;
    transition: opacity 0.7s ease, height 1.5s ease-in-out;
  }
  .card__list-is-active {
    padding: 10px 10px
  }
  .card__desc-is-active,
  .card__list-is-active {
    opacity: 1;
    margin-bottom: 10px;
    height: auto;
  }
  .card__desc-is-hidden,
  .card__list-is-hidden {
    opacity: 0;
    height: 0;
  }

  .card__show {
    cursor: pointer;
    margin-top: 15px;
  }
   .card__show-is-active {
    opacity: 1;
    height: 40px;
    transition: opacity 0.3s ease, height 0.5s ease-in;
  }
   .card__show-is-hidden {
    opacity: 0;
    margin-top: 0px;
    height: 0px;
    transition: opacity 0.3s ease, height 0.5s ease-out;
  }

</style>