<template>
  <div>
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      マイクロ法人
    </h6>
    <div class="flex flex-wrap">
      <div class="flex flex-wrap">
        <input-wrapper
          :disableStatus="true"
          widthPerClass="w_per__input_custom"
          label="売上(法人分)"
          :set="setRevenue"
          :get="getRevenue"
        />

        <div class="">
          <minus-text />
        </div>

        <input-wrapper
          :disableStatus="true"
          widthPerClass="w_per__input_custom"
          label="経費"
          :set="setExpense"
          :get="getExpense"
        />

        <div>
          <minus-text />
        </div>
        <input-wrapper
          :disableStatus="true"
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
          :get="getHoeknForSelf"
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
        <input-wrapper
          widthPerClass="w_per__input_custom"
          label="売上(個人分)"
          :set="setRevenueSelf"
          :get="getRevenueSelf"
        />
        <div>
          <plus-text />
        </div>
        <input-wrapper
          :disableStatus="true"
          widthPerClass="w_per__input_custom"
          label="役員報酬"
          :set="setDirectorsCompensation"
          :get="getDirectorsCompensation"
        />
        <div>
          <minus-text />
        </div>

        <input-wrapper
          label="経費"
          widthPerClass="w_per__input_custom"
          :set="setExpenseSelf"
          :get="getExpenseSelf"
        />

        <div>
          <minus-text />
        </div>

        <input-wrapper
          label="控除"
          :disableStatus="true"
          widthPerClass="w_per__input_custom"
          :set="setDeductionSelf"
          :get="getDeductionSelf"
        />

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
          label="課税所得"
          :disableStatus="true"
          widthPerClass="w_per__input_custom"
          :set="setProfitSelf"
          :get="getProfitSelf"
        />
      </div>
    </div>
    <hr class="mt-6 border-b-1 border-blueGray-300" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//import InputNumber from "@ca/InputNumber/index.vue";
//import LabelText from "@ca/LabelText/index.vue";
import MinusText from "@ca/MinusText/index.vue";
import PlusText from "@ca/PlusText/index.vue";
import EqualText from "@ca/EqualText/index.vue";
import InputWrapper from "@cm/InputWrapper/index.vue";

import {
  GET_MIC_HOKEN_FOR_SELF,
  GET_MIC_REVENUE,
  GET_MIC_REAL_REVENUE,
  GET_MIC_REVENUE_SELF,
  GET_MIC_EXPENSE,
  GET_MIC_EXPENSE_SELF,
  GET_MIC_DIRECTORS_COMPENSATION,
  GET_MIC_PROFIT,
  GET_MIC_PROFIT_SELF,
  GET_MIC_DEDUCTION_SELF,
} from "@/store/MicroCorporation/getters";

import {
  SET_REVENUE,
  SET_REVENUE_SELF,
  SET_EXPENSE,
  SET_EXPENSE_SELF,
  SET_DIRECTORS_COMPENSATION,
  SET_PROFIT,
  SET_PROFIT_SELF,
  SET_DEDUCTION_SELF,
} from "@/store/MicroCorporation/mutations";
//import handleCanvas from "@/mixin/handleCanvas";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {
    //InputNumber,
    //LabelText,
    PlusText,
    MinusText,
    EqualText,
    InputWrapper,
  },
  computed: {
    setRevenue() {
      return SET_REVENUE;
    },
    setRevenueSelf() {
      return SET_REVENUE_SELF;
    },
    setExpense() {
      return SET_EXPENSE;
    },
    setExpenseSelf() {
      return SET_EXPENSE_SELF;
    },
    setDirectorsCompensation() {
      return SET_DIRECTORS_COMPENSATION;
    },
    setProfit() {
      return SET_PROFIT;
    },
    setProfitSelf() {
      return SET_PROFIT_SELF;
    },
    setDeductionSelf() {
      return SET_DEDUCTION_SELF;
    },

    ...mapGetters({
      getHoeknForSelf: GET_MIC_HOKEN_FOR_SELF,
      getRevenue: GET_MIC_REVENUE,
      getRealRevenue: GET_MIC_REAL_REVENUE,
      getRevenueSelf: GET_MIC_REVENUE_SELF,
      getExpense: GET_MIC_EXPENSE,
      getExpenseSelf: GET_MIC_EXPENSE_SELF,
      getDirectorsCompensation: GET_MIC_DIRECTORS_COMPENSATION,
      getProfit: GET_MIC_PROFIT,
      getProfitSelf: GET_MIC_PROFIT_SELF,
      //setDeductionSelf: SET_DEDUCTION_SELF,
      getDeductionSelf: GET_MIC_DEDUCTION_SELF,
    }),
  },
  props: {
    //label: String,
    //type: String,
    //items: [],
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
