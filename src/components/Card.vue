<template>
    <div class="col-6 col-sm-4 col-lg-3 col-xxl-2 pt-3">
        <div class="showcard">
            <div class="infocard">
                <div class="p-2 text-white">
                    <h6 class=" text-center">{{ title }}</h6>
                    <p class="small m-0" :class="{ 'd-none': title === originalTitle }">Original title: {{ originalTitle }}
                    </p>
                    <p class="m-0 small">Rating: <font-awesome-icon v-for='n in rate' :icon="['fas', 'star']" /> </p>

                </div>
            </div>
            <img class="img-fluid" :src='image' alt="">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['originalTitle', 'title', 'image', 'rate']
}
</script>

<style lang="scss" scoped>
.showcard {
    transition: 0.3s;
    position: relative;
    cursor: pointer;


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

    }

    img {
        border-radius: 2%;


    }
}

.infocard {
    position: absolute;
    bottom: -90px;
    left: 0px;
    background-color: #181818;
    width: 100%;
    display: none;
    transition: 0.3s;
    height: fit-content;


}
</style>