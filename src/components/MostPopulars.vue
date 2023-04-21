<template>
    <div class="most-populars pt-2">
        <h3 class="text-white">Most popular movies </h3>
        <div class="row">
            <Card v-for="(show, index) in store.extramovies" :item="show" :id="index" />
        </div>
    </div>
    <div class="most-populars pt-2">
        <h3 class="text-white">Most popular TV shows </h3>
        <div class="row">
            <Card v-for="(show, index) in store.extratv" :item="show" :id="index" />
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
import Card from '../components/Card.vue';
export default {
    name: 'MostPopulars',
    components: {
        Card,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getPopulars() {
         store.apiError = false;
         store.getData('movies', 'popular');
         store.getData('tv', 'topRated'); //il valore viene letto come undefined
        }
    },
    mounted() {
        this.getPopulars();
    }

}
</script>

<style lang="scss" scoped>
.most-populars {
    width: 95%;
    margin: 0 auto;
}
</style>