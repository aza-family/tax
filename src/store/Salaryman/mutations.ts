import { MutationTree } from "vuex";
import { SalarymanState } from "@/store/types";

export const SET_YEARLY_INCOME2 = "setYearlyIncome";
export const SET_YEARLY_INCOME = `salaryman/${SET_YEARLY_INCOME2}`;

export const SET_DEDUCTION2 = "setDeduction";
export const SET_DEDUCTION = `salaryman/${SET_DEDUCTION2}`;

export const SET_EARNED_INCOME2 = "setEarnedIncome";
export const SET_EARNED_INCOME = `salaryman/${SET_EARNED_INCOME2}`;

//export const RESET_DEDUCTION2 = "resetDeduction";
//export const RESET_DEDUCTION = `salaryman/${RESET_DEDUCTION2}`;

//getEarnedIncomeTaxCredit
import { getEarnedIncomeTaxCredit } from "@/utils";
const mutations: MutationTree<SalarymanState> = {
  [SET_YEARLY_INCOME2](state, val) {
    state.yearlyIncome = val;
    state.deduction = getEarnedIncomeTaxCredit(state.yearlyIncome);
    state.earnedIncome = state.yearlyIncome - state.deduction;
  },
  [SET_DEDUCTION2](state, val) {
    state.deduction = val;
    state.earnedIncome = state.yearlyIncome - state.deduction;
  },
  //[RESET_DEDUCTION2](state) {
  //  state.deduction = getEarnedIncomeTaxCredit(state.yearlyIncome) / 10000;
  //  state.earnedIncome = state.yearlyIncome - state.deduction;
  //},
  [SET_EARNED_INCOME2](state, val) {
    state.earnedIncome = val;
  },
  setFlag: (state, val) => {
    console.log("setFlag:", val);
    state.flag = val;
  },
};

export default mutations;
