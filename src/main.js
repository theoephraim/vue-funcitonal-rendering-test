import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Axios from 'axios';
import './style.css';
import App from './App.vue';
import { initPiniaApiToolkitPlugin } from './pinia-api-tools';


const todoApi = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: 'https://dummyjson.com',
});

const pinia = createPinia();
const piniaApiToolkitPlugin = initPiniaApiToolkitPlugin({
  api: todoApi,
});
pinia.use(piniaApiToolkitPlugin);

const app = createApp(App);
app.use(pinia);
app.mount('#app');
