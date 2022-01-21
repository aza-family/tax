<template>
  <div>
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      法人
    </h6>
    <div class="flex flex-wrap">
      <div class="flex flex-wrap">
        <input-wrapper
          widthPerClass="w_per__input_custom"
          label="売上(法人分)"
          :set="setRevenue"
          :get="getRevenue"
        />

        <div class="">
          <minus-text />
        </div>

        <input-wrapper
          widthPerClass="w_per__input_custom"
          label="経費"
          :set="setExpense"
          :get="getExpense"
        />

        <div>
          <minus-text />
        </div>
        <input-wrapper
          widthPerClass="w_per__input_custom"
          label="役員報酬(自分)"
          :set="setDirectorsCompensation"
          :get="getDirectorsCompensation"
        />
        <div>
          <minus-text />
        </div>
        <input-wrapper
          :disableStatus="true"
          widthPerClass="w_per__input_custom"
          label="会社負担保険料"
          :get="getHoeknAndPesnion"
        />
        <div>
          <equal-text />
        </div>
        <input-wrapper
          :disableStatus="true"
          widthPerClass="w_per__input_custom"
          label="課税所得"
          :set="setProfit"
          :get="getProfit"
        />
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="flex flex-wrap">
        <!-- <input-wrapper
          :disableStatus="true"
          widthPerClass="w_per__input_custom"
          label="売上(個人分)"
          :set="setRevenueSelf"
          :get="getRevenueSelf"
        />
        <div>
          <plus-text />
        </div> -->
        <input-wrapper
          :disableStatus="true"
          label="給与(役員報酬)"
          :set="setDirectorsCompensation"
          :get="getDirectorsCompensation"
        />
        <div>
          <minus-text />
        </div>

        <input-wrapper
          label="給与所得控除"
          :disableStatus="true"
          :get="getSalaryIncomeDeduction"
        />
        <div>
          <minus-text />
        </div>
        <input-wrapper label="控除" :disableStatus="true" :get="getDeduction" />
        <!--
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
        </div> -->

        <div>
          <equal-text />
        </div>
        <input-wrapper
          label="給与所得"
          :disableStatus="true"
          :get="getProfitSelf"
        />
      </div>
    </div>
    <!-- <div class="flex flex-wrap">
      <div class="flex flex-wrap">
        <input-wrapper label="売上" :set="setRevenue" :get="getRevenue" />

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
    </div> -->
    <hr class="mt-6 border-b-1 border-blueGray-300" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//import InputNumber from "@ca/InputNumber/index.vue";
//import LabelText from "@ca/LabelText/index.vue";
import MinusText from "@ca/MinusText/index.vue";
import EqualText from "@ca/EqualText/index.vue";
import InputWrapper from "@cm/InputWrapper/index.vue";

import {
  GET_COR_REVENUE,
  GET_COR_EXPENSE,
  GET_COR_DIRECTORS_COMPENSATION,
  GET_COR_PROFIT,
  GET_COR_PROFIT_SELF,
  GET_COR_HOKEN,
  GET_COR_PENSION,
  GET_COR_DEDUCTION,
  GET_COR_SALARY_INCOME_DEDUCTION,
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
    //InputNumber,
    //LabelText,
    MinusText,
    EqualText,
    InputWrapper,
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
    getHoeknAndPesnion() {
      return this.getHoekn + this.getPension;
    },
    ...mapGetters({
      getRevenue: GET_COR_REVENUE,
      getExpense: GET_COR_EXPENSE,
      getDirectorsCompensation: GET_COR_DIRECTORS_COMPENSATION,
      getProfit: GET_COR_PROFIT,
      getProfitSelf: GET_COR_PROFIT_SELF,
      getHoekn: GET_COR_HOKEN,
      getPension: GET_COR_PENSION,
      getDeduction: GET_COR_DEDUCTION,
      getSalaryIncomeDeduction: GET_COR_SALARY_INCOME_DEDUCTION,
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
