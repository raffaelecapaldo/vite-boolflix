<template>
    <div class="search-result">
        <SearchItem v-for="item in category" :category="item.name" :array="item.array" />
    </div>
</template>

<script>
import { store } from '../data/store';
import SearchItem from './SearchItem.vue';
export default {
    name:'SearchResult',
    data() {
        return {
            category: [{
                name: 'Movies',
                array: store.movies,
            },
            {
                name:'Tv Shows',
                array: store.tv

            }]
        }
    },
    components: {
        SearchItem
    }
}
</script>

<style lang="scss" scoped>
.search-result {
    width: 95%;
    margin: 0 auto;
}
</style>