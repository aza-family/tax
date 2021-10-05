import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
//import router from "./router";
import store from "./store";

//---------------------------------
// eslint-disable-next-line @typescript-eslint/no-var-requires
Vue.use(require("vue-script2"));
//import Ads from "vue-google-adsense";
//Vue.use(Ads.Adsense);

//import "@/assets/tailwind.css"; //追加
//import "./index.css";

Vue.config.productionTip = false;

new Vue({
  //router,
  store,
  render: (h) => h(App),
}).$mount("#app");
