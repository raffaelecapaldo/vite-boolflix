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
  <main>
    <div class="row cardcontainer">
      <Card v-for="show in store.shows" :title="show.title ? show.title : show.name"
        :originalTitle="show.original_title ? show.original_title : show.original_name"
        :image="show.backdrop_path === null ? store.defaultImage : store.imagesUrl + show.backdrop_path"
        :rate="newRating(show.vote_average)" />
    </div>
  </main>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import Searchbar from './components/Searchbar.vue';
import Navbar from './components/Navbar.vue';
import Card from './components/Card.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    Searchbar,
    Navbar,
    Card

  },
  methods: {
    searchShow() {
      let params = {}
      for (let key in store.queryStrings) {
        if (store.queryStrings[key]) {
          params[key] = store.queryStrings[key]
        }
      }
      axios.get(store.apiUrl + store.endpoints.search + '/' + store.endpoints.movie, { params }).then((res) => {
        store.movies = res.data.results;//Chiamta l'endpoint movie e inserisci il risultato in un suo array

      })
      axios.get(store.apiUrl + store.endpoints.search + '/' + store.endpoints.tv, { params }).then((res) => {
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

.cardcontainer {
  width: 95%;
  margin: 0 auto;
}
</style>