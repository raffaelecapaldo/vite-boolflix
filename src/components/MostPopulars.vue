<template>
    <div class="most-populars pt-2">
        <h3 class="text-white">Most popular movies </h3>
        <div class="row">
            <Card v-for="(show,index) in popularsMovies" :title="show.title" :originalTitle="show.original_title"
                :image="show.backdrop_path === null ? store.defaultImage : store.imagesUrl + show.backdrop_path" :rate="store.newRating(show.vote_average)"  :overview="show.overview" :lang="'/img/flags/' + show.original_language + '.svg'" :alt="show.original_language" :id="index" />
        </div>
    </div>
    <div class="most-populars pt-2">
        <h3 class="text-white">Most popular TV shows </h3>
        <div class="row">
            <Card v-for="(show,index) in popularsTV" :title="show.name" :originalTitle="show.original_name"
                :image="show.backdrop_path === null ? store.defaultImage : store.imagesUrl + show.backdrop_path" :rate="store.newRating(show.vote_average)" :overview="show.overview" :lang="'/img/flags/' + show.original_language + '.svg'" :alt="show.original_language" :id="index"/>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
import Card from '../components/Card.vue';
export default {
    name: 'MostPopulars',
    components: {
        Card,
    },
    data() {
        return {
            store,
            popularsTV: [],
            popularsMovies: [],
        }
    },
    methods: {
        getPopulars() {
            let params = {}
            store.queryStrings.query = '';
            for (let key in store.queryStrings) {
                if (store.queryStrings[key]) {
                    params[key] = store.queryStrings[key]
                }
            }
            axios.get(store.apiUrl + store.endpoints.movie + '/' + store.endpoints.popular, { params }).then((res) => {
                this.popularsMovies = res.data.results;//

            })
            axios.get(store.apiUrl + store.endpoints.tv + '/' + store.endpoints.topRated, { params }).then((res) => {
                this.popularsTV = res.data.results;// con tutto il rispetto per gli arabi, preferisco top-rated

            })
        }
    },
    mounted() {
        this.getPopulars();
        console.log(store.shows);
    }

}
</script>

<style lang="scss" scoped>
.most-populars {
    width: 95%;
    margin: 0 auto;
}
</style>