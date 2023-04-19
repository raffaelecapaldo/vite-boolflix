<template>
    <nav>
        <ul class="d-flex">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>Serie TV</li></a>
        <a href="#"><li>Film</li></a>
        <a href="#"><li>Nuovi e popolari</li></a>
        <a href="#"><li>La mia lista</li></a>
        <a href="#"><li>Sfoglia per lingua</li></a>
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