<template>
    <div class="not-found d-flex justify-content-center align-items-center">
        <div class="title mt-5">
        <h1 class="text-white fs-1 text-center">{{ error }}</h1>
        <div>
        <p class="fs-1 text-center">{{ cta }}</p>
        <p class="fs-1 text-center">:(</p>
    </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:'NotFound',
        props: ['error', 'cta']
    }
</script>

<style lang="scss" scoped>
h1 {
    font-size:10rem;
}

.title {
    p {
        color:red;
        font-size:5rem;
        font-weight: bold;
    }
}
</style>