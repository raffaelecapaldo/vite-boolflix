<template>
    <nav>
        <ul class="d-flex">
        <a @click="toHome()" href="#"><li>Home</li></a>
        <a href="#"><li>TV Shows</li></a>
        <a href="#"><li>Movies</li></a>
        <a href="#"><li>New & Popular</li></a>
        <a href="#"><li>My list</li></a>
        <a href="#"><li>Browse by Languages</li></a>
         </ul>
      </nav>
</template>

<script>
import { store } from '../data/store';

    export default {
        name:'Navbar',
        data() {
            return {
                store,
            }
        },
        methods: {
            toHome() {
                store.notsearched = true;
                store.queryStrings.query = '';
                store.shows.length = 0;
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul {
    list-style: none;
    gap:10px;
    margin:0;
    
    a {
        text-decoration: none;
        color:white;
        &:hover {
           color: #9c0812;
        }
    }
    }

</style>