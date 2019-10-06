<template>
  <div class="row">
      <div class="col-lg-3 col-xs-12">
        <card></card>
      </div>
  </div>
 
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '@/components/Card/Card.vue';

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
  watch: {},
  computed: {},
  methods: {},
});
</script>

<style lang="scss" scoped>

</style>