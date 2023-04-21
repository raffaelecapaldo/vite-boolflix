<template>
    <div @click="current === id ? current = '' : current = id" @mouseleave="current = ''"
        class="col-6 col-sm-4 col-lg-3 col-xxl-2 pt-3">
        <div :class="{ active: id === current }" class="showcard">
            <div :class="{ 'd-none': id === current }" class="infocard">
                <div class="p-2 text-white">
                    <h6 class=" text-center">{{ item.title ? item.title : item.name }}</h6>
                    <p class="small m-0"
                        :class="{ 'd-none': item.title === item.original_title || item.name === item.original_name }">
                        Original title: {{ item.origina_title ? item.original_title : item.original_name }}
                    </p>
                    <p class="m-0 d-flex align-items-center">Language: <img class="ms-1 flag"
                            :src="'/img/flags/language-' + item.original_language + '.svg'"></p>
                    <p class="m-0 small">Rating: <font-awesome-icon v-for='n in 5' :icon="n <= store.newRating(item.vote_average) ? 'fa-solid fa-star' : 'fa-regular fa-star'" /> </p>


                </div>
            </div>
            <div :class="{ 'd-block': id === current }" class="infocardb">
                <div class="no-rotate">
                    <div class="p-2 text-white">
                        <h6 class=" text-center">{{ item.title ? item.title : item.name }}</h6>
                        <p class="small">Storyline: {{ item.overview === '' ? 'There is no storyline available' :
                            (item.overview.substring(0, 150) + '...') }}</p>
                    </div>
                </div>
            </div>
            <img class="img-fluid"
                :src='item.backdrop_path === null ? store.defaultImage : store.imagesUrl + item.backdrop_path'
                :alt="item.title ? item.title : item.name">

        </div>
    </div>
</template>

<script>
import { store } from '../data/store';

export default {
    name: 'Card',
    props: ['id', 'item'],
    data() {
        return {
            current: '',
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
.showcard {
    transition: 0.3s;
    position: relative;
    cursor: pointer;

    .flag {
        width: 20px;
    }

    &:hover {
        transform: scale(1.2);
        transform-origin: center center;
        z-index: 3;
        box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;



        .infocard {
            display: block;
            min-height: 100px;
            height: fit-content;
        }

        .infocardb {
            min-height: 100px;
            height: fit-content;
            z-index: 100;
        }

    }

    img {
        border-radius: 2%;
        transition: 0.3s;


    }
}

.infocard,
.infocardb {
    position: absolute;
    bottom: -90px;
    left: 0px;
    background-color: #181818;
    width: 100%;
    display: none;
    transition: 0.3s;
    height: fit-content;


}

.infocardb {
    display: none;

}

.no-rotate {
    transform: rotateY(180deg) !important;


}

.active {
    transform: rotateY(180deg) scale(1.2) !important;
    transform-origin: center center;
    z-index: 3;
}</style>