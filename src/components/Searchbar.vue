<template>
    <div class="input-group align-items-center">
  <input @keyup.enter="$emit('onSearch')" v-model="store.queryStrings.query" type="text" class="form-control" placeholder="Movie title">
  <button @click="$emit('onSearch')" class="btn-netflix" type="button" id="button-addon2">Search</button>
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
input {
    border-right:none !important;
}
.btn-netflix  {
    background-color: #9c0812;
    padding-left:10px;
    border:none;
    color:white;
    border-radius:8%;
    padding:8px;
    
}

</style>