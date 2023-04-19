<template>
    <nav>
        <ul class="d-flex">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>TV Shows</li></a>
        <a href="#"><li>Movies</li></a>
        <a href="#"><li>New & Popular</li></a>
        <a href="#"><li>My list</li></a>
        <a href="#"><li>Browse by Languages</li></a>
         </ul>
      </nav>
</template>

<script>
    export default {
        name:'Navbar',
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
    }
    }

</style>