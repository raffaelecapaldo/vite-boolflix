<template>
  <header>
    <Searchbar @on-search="searchShow()" />
  </header>
  <div class="d-flex gap-3" v-for="show in store.shows" >
    <p>titolo:{{ show.title }}</p>
    <p>titolo originale:{{ show.original_title }}</p>
    <p>lingua: <img class="flag" :src="'/img/flags/' + show.original_language + '.svg'" :alt="show.original_language"></p>
    <p>voto:{{ show.vote_average }}</p>

  </div>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import Searchbar from './components/Searchbar.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    Searchbar,
    
  },
  methods: {
    searchShow() {
      let params = {}
      for (let key in store.queryStrings) {
        if (store.queryStrings[key]) {
          params[key] = store.queryStrings[key]
        }
      }
      axios.get(store.apiUrl + store.endpoints.search + '/' + store.endpoints.movie, {params}).then((res) => {
        store.shows = res.data.results;
        console.log(store.shows)
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.flag {
  width: 20px
}
</style>