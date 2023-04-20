import { createApp } from 'vue'
import App from './App.vue'
import YouTube from 'vue3-youtube'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faVolumeXmark, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faVolumeXmark, faVolumeHigh)



import './assets/styles/general.scss'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).component('YouTube', YouTube).mount('#app')
