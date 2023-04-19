<template>
  <header>
    <Searchbar @on-search="searchShow()" />
  </header>
  <div class="d-flex gap-3" v-for="show in store.shows" >
    <p>titolo:{{ show.title ? show.title : show.name }}</p>
    <p>titolo originale:{{ show.original_title ? show.original_title : show.original_name }}</p>
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
        store.movies = res.data.results;//Chiamta l'endpoint movie e inserisci il risultato in un suo array

      })
      axios.get(store.apiUrl + store.endpoints.search + '/' + store.endpoints.tv, {params}).then((res) => {
        store.shows = store.movies.concat(res.data.results)//Chiama endpoint tv e concatena l'array movie con il nuovo array ricevuto, in un nuovo array: shows

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