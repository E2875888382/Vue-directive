import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {customDirectives} from './directives/index';

Vue.config.productionTip = false;
Vue.use(customDirectives);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
