<template>
    <div class="youtube d-flex justify-content-center">
        <!-- A causa delle politiche di chrome, un video in autoplay parte solo se mutato, rimuovo il mute appena l'utente interagisce con la pagina -->
        <YouTube class="player" :src="videoToPlay" :vars="{
            autoplay: 1,
            mute: 1,
        }"  width="1900" height="1200" ref="youtube" />
        <font-awesome-icon @click="toggleVolume()" class="icon"
            :icon="!muted ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark'" />
    </div>
</template>

<script>
import { store } from '../data/store';

export default {
    name: 'Trailers',
    methods: {
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        toggleVolume() {
            this.$refs.youtube.isMuted() ? this.$refs.youtube.unMute() : this.$refs.youtube.mute();
            this.muted = !this.muted

        }
    },
    computed: {
        videoToPlay() {
            return this.videos[this.getRndInteger(0, this.videos.length - 1)];//Prendi un video a caso tra quelli nell'array
        },
    },
    data() {
        return {
            store,
            videos: [
                'https://www.youtube-nocookie.com/embed/3CQ0HsGZzM4',
                'https://www.youtube-nocookie.com/embed/eyOP-gA4tIo',
                'https://www.youtube-nocookie.com/embed/o7nkJDjuSp4',
                'https://www.youtube-nocookie.com/embed/8-UEA3SLKQI',
            ],
            muted: true,
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

.player {
    position: absolute;
    top: -200px;
    height: 1200px;
}

.icon {
    position: absolute;
    top: 20px;
    font-size: 3rem;
    background-color: white;
    border-radius: 50%;
    padding: 10px;
    right: 50px;
    cursor: pointer;
}
</style>