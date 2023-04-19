<template>
    <div class="input-group mb-3">
  <input v-model="store.queryStrings.query" type="text" class="form-control" placeholder="Movie title" aria-describedby="button-addon2">
  <button @click="$emit('onSearch')" class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
</div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name:'Searchbar',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>