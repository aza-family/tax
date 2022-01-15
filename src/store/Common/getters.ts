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
  GET_FRE_RESIDENCE_TAX,
  GET_FRE_SOCIAL_INSURANCE_PREMIUM,
  GET_FRE_SUM_TAX,
} from "@/store/IndividualBusiness/getters";
import {
  GET_COR_CORPORATE_TAXES_ETC,
  GET_COR_RESIDENCE_TAX,
  GET_COR_INCOME_TAX,
  GET_COR_SUM_TAX,
  GET_COR_SOCIAL_INSURANCE_PREMIUM,
} from "@/store/Corporation/getters";

export const GET_COMMON_REVENUE2 = "getCommonRevenue";
export const GET_COMMON_REVENUE = `common/${GET_COMMON_REVENUE2}`;

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
  [GET_ALL_FLAGS2](state, getters, rootState, rootGetters) {
    //console.log("rootGetters!:", rootGetters);
    //console.log("rootGetters!22:", rootGetters["individualBusiness/getFlag"]);
    return {
      fre: rootGetters["individualBusiness/getFlag"],
      cor: rootGetters["corporation/getFlag"],
      sal: rootGetters["salaryman/getFlag"],
      mic: false,
    };
  },
  [GET_TAXES2](state, getters, rootState, rootGetters) {
    //console.log("rootGetters!:", rootGetters);
    //console.log("rootGetters!22:", rootGetters["individualBusiness/getFlag"]);
    //socialInsurancePremium, corporateTaxesEtc, residenceTax
    return {
      fre: {
        incomeTax: rootGetters[GET_FRE_INCOME_TAX],
        socialInsurancePremium: rootGetters[GET_FRE_SOCIAL_INSURANCE_PREMIUM],
        corporateTaxesEtc: 0,
        residenceTax: rootGetters[GET_FRE_RESIDENCE_TAX],
        sum: rootGetters[GET_FRE_SUM_TAX],
      },
      cor: {
        incomeTax: rootGetters[GET_COR_INCOME_TAX],
        socialInsurancePremium: rootGetters[GET_COR_SOCIAL_INSURANCE_PREMIUM],
        corporateTaxesEtc: rootGetters[GET_COR_CORPORATE_TAXES_ETC],
        residenceTax: rootGetters[GET_COR_RESIDENCE_TAX],
        sum: rootGetters[GET_COR_SUM_TAX],
      },
      sal: {
        incomeTax: rootGetters[GET_SAL_INCOME_TAX],
        socialInsurancePremium: rootGetters[GET_SAL_SOCIAL_INSURANCE_PREMIUM],
        corporateTaxesEtc: 0,
        residenceTax: rootGetters[GET_SAL_RESIDENCE_TAX],
        sum: rootGetters[GET_SAL_SUM_TAX],
      },
      //mic: false,
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
