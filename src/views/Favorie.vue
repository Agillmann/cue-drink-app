<template>
  <div class="">
    <fav-list></fav-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FavList from '@/components/FavList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    FavList,
  },
});
</script>
