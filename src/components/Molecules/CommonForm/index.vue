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
          <!--<input-number v-model="getCommonRevenue" :set="setCommonRevenue" /> -->

          <input
            @input="onChangedForAction(actionCommonRevenue, $event)"
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

        <!---------------------------- -->

        <div class="relative w-full mb-3">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlfor="grid-password"
          >
            経費
          </label>
          <!--<input-number v-model="getCommonRevenue" :set="setCommonRevenue" /> -->

          <input
            @input="onChangedForAction(actionCommonExpense, $event)"
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
          <!-- <input-check-box-with-label model="salaryman" label="会社員" /> -->
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
          <input-check-box-with-label model="corporation" label="法人" />

          <input-check-box-with-label
            model="microCorporation"
            label="マイクロ法人"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  ACTION_COMMON_REVENUE,
  ACTION_COMMON_EXPENSE,
} from "@/store/Common/actions";
import {
  GET_COMMON_REVENUE,
  GET_COMMON_EXPENSE,
  GET_ALL_FLAGS,
} from "@/store/Common/getters";

//import InputNumber from "@ca/InputNumber/index.vue";
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
import { mapGetters } from "vuex";
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
  methods: {
    //...mapActions(ACTION_COMMON_REVENUE, ["update"]),
    //actionCommonRevenue() {
    //  //this.update(this.getCommonRevenue);
    //  //this.payload.id = null
    //},
  },
  computed: {
    //getLabel() {},
    //getModelName() {},
    actionCommonRevenue() {
      return ACTION_COMMON_REVENUE;
    },
    actionCommonExpense() {
      return ACTION_COMMON_EXPENSE;
    },
    salarymanFlag: {
      get() {
        return (this as any).$store.getters["salaryman/getFlag"];
      },
      set(value) {
        (this as any).$store.commit("salaryman/setFlag", value);
        //this.value = value;
      },
    },
    ...mapGetters({
      getCommonRevenue: GET_COMMON_REVENUE,
      getCommonExpense: GET_COMMON_EXPENSE,
      getAllFlags: GET_ALL_FLAGS,
    }),
    //getSalaryManFlag() {
    //
    //  return (this as any).$store.getters["salaryman/getFlag"];
    //},
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
