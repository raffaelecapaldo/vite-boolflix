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
      <Trailers v-if="store.movies.length === 0 && store.tv.length === 0 && store.notsearched" />
      <MostPopulars v-if="store.movies.length === 0 && store.tv.length === 0 && store.notsearched" />
      <Loader v-else-if="store.searchLoading" />
      <SearchResult v-else />

      <!-- ---- -->
    </main>
  </div>
</template>

<script>
import { store } from './data/store';
import Searchbar from './components/Searchbar.vue';
import Navbar from './components/Navbar.vue';
import Card from './components/Card.vue';
import MostPopulars from './components/MostPopulars.vue';
import Splash from './components/Splash.vue';
import Loader from './components/Loader.vue'
import Trailers from './components/Trailers.vue'
import NotFound from './components/NotFound.vue';
import SearchResult from './components/SearchResult.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
      loading: true,
      intro: new Audio('/effects/intro.mp3'), //
      loadTrailers: false,
    }
  },
  components: {
    Searchbar,
    Navbar,
    Card,
    MostPopulars,
    Splash,
    Loader,
    Trailers,
    NotFound,
    SearchResult,
  },
  methods: {
    searchShow() {
      store.searchLoading = true;
      console.log(store.queryStrings.query);
      store.queryStrings.query == '' ? store.notsearched = true : store.notsearched = false
      store.movies.length = 0;//svuoto entrambi gli array
      store.tv.length = 0;
      store.getData(store.endpoints.search, 'movies'),
        store.getData(store.endpoints.search, 'tv')
      function wait() {
        if (store.movies.length > 0 || store.tv.length > 0) {//Controlla se gli array sono vuoti
          store.searchLoading = false;//Se non lo sono ha finito di caricare

        }
      }
      setInterval(wait, 100);
      setTimeout(() => {//Se dopo un secondo e mezzo sono ancora vuoti entrambi, non ha trovato nulla, termina il caricamento
        store.searchLoading = false;
      }, 1500)
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 5000);

    this.intro.loop = false;
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

.loading {
  height: 100dvh;
}
</style>