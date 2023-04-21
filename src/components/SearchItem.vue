<template>
        <div class="row">
            <h1 class="text-white mt-2">{{ category }}</h1>
            <NotFound v-if="array.length === 0" :error="'No ' + category + ' founded'" cta="Try searching something else" />
            <Card v-else v-for="(show, index) in array" :item="show" :id="index" />
        </div>
</template>

<script>
import { store } from '../data/store';
import NotFound from './NotFound.vue';
import Card from './Card.vue';
export default {
    name: 'SearchItem',
    components: {
        NotFound,
        Card,
    },
    props: ['category', 'array'],
    data() {
        return {
            store,
        }
    }
        
}
</script>

<style lang="scss" scoped></style>