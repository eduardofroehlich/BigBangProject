import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createI18n } from 'vue-i18n'
import { pt_BR } from './translations/pt_BR';
import { VsxIcon } from "vue-iconsax";

const i18n = createI18n({
    legacy: false,
    locale: 'pt_BR',
    messages: { pt_BR },
    fallbackWarn: false,
    missingWarn: false,
})

const app = createApp(App)
app.use(i18n)
app.component("VsxIcon", VsxIcon);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
