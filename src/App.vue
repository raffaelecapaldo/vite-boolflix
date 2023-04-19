<template>
  <header>
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <div class="left d-flex align-items-center ">
      <img class="logo" src="/img/logo.png" alt="">
      <Navbar />
  </div>
  <div class="right">
    <Searchbar @on-search="searchShow()" />
  </div>
    </div>
  </header>
  <div class="d-flex gap-3" v-for="show in store.shows" >
    <div class="poster">
      <img :src="store.imagesUrl + show.poster_path" alt="">
    </div>
    <p>titolo:{{ show.title ? show.title : show.name }}</p>
    <p>titolo originale:{{ show.original_title ? show.original_title : show.original_name }}</p>
 
    <p>lingua: <img class="flag" :src="'/img/flags/' + show.original_language + '.svg'" :alt="show.original_language"></p>
    <p>voto:  <font-awesome-icon v-for='n in newRating(show.vote_average)' :icon="['fas', 'star']" /> </p>

  </div>

</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import Searchbar from './components/Searchbar.vue';
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    Searchbar,
    Navbar
    
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
      
    },
    newRating(rate) {
      rate = parseInt(rate) / 2;
      rate = Math.ceil(rate);
      return rate;
    }
  }

}
</script>

<style lang="scss" scoped>
.flag {
  width: 20px
}
.logo {
  width: 10rem;
}

header {
  background-color: black;
}
</style>