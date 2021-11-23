import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'


Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');

