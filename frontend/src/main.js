import { createApp } from 'vue'
import App from './app/App.vue'
import './shared/styles/index.scss'
import { router } from './pages'

createApp(App).use(router).mount('#app')
