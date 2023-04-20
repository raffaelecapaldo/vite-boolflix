<template>
    <div class="youtube">
        <!-- A causa delle politiche di chrome, un video in autoplay parte solo se mutato, rimuovo il mute appena l'utente interagisce con la pagina -->
        <iframe width="1900" height="1200" :src="videoToPlay"
            frameborder="0"></iframe>
    </div>
</template>

<script>
import { store } from '../data/store';

export default {
    name: 'Trailers',
    methods: {
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    computed: {
        videoToPlay() {
            return this.videos[this.getRndInteger(0, this.videos.length)];//Prendi un video a caso tra quelli nell'array
        }
    },
    data() {
        return {
            store,
            videos: [
                'https://www.youtube-nocookie.com/embed/3CQ0HsGZzM4?controls=0&autoplay=1&mute=1&',
                'https://www.youtube-nocookie.com/embed/eyOP-gA4tIo?controls=0&autoplay=1&mute=1&',
                'https://www.youtube-nocookie.com/embed/o7nkJDjuSp4?controls=0&autoplay=1&mute=1&',
                'https://www.youtube-nocookie.com/embed/8-UEA3SLKQI?controls=0&autoplay=1&mute=1&',
            ]
        }
    }


}
</script>

<style lang="scss" scoped>
.youtube {
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;

}

iframe {
    position: absolute;
    top: -200px;
    height: 1200px;
}
</style>