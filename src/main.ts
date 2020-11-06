import { createApp } from 'vue';
import App from './App.vue';
import KProgress from './components';

const app = createApp(App);
app
  .component('k-progress', KProgress)
  .mount('#app');
