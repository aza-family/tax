import { GetterTree } from "vuex";
import { MicroCorporationState, RootState } from "@/store/types";

export const GET_HOKEN_FOR_SELF2 = "getHokenForSelf";
export const GET_MIC_HOKEN_FOR_SELF = `microCorporation/${GET_HOKEN_FOR_SELF2}`;

export const GET_REVENUE2 = "getRevenue";
export const GET_MIC_REVENUE = `microCorporation/${GET_REVENUE2}`;

export const GET_REAL_REVENUE2 = "getRealRevenue";
export const GET_MIC_REAL_REVENUE = `microCorporation/${GET_REAL_REVENUE2}`;

export const GET_REVENUE_SELF2 = "getRevenueSelf";
export const GET_MIC_REVENUE_SELF = `microCorporation/${GET_REVENUE_SELF2}`;

export const GET_EXPENSE2 = "getExpense";
export const GET_MIC_EXPENSE = `microCorporation/${GET_EXPENSE2}`;

export const GET_EXPENSE_SELF2 = "getExpenseSelf";
export const GET_MIC_EXPENSE_SELF = `microCorporation/${GET_EXPENSE_SELF2}`;

export const GET_DEDUCTION2 = "getDeduction";
export const GET_MIC_DEDUCTION = `microCorporation/${GET_DEDUCTION2}`;

export const GET_DEDUCTION_SELF2 = "getDeductionSelf";
export const GET_MIC_DEDUCTION_SELF = `microCorporation/${GET_DEDUCTION_SELF2}`;

export const GET_DIRECTORS_COMPENSATION2 = "getDirectorsCompensation";
export const GET_MIC_DIRECTORS_COMPENSATION = `microCorporation/${GET_DIRECTORS_COMPENSATION2}`;

export const GET_PROFIT_SELF2 = "getProfitSelf";
export const GET_MIC_PROFIT_SELF = `microCorporation/${GET_PROFIT_SELF2}`;

export const GET_PROFIT2 = "getProfit";
export const GET_MIC_PROFIT = `microCorporation/${GET_PROFIT2}`;

//A. 法人税等(法人住民税,法人税,法人事業税)
export const GET_CORPORATE_TAXES_ETC2 = "getCorporateTaxesEtc";
export const GET_MIC_CORPORATE_TAXES_ETC = `microCorporation/${GET_CORPORATE_TAXES_ETC2}`;

//A-1. 法人住民税
export const GET_CORPORATE_RESIDENCE_TAX2 = "getCorporateResidenceTax";
export const GET_MIC_CORPORATE_RESIDENCE_TAX = `microCorporation/${GET_CORPORATE_RESIDENCE_TAX2}`;

//A-2. 法人税
export const GET_CORPORATE_TAX2 = "getCorporateTax";
export const GET_MIC_CORPORATE_TAX = `microCorporation/${GET_CORPORATE_TAX2}`;

//A-3. 法人事業税
export const GET_CORPORATE_BUSINESS_TAX2 = "getCorporateBusinessTax";
export const GET_MIC_CORPORATE_BUSINESS_TAX = `microCorporation/${GET_CORPORATE_BUSINESS_TAX2}`;

//住民税
export const GET_RESIDENCE_TAX3 = "getResidenceTax";
export const GET_MIC_RESIDENCE_TAX = `microCorporation/${GET_RESIDENCE_TAX3}`;

//所得税
export const GET_INCOME_TAX3 = "getIncomeTax";
export const GET_MIC_INCOME_TAX = `microCorporation/${GET_INCOME_TAX3}`;

//所得税(個人)
export const GET_INCOME_TAX_SELF3 = "getIncomeTaxSelf";
export const GET_MIC_INCOME_TAX_SELF = `microCorporation/${GET_INCOME_TAX_SELF3}`;

export const GET_SUM_TAX3 = "getSumTax";
export const GET_MIC_SUM_TAX = `microCorporation/${GET_SUM_TAX3}`;

export const GET_SUM_TAX_SELF3 = "getSumTaxSelf";
export const GET_MIC_SUM_TAX_SELF = `microCorporation/${GET_SUM_TAX_SELF3}`;

//社会保険料
export const GET_SOCIAL_INSURANCE_PREMIUM2 = "getSocialInsurancePremium";
export const GET_MIC_SOCIAL_INSURANCE_PREMIUM = `microCorporation/${GET_SOCIAL_INSURANCE_PREMIUM2}`;

export const GET_HOKEN2 = "getHoekn";
export const GET_MIC_HOKEN = `microCorporation/${GET_HOKEN2}`;

export const GET_HOKEN_SELF2 = "getHoeknSelf";
export const GET_MIC_HOKEN_SELF = `microCorporation/${GET_HOKEN_SELF2}`;

export const GET_PENSION2 = "getPension";
export const GET_MIC_PENSION = `microCorporation/${GET_PENSION2}`;

