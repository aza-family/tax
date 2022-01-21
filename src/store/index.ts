import Vue from "vue";
import Vuex from "vuex";

import { common } from "@/store/Common";
import { individualBusiness } from "@/store/IndividualBusiness";
import { salaryman } from "@/store/Salaryman";
import { corporation } from "@/store/Corporation";
import { microCorporation } from "@/store/MicroCorporation";
//import { image } from "@/store/Image";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: "1.0.0",
  },
  modules: {
    common,
    individualBusiness,
    salaryman,
    corporation,
    microCorporation,
  },
});
