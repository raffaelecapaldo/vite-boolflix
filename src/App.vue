<template>
  <Splash v-if="loading" />
  <!-- carica in d-none i componenti mentre mostra lo splash -->
  <div v-show='!loading'>
  <header>
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <div class="left d-flex align-items-center">
        <img class="logo" src="/img/logo.png" alt="netflix logo">
        <Navbar />
      </div>
      <div class="right">
        <Searchbar @on-search="searchShow()" />
      </div>
    </div>

  </header>
  <main>
    <MostPopulars v-if="store.shows.length === 0 && notsearched "/>
    <div v-else class="row cardcontainer">
      <Card v-for="(show,index) in store.shows" :title="show.title ? show.title : show.name"
        :originalTitle="show.original_title ? show.original_title : show.original_name"
        :image="show.backdrop_path === null ? store.defaultImage : store.imagesUrl + show.backdrop_path"
        :rate="store.newRating(show.vote_average)" :lang="'/img/flags/' + show.original_language + '.svg'" :overview="show.overview" :alt="show.original_language" :id="index"/>
    </div>
  </main>
</div>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import Searchbar from './components/Searchbar.vue';
import Navbar from './components/Navbar.vue';
import Card from './components/Card.vue';
import MostPopulars from './components/MostPopulars.vue';
import Splash from './components/Splash.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
      loading:true,
      intro: new Audio('/effects/intro.mp3'), //
      notsearched:true,
    }
  },
  components: {
    Searchbar,
    Navbar,
    Card,
    MostPopulars,
    Splash

  },
  methods: {
    searchShow() {
      console.log(store.queryStrings.query);
      store.queryStrings.query == '' ? this.notsearched = true : this.notsearched = false
      store.movies.length = 0;//svuoto entrambi gli array
      store.shows.length = 0;
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
  },
  mounted() {
    setTimeout(() => {
                this.loading = false
            }, 5000);
            this.intro.play()
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