import { GetterTree } from "vuex";
import { SalarymanState, RootState } from "@/store/types";
export const GET_YEARLY_INCOME1 = "getYearlyIncome";
export const GET_YEARLY_INCOME = `salaryman/${GET_YEARLY_INCOME1}`;

export const GET_DEDUCTION1 = "getDeduction";
export const GET_DEDUCTION = `salaryman/${GET_DEDUCTION1}`;

export const GET_EARNED_INCOME1 = "getEarnedIncome";
export const GET_EARNED_INCOME = `salaryman/${GET_EARNED_INCOME1}`;

export const GET_INCOME_TAX1 = "getIncomeTax";
export const GET_INCOME_TAX = `salaryman/${GET_INCOME_TAX1}`;

//住民税
export const GET_RESIDENCE_TAX1 = "getResidenceTax";
export const GET_RESIDENCE_TAX = `salaryman/${GET_RESIDENCE_TAX1}`;

//社会保険料
export const GET_SOCIAL_INSURANCE_PREMIUM1 =
  "getSocialInsurancePremiumForSalaryMan";
export const GET_SOCIAL_INSURANCE_PREMIUM = `salaryman/${GET_SOCIAL_INSURANCE_PREMIUM1}`;

export const GET_SUM_TAX1 = "getSumTax";
export const GET_SUM_TAX = `salaryman/${GET_SUM_TAX1}`;

import {
  getIncomeTax,
  getResidenceTax,
  getSocialInsurancePremiumForSalaryMan,
} from "@/utils";

const getters: GetterTree<SalarymanState, RootState> = {
  [GET_YEARLY_INCOME1](state) {
    return state.yearlyIncome;
  },
  [GET_DEDUCTION1](state) {
    return state.deduction;
  },
  [GET_EARNED_INCOME1](state) {
    return state.earnedIncome;
  },
  [GET_INCOME_TAX1](state) {
    return getIncomeTax(state.earnedIncome);
  },
  [GET_RESIDENCE_TAX1](state) {
    return getResidenceTax(state.earnedIncome);
  },
  getFlag: (state) => {
    return state.flag;
  },
  [GET_SOCIAL_INSURANCE_PREMIUM1](state) {
    return getSocialInsurancePremiumForSalaryMan(state.yearlyIncome);
  },
  [GET_SUM_TAX1](state, getters) {
    return (
      getters[GET_RESIDENCE_TAX1] +
      getters[GET_INCOME_TAX1] +
      getters[GET_SOCIAL_INSURANCE_PREMIUM1]
    );
  },
};

export default getters;
