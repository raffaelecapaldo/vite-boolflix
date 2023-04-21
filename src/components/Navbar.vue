<template>
    <nav>
        <ul class="d-flex me-4 me-sm-0">
        <a @click="toHome()" href="#"><li>Home</li></a>
        <a class="d-none d-sm-block" href="#"><li>TV Shows</li></a>
        <a class="d-none d-md-block" href="#"><li>Movies</li></a>
        <a class="d-none d-md-block" href="#"><li>New & Popular</li></a>
        <a class="d-none d-lg-block" href="#"><li>My list</li></a>
        <a class="d-none d-lg-block" href="#"><li>Browse by Languages</li></a>
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
                store.tv.length = 0;
                store.movies.length = 0;
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