export const GET_PENSION_SELF2 = "getPensionSelf";
export const GET_MIC_PENSION_SELF = `microCorporation/${GET_PENSION_SELF2}`;

import {
  getCorporateTax,
  getCorporateBusinessTax,
  getCorporateResidenceTax,
  getResidenceTax,
  getEarnedIncomeTaxCredit,
  getIncomeTax,
  getSocialInsurancePremiumForSalaryMan,
  getReconstructionSpecialTax,
  getSalaryIncomeDeduction,
} from "@/utils";
const getters: GetterTree<MicroCorporationState, RootState> = {
  [GET_HOKEN_FOR_SELF2](state) {
    return state.hoeknForSelf;
  },
  [GET_REVENUE2](state) {
    return state.revenue;
  },
  [GET_REVENUE_SELF2](state) {
    console.log("state.revenueSelf:", state.revenueSelf);
    return state.revenueSelf;
  },
  [GET_REAL_REVENUE2](state) {
    return state.revenueSelf + state.directorsCompensation;
  },
  [GET_EXPENSE2](state) {
    return state.expense;
  },
  [GET_EXPENSE_SELF2](state) {
    return state.expenseSelf;
  },
  [GET_DEDUCTION2](state) {
    return state.deduction;
  },
  [GET_DEDUCTION_SELF2](state) {
    return (
      state.deductionSelf +
      getSalaryIncomeDeduction(state.directorsCompensation)
    );
  },
  [GET_PROFIT_SELF2](state) {
    return state.profitSelf;
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
    console.log("********** state.profit:", state.profit);
    console.log("**************** corporateTax:", corporateTax);
    //console.log("corporateTax:", corporateTax);
    const corporateBusinessTax = getCorporateBusinessTax(state.profit); //法人事業税
    //console.log("corporateBusinessTax:", corporateBusinessTax);
    const corporateResidenceTax = getCorporateResidenceTax(state.profit); //法人住民税
    //console.log("corporateResidenceTax:", corporateResidenceTax);
    //return corporateTax + corporateBusinessTax + corporateResidenceTax;
    return corporateTax;
  },
  [GET_DIRECTORS_COMPENSATION2](state) {
    return state.directorsCompensation;
  },
  //住民税
  [GET_RESIDENCE_TAX3](state) {
    //控除額を引いた額
    //const deduction = getEarnedIncomeTaxCredit(state.directorsCompensation);
    //const earnings = state.directorsCompensation - deduction;
    //console.log("!earnings", earnings);
    //return getResidenceTax(earnings);
    return getResidenceTax(state.profitSelf);
  },
  [GET_INCOME_TAX3](state) {
    const profit = getIncomeTax(state.profit);
    console.log("@@@@@@@@@@ profit:", profit);
    const specialTax = getReconstructionSpecialTax(profit);
    return Number(profit) + specialTax;

    //return getIncomeTax(state.profit);
  },
  [GET_INCOME_TAX_SELF3](state) {
    const profitSelf = getIncomeTax(state.profitSelf);
    const specialTax = getReconstructionSpecialTax(profitSelf);
    return Number(profitSelf) + specialTax;
    //console.log(
    //  "!!!!!!!!getIncomeTax(state.profitSelf):",
    //  getIncomeTax(state.profitSelf)
    //);
    //return getIncomeTax(state.profitSelf);
  },
  [GET_SUM_TAX3](state, getters) {
    console.log(
      "^^^^getters[GET_CORPORATE_TAXES_ETC2]:",
      getters[GET_CORPORATE_TAXES_ETC2]
    );
    return (
      //getters[GET_RESIDENCE_TAX3] +
      getters[GET_INCOME_TAX3] +
      getters[GET_CORPORATE_TAXES_ETC2] +
      getters[GET_HOKEN2] +
      getters[GET_PENSION2]
      //getters[GET_SOCIAL_INSURANCE_PREMIUM2] * 2
    );
  },
  [GET_SUM_TAX_SELF3](state, getters) {
    return (
      getters[GET_INCOME_TAX_SELF3] +
      getters[GET_RESIDENCE_TAX3] +
      getters[GET_HOKEN_SELF2] +
      getters[GET_PENSION_SELF2]
      //getters[GET_SOCIAL_INSURANCE_PREMIUM2] * 2
    );
  },
  [GET_HOKEN2](state) {
    return state.hoken;
  },
  [GET_HOKEN_SELF2](state) {
    return state.hoken;
  },
  [GET_PENSION2](state) {
    return state.pension;
  },
  [GET_PENSION_SELF2](state) {
    return state.pension;
  },
  [GET_SOCIAL_INSURANCE_PREMIUM2](state) {
    return getSocialInsurancePremiumForSalaryMan(state.directorsCompensation);
  },
};

export default getters;
