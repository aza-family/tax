<template>
  <div>
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      会社員
    </h6>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-3/12 px-4">
        <div class="relative w-full mb-3">
          <label-text label="給与収入" />
          <input-number v-model="getYearlyIncome" :set="setYearlyIncome" />
        </div>
      </div>
      <div class="w-full lg:w-1/12">
        <minus-text />
      </div>
      <div class="w-full lg:w-3/12 px-4">
        <div class="relative w-full mb-3">
          <label-text label="控除" />
          <input-number
            :disableStatus="true"
            v-model="getDeduction"
            :set="setDeduction"
          />
        </div>
      </div>
      <div class="w-full lg:w-1/12">
        <equal-text />
      </div>
      <div class="w-full lg:w-3/12 px-4">
        <div class="relative w-full mb-3">
          <label-text label="給与所得" />
          <input-number
            :disableStatus="true"
            v-model="getEarnedIncome"
            :set="setEarnedIncome"
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
  SET_YEARLY_INCOME,
  SET_DEDUCTION,
  SET_EARNED_INCOME,
} from "@/store/Salaryman/mutations";
import {
  GET_SAL_YEARLY_INCOME,
  GET_SAL_DEDUCTION,
  GET_SAL_EARNED_INCOME,
} from "@/store/Salaryman/getters";
export default Vue.extend({
  //mixins: [handleCanvas],
  components: {
    InputNumber,
    LabelText,
    MinusText,
    EqualText,
  },
  computed: {
    ...mapGetters({
      getYearlyIncome: GET_SAL_YEARLY_INCOME,
      getDeduction: GET_SAL_DEDUCTION,
      getEarnedIncome: GET_SAL_EARNED_INCOME,
    }),
    setYearlyIncome() {
      return SET_YEARLY_INCOME;
    },
    setDeduction() {
      return SET_DEDUCTION;
    },
    setEarnedIncome() {
      return SET_EARNED_INCOME;
    },
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
