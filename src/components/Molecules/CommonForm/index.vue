<template>
  <div>
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      共通
    </h6>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-12/12 px-4">
        <div class="relative w-full mb-3">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlfor="grid-password"
          >
            年収(売上)万円
          </label>
          <input
            type="number"
            class="
              border-0
              px-3
              py-3
              placeholder-blueGray-300
              text-blueGray-600
              bg-white
              rounded
              text-sm
              shadow
              focus:outline-none focus:ring
              w-full
              ease-linear
              transition-all
              duration-150
            "
            value="lucky.jesse"
          />
        </div>

        <div class="flex flex-row justify-around">
          <input-check-box-with-label model="salaryman" label="会社員" />
          <!-- <label class="inline-flex items-center mt-3">
            <input
              v-model="salarymanFlag"
              type="checkbox"
              class="form-checkbox h-5 w-5 text-gray-600"
              checked
            /><span class="ml-2 text-gray-700">会社員</span>
          </label>-->

          <input-check-box-with-label
            model="individualBusiness"
            label="個人事業主"
          />
          <!--<label class="inline-flex items-center mt-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-red-600"
              checked
            /><span class="ml-2 text-gray-700">個人事業主</span>
          </label>-->

          <!-- <label class="inline-flex items-center mt-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-orange-600"
              checked
            /><span class="ml-2 text-gray-700">法人</span>
          </label>-->
          <input-check-box-with-label model="corporation" label="法人" />

          <!--<input-check-box-with-label
            model="corporation"
            label="マイクロ法人"
          />-->
          <!-- <label class="inline-flex items-center mt-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-yellow-600"
              checked
            /><span class="ml-2 text-gray-700">マイクロ法人</span>
          </label>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InputNumber from "@ca/InputNumber/index.vue";
import InputCheckBoxWithLabel from "@ca/InputCheckBoxWithLabel/index.vue";
//import {
//  GET_REVENUE,
//  GET_EXPENSE,
//  GET_DEDUCTION,
//  GET_PROFIT,
//} from "@/store/Corporation/getters";
//
//import {
//  SET_REVENUE,
//  SET_EXPENSE,
//  SET_DEDUCTION,
//  SET_PROFIT,
//} from "@/store/Corporation/mutations";
//import { GET_FLAG } from "@/store/Salaryman/getters";
import handle from "@/mixin/handle";
export default Vue.extend({
  components: {
    InputCheckBoxWithLabel,
    //InputNumber,
  },
  //mixins: [handleCanvas],
  mixins: [handle],
  props: {
    label: String,
    type: String,
    items: [],
  },
  //...mapGetters({
  //  getFlag: GET_FLAG,
  //  //getExpense: GET_EXPENSE,
  //  //getDeduction: GET_DEDUCTION,
  //  //getProfit: GET_PROFIT,
  //}),
  methods: {},
  computed: {
    salarymanFlag: {
      get() {
        return (this as any).$store.getters["salaryman/getFlag"];
      },
      set(value) {
        (this as any).$store.commit("salaryman/setFlag", value);
        //this.value = value;
      },
    },
    //getSalaryManFlag() {
    //
    //  return (this as any).$store.getters["salaryman/getFlag"];
    //},
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
