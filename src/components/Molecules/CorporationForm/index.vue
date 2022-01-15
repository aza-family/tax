<template>
  <div>
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      法人
    </h6>
    <div class="flex flex-wrap">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-2/12">
          <label-text label="売上" />
          <input-number v-model="getRevenue" :set="setRevenue" />
        </div>

        <div class="w-full lg:w-1/12">
          <minus-text />
        </div>

        <div class="w-full lg:w-2/12">
          <label-text label="経費" />
          <input-number v-model="getExpense" :set="setExpense" />
        </div>
        <div class="w-full lg:w-1/12">
          <minus-text />
        </div>
        <div class="w-full lg:w-2/12">
          <label-text label="役員報酬(自分)" />
          <input-number
            v-model="getDirectorsCompensation"
            :set="setDirectorsCompensation"
          />
        </div>
        <div class="w-full lg:w-1/12">
          <equal-text />
        </div>
        <div class="w-full lg:w-2/12">
          <label-text label="課税所得" />
          <input-number
            :disableStatus="true"
            v-model="getProfit"
            :set="setProfit"
          />
        </div>
      </div>
    </div>
    <hr class="mt-6 border-b-1 border-blueGray-300" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InputNumber from "@ca/InputNumber/index.vue";
import LabelText from "@ca/LabelText/index.vue";
import MinusText from "@ca/MinusText/index.vue";
import EqualText from "@ca/EqualText/index.vue";

import {
  GET_COR_REVENUE,
  GET_COR_EXPENSE,
  GET_COR_DIRECTORS_COMPENSATION,
  GET_COR_PROFIT,
} from "@/store/Corporation/getters";

import {
  SET_REVENUE,
  SET_EXPENSE,
  SET_DIRECTORS_COMPENSATION,
  SET_PROFIT,
} from "@/store/Corporation/mutations";
//import handleCanvas from "@/mixin/handleCanvas";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {
    InputNumber,
    LabelText,
    MinusText,
    EqualText,
  },
  computed: {
    setRevenue() {
      return SET_REVENUE;
    },
    setExpense() {
      return SET_EXPENSE;
    },
    setDirectorsCompensation() {
      return SET_DIRECTORS_COMPENSATION;
    },
    setProfit() {
      return SET_PROFIT;
    },
    ...mapGetters({
      getRevenue: GET_COR_REVENUE,
      getExpense: GET_COR_EXPENSE,
      getDirectorsCompensation: GET_COR_DIRECTORS_COMPENSATION,
      getProfit: GET_COR_PROFIT,
    }),
  },
  props: {
    label: String,
    type: String,
    items: [],
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
