<template>
  <div>
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      個人事業主
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
          <label-text label="控除" />
          <input-number
            :disableStatus="true"
            v-model="getDeduction"
            :set="setDeduction"
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
import { mapGetters } from "vuex";
import {
  GET_REVENUE,
  GET_EXPENSE,
  GET_DEDUCTION,
  GET_PROFIT,
} from "@/store/IndividualBusiness/getters";

import {
  SET_REVENUE,
  SET_EXPENSE,
  SET_DEDUCTION,
  SET_PROFIT,
} from "@/store/IndividualBusiness/mutations";
//import handleCanvas from "@/mixin/handleCanvas";
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
    setDeduction() {
      return SET_DEDUCTION;
    },
    setProfit() {
      return SET_PROFIT;
    },
    ...mapGetters({
      getRevenue: GET_REVENUE,
      getExpense: GET_EXPENSE,
      getDeduction: GET_DEDUCTION,
      getProfit: GET_PROFIT,
    }),
  },
  methods: {
    //setRevenue(value) {
    //  console.log("setRevenue value2:", value);
    //  (this as any).$store.commit(SET_REVENUE, value);
    //},
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
