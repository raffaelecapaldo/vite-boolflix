import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)



import './assets/styles/general.scss'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
