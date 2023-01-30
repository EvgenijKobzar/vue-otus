import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
library.add(faHatWizard)

import Application from "./application/application.js";
new Application('cinema-app');
// createApp(App).mount('#app')


