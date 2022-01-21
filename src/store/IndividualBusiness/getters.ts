import { GetterTree } from "vuex";
import { IndividualBusinessState, RootState } from "@/store/types";

export const GET_REVENUE2 = "getRevenue";
export const GET_FRE_REVENUE = `individualBusiness/${GET_REVENUE2}`;

export const GET_EXPENSE2 = "getExpense";
export const GET_FRE_EXPENSE = `individualBusiness/${GET_EXPENSE2}`;

export const GET_DEDUCTION2 = "getDeduction";
export const GET_FRE_DEDUCTION = `individualBusiness/${GET_DEDUCTION2}`;

export const GET_PROFIT2 = "getProfit";
export const GET_FRE_PROFIT = `individualBusiness/${GET_PROFIT2}`;

//所得税
export const GET_INCOME_TAX2 = "getIncomeTax";
export const GET_FRE_INCOME_TAX = `individualBusiness/${GET_INCOME_TAX2}`;

//住民税
export const GET_RESIDENCE_TAX2 = "getResidenceTax";
export const GET_FRE_RESIDENCE_TAX = `individualBusiness/${GET_RESIDENCE_TAX2}`;

export const GET_SUM_TAX2 = "getSumTax";
export const GET_FRE_SUM_TAX = `individualBusiness/${GET_SUM_TAX2}`;

export const GET_PENSION2 = "getPension";
export const GET_FRE_PENSION = `individualBusiness/${GET_PENSION2}`;

//社会保険料
export const GET_SOCIAL_INSURANCE_PREMIUM2 =
  "getSocialInsurancePremiumForSalaryMan";
export const GET_FRE_SOCIAL_INSURANCE_PREMIUM = `individualBusiness/${GET_SOCIAL_INSURANCE_PREMIUM2}`;

import {
  getIncomeTax,
  getPension,
  getReconstructionSpecialTax,
  getResidenceTax,
  getSocialInsurancePremiumForIndividualBusiness,
} from "@/utils";

const getters: GetterTree<IndividualBusinessState, RootState> = {
  [GET_REVENUE2](state) {
    return state.revenue;
  },
  [GET_EXPENSE2](state) {
    return state.expense;
  },
  [GET_DEDUCTION2](state) {
    return state.deduction;
  },
  [GET_PROFIT2](state) {
    return state.profit;
  },
  [GET_INCOME_TAX2](state) {
    const profit = getIncomeTax(state.profit);
    //console.log("@@@@@@@@@@@profit:", profit);
    const specialTax = getReconstructionSpecialTax(profit);
    return Number(profit) + specialTax;
    //return getIncomeTax(state.profit);
  },
  [GET_RESIDENCE_TAX2](state) {
    return getResidenceTax(state.profit);
  },
  getFlag: (state) => {
    return state.flag;
  },
  [GET_SOCIAL_INSURANCE_PREMIUM2](state) {
    return getSocialInsurancePremiumForIndividualBusiness(state.profit);
  },
  [GET_PENSION2]() {
    return getPension();
  },
  [GET_SUM_TAX2](state, getters) {
    return (
      getters[GET_RESIDENCE_TAX2] +
      getters[GET_INCOME_TAX2] +
      getters[GET_SOCIAL_INSURANCE_PREMIUM2] +
      getters[GET_PENSION2]
    );
  },
};

export default getters;
