import { GetterTree } from "vuex";
import { CorporationState, RootState } from "@/store/types";

export const GET_REVENUE2 = "getRevenue";
export const GET_COR_REVENUE = `corporation/${GET_REVENUE2}`;

export const GET_EXPENSE2 = "getExpense";
export const GET_COR_EXPENSE = `corporation/${GET_EXPENSE2}`;

export const GET_DEDUCTION2 = "getDeduction";
export const GET_COR_DEDUCTION = `corporation/${GET_DEDUCTION2}`;

export const GET_DIRECTORS_COMPENSATION2 = "getDirectorsCompensation";
export const GET_COR_DIRECTORS_COMPENSATION = `corporation/${GET_DIRECTORS_COMPENSATION2}`;

export const GET_PROFIT2 = "getProfit";
export const GET_COR_PROFIT = `corporation/${GET_PROFIT2}`;

//A. 法人税等(法人住民税,法人税,法人事業税)
export const GET_CORPORATE_TAXES_ETC2 = "getCorporateTaxesEtc";
export const GET_COR_CORPORATE_TAXES_ETC = `corporation/${GET_CORPORATE_TAXES_ETC2}`;

//A-1. 法人住民税
export const GET_CORPORATE_RESIDENCE_TAX2 = "getCorporateResidenceTax";
export const GET_COR_CORPORATE_RESIDENCE_TAX = `corporation/${GET_CORPORATE_RESIDENCE_TAX2}`;

//A-2. 法人税
export const GET_CORPORATE_TAX2 = "getCorporateTax";
export const GET_COR_CORPORATE_TAX = `corporation/${GET_CORPORATE_TAX2}`;

//A-3. 法人事業税
export const GET_CORPORATE_BUSINESS_TAX2 = "getCorporateBusinessTax";
export const GET_COR_CORPORATE_BUSINESS_TAX = `corporation/${GET_CORPORATE_BUSINESS_TAX2}`;

//住民税
export const GET_RESIDENCE_TAX3 = "getResidenceTax";
export const GET_COR_RESIDENCE_TAX = `corporation/${GET_RESIDENCE_TAX3}`;

//所得税
export const GET_INCOME_TAX3 = "getIncomeTax";
export const GET_COR_INCOME_TAX = `corporation/${GET_INCOME_TAX3}`;

export const GET_SUM_TAX3 = "getSumTax";
export const GET_COR_SUM_TAX = `corporation/${GET_SUM_TAX3}`;

//社会保険料
export const GET_SOCIAL_INSURANCE_PREMIUM2 = "getSocialInsurancePremium";
export const GET_COR_SOCIAL_INSURANCE_PREMIUM = `corporation/${GET_SOCIAL_INSURANCE_PREMIUM2}`;

import {
  getCorporateTax,
  getCorporateBusinessTax,
  getCorporateResidenceTax,
  getResidenceTax,
  getEarnedIncomeTaxCredit,
  getIncomeTax,
  getSocialInsurancePremiumForSalaryMan,
} from "@/utils";
const getters: GetterTree<CorporationState, RootState> = {
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
  getFlag: (state) => {
    return state.flag;
  },
  [GET_CORPORATE_TAXES_ETC2](state) {
    //console.log("GET_CORPORATE_TAXES_ETC2", state.profit);
    const corporateTax = getCorporateTax(state.profit); //法人税
    //console.log("corporateTax:", corporateTax);
    const corporateBusinessTax = getCorporateBusinessTax(state.profit); //法人事業税
    //console.log("corporateBusinessTax:", corporateBusinessTax);
    const corporateResidenceTax = getCorporateResidenceTax(state.profit);
    //console.log("corporateResidenceTax:", corporateResidenceTax);
    return corporateTax + corporateBusinessTax + corporateResidenceTax;
  },
  [GET_DIRECTORS_COMPENSATION2](state) {
    return state.directorsCompensation;
  },
  //住民税
  [GET_RESIDENCE_TAX3](state) {
    //控除額を引いた額
    const deduction = getEarnedIncomeTaxCredit(state.directorsCompensation);
    const earnings = state.directorsCompensation - deduction;
    //console.log("!earnings", earnings);
    return getResidenceTax(earnings);
  },
  [GET_INCOME_TAX3](state) {
    //控除額を引いた額
    const deduction = getEarnedIncomeTaxCredit(state.directorsCompensation);
    //console.log("GET_INCOME_TAX3 deduction", deduction);
    const earnings = state.directorsCompensation - deduction;
    //console.log("earnings:", earnings);
    return getIncomeTax(earnings);
  },
  [GET_SUM_TAX3](state, getters) {
    return (
      getters[GET_RESIDENCE_TAX3] +
      getters[GET_INCOME_TAX3] +
      getters[GET_CORPORATE_TAXES_ETC2] +
      getters[GET_SOCIAL_INSURANCE_PREMIUM2] * 2
    );
  },
  [GET_SOCIAL_INSURANCE_PREMIUM2](state) {
    return getSocialInsurancePremiumForSalaryMan(state.directorsCompensation);
  },
};

export default getters;
