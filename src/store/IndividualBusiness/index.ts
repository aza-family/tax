import { Module } from "vuex";
import { IndividualBusinessState, RootState } from "@/store/types";
import getters from "./getters";
import mutations from "./mutations";

const state: IndividualBusinessState = {
  flag: true,
  revenue: 1000, //売上
  expense: 200, //経費
  deduction: 65 + 86, //控除(青色申告特別控+基礎控除と配偶者控除)
  profit: 649, //課税所得
  socialInsurancePremium: 0, //社会保険料
  incomeTax: 0, //所得税
  residenceTax: 0, //個人住民税
  enterpriseTax: 0, //個人事業税
  consumptionTax: 0, //消費税
  pension: 0, //年金
};

export const individualBusiness: Module<IndividualBusinessState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  // actions
};
