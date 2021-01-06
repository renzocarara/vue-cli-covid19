import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// includo lo stile di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// registro axios e lo rendo richiamabile globalmente attraverso l'uso dell'alias $http
import axios from "axios";
Vue.prototype.$http = axios;

// registro bootstrap-vue
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
