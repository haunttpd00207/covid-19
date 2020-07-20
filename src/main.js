import Vue from 'vue'
import App from './App.vue'
import Highcharts from "highcharts";
import Maps from "highcharts/modules/map";
import HighchartsVue from "highcharts-vue";
import apiService from "./api/apiService";
import store from "./stores";
import router from "./router";
Maps(Highcharts);
Vue.use(HighchartsVue);

Vue.config.productionTip = false
apiService.init();
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
