import Vue from 'vue'
import App from './App.vue'
import Highcharts from "highcharts";
import Maps from "highcharts/modules/map";
import HighchartsVue from "highcharts-vue";

Maps(Highcharts);
Vue.use(HighchartsVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
