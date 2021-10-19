import { GetterTree } from "vuex";
import { SalarymanState, RootState } from "@/store/types";
export const GET_YEARLY_INCOME2 = "getYearlyIncome";
export const GET_YEARLY_INCOME = `salaryman/${GET_YEARLY_INCOME2}`;

export const GET_DEDUCTION2 = "getDeduction";
export const GET_DEDUCTION = `salaryman/${GET_DEDUCTION2}`;

export const GET_EARNED_INCOME2 = "getEarnedIncome";
export const GET_EARNED_INCOME = `salaryman/${GET_EARNED_INCOME2}`;

export const GET_INCOME_TAX2 = "getIncomeTax";
export const GET_INCOME_TAX = `salaryman/${GET_INCOME_TAX2}`;

//住民税
export const GET_RESIDENCE_TAX2 = "getResidenceTax";
export const GET_RESIDENCE_TAX = `salaryman/${GET_RESIDENCE_TAX2}`;

import { getIncomeTax, getResidenceTax } from "@/utils";

const getters: GetterTree<SalarymanState, RootState> = {
  [GET_YEARLY_INCOME2](state) {
    return state.yearlyIncome;
  },
  [GET_DEDUCTION2](state) {
    return state.deduction;
  },
  [GET_EARNED_INCOME2](state) {
    return state.earnedIncome;
  },
  [GET_INCOME_TAX2](state) {
    return getIncomeTax(state.earnedIncome) / 10000;
  },
  [GET_RESIDENCE_TAX2](state) {
    return getResidenceTax(state.earnedIncome);
  },
  getFlag: (state) => {
    return state.flag;
  },
};

export default getters;
