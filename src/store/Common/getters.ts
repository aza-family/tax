import { GetterTree } from "vuex";
import { CommonState, RootState } from "@/store/types";

import {
  GET_SAL_INCOME_TAX,
  GET_SAL_RESIDENCE_TAX,
  GET_SAL_SOCIAL_INSURANCE_PREMIUM,
  GET_SAL_SUM_TAX,
} from "@/store/Salaryman/getters";
import {
  GET_FRE_INCOME_TAX,
  GET_FRE_PENSION,
  GET_FRE_RESIDENCE_TAX,
  GET_FRE_SOCIAL_INSURANCE_PREMIUM,
  GET_FRE_SUM_TAX,
} from "@/store/IndividualBusiness/getters";
import {
  GET_COR_CORPORATE_TAXES_ETC,
  GET_COR_RESIDENCE_TAX,
  GET_COR_INCOME_TAX,
  GET_COR_INCOME_TAX_SELF,
  GET_COR_HOKEN,
  GET_COR_PENSION,
  GET_COR_SUM_TAX,
  GET_COR_SUM_TAX_SELF,
  GET_COR_SOCIAL_INSURANCE_PREMIUM,
} from "@/store/Corporation/getters";

import {
  GET_MIC_CORPORATE_TAXES_ETC,
  GET_MIC_RESIDENCE_TAX,
  GET_MIC_INCOME_TAX,
  GET_MIC_INCOME_TAX_SELF,
  GET_MIC_SUM_TAX,
  GET_MIC_SUM_TAX_SELF,
  GET_MIC_SOCIAL_INSURANCE_PREMIUM,
  GET_MIC_HOKEN_SELF,
  GET_MIC_HOKEN,
  GET_MIC_PENSION,
  GET_MIC_PENSION_SELF,
} from "@/store/MicroCorporation/getters";

export const GET_COMMON_REVENUE2 = "getCommonRevenue";
export const GET_COMMON_REVENUE = `common/${GET_COMMON_REVENUE2}`;

export const GET_COMMON_EXPENSE2 = "getCommonRevenue";
export const GET_COMMON_EXPENSE = `common/${GET_COMMON_EXPENSE2}`;

export const GET_ALL_FLAGS2 = "getAllFlags";
export const GET_ALL_FLAGS = `common/${GET_ALL_FLAGS2}`;

export const GET_ALL_INCOME_TAX2 = "getAllIncomeTax";
export const GET_ALL_INCOME_TAX = `common/${GET_ALL_INCOME_TAX2}`;

export const GET_TAXES2 = "getTaxes";
export const GET_TAXES = `common/${GET_TAXES2}`;

const getters: GetterTree<CommonState, RootState> = {
  [GET_COMMON_REVENUE2](state) {
    return state.commonRevenue;
  },
  [GET_COMMON_EXPENSE2](state) {
    return state.commonExpense;
  },
  [GET_ALL_FLAGS2](state, getters, rootState, rootGetters) {
    //console.log("rootGetters!:", rootGetters);
    //console.log("rootGetters!22:", rootGetters["individualBusiness/getFlag"]);
    return {
      fre: rootGetters["individualBusiness/getFlag"],
      cor: rootGetters["corporation/getFlag"],
      sal: rootGetters["salaryman/getFlag"],
      mic: rootGetters["microCorporation/getFlag"],
      //mic: rootGetters["micro/getFlag"],
    };
  },
  [GET_TAXES2](state, getters, rootState, rootGetters) {
    //console.log("rootGetters!:", rootGetters);
    //console.log("rootGetters!22:", rootGetters["individualBusiness/getFlag"]);
    //socialInsurancePremium, corporateTaxesEtc, residenceTax
    return {
      fre: {
        incomeTax: rootGetters[GET_FRE_INCOME_TAX],
        hoken: rootGetters[GET_FRE_SOCIAL_INSURANCE_PREMIUM],
        corporateTaxesEtc: 0,
        residenceTax: rootGetters[GET_FRE_RESIDENCE_TAX],
        sum: rootGetters[GET_FRE_SUM_TAX],
        pension: rootGetters[GET_FRE_PENSION],
      },
      cor: {
        //incomeTax: rootGetters[GET_COR_INCOME_TAX],
        incomeTaxSelf: rootGetters[GET_COR_INCOME_TAX],
        corporateTaxesEtc: rootGetters[GET_COR_CORPORATE_TAXES_ETC],
        residenceTaxSelf: rootGetters[GET_COR_RESIDENCE_TAX],
        sumSelf: rootGetters[GET_COR_SUM_TAX_SELF],
        sum: rootGetters[GET_COR_SUM_TAX],
        hoken: rootGetters[GET_COR_HOKEN],
        hokenSelf: rootGetters[GET_COR_HOKEN],
        pension: rootGetters[GET_COR_PENSION],
        pensionSelf: rootGetters[GET_COR_PENSION],
      },
      sal: {
        incomeTax: rootGetters[GET_SAL_INCOME_TAX],
        hoken: rootGetters[GET_SAL_SOCIAL_INSURANCE_PREMIUM],
        corporateTaxesEtc: 0,
        residenceTax: rootGetters[GET_SAL_RESIDENCE_TAX],
        sum: rootGetters[GET_SAL_SUM_TAX],
      },
      mic: {
        incomeTax: rootGetters[GET_MIC_INCOME_TAX],
        incomeTaxSelf: rootGetters[GET_MIC_INCOME_TAX_SELF],
        //socialInsurancePremium: rootGetters[GET_SAL_SOCIAL_INSURANCE_PREMIUM],
        corporateTaxesEtc: 7,
        //residenceTax: 0, //法人に住民税は存在しない
        residenceTaxSelf: rootGetters[GET_MIC_RESIDENCE_TAX],
        sum: rootGetters[GET_MIC_SUM_TAX],
        sumSelf: rootGetters[GET_MIC_SUM_TAX_SELF],
        hoken: rootGetters[GET_MIC_HOKEN], //一旦固定
        hokenSelf: rootGetters[GET_MIC_HOKEN_SELF],
        pension: rootGetters[GET_MIC_PENSION],
        pensionSelf: rootGetters[GET_MIC_PENSION_SELF],
      },
    };
  },
  //taxList() {
  //  return [
  //    "所得税+復興特別所得税",
  //    "健康保険料",
  //    "国民年金・厚生年金",
  //    "住民税",
  //  ];
  //},
};

export default getters;
