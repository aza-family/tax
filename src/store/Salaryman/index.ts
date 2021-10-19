import { Module } from "vuex";
import { SalarymanState, RootState } from "@/store/types";
import getters from "./getters";
import mutations from "./mutations";

const state: SalarymanState = {
  flag: true,
  yearlyIncome: 1000, //年収
  deduction: 195, //控除
  earnedIncome: 805, //給与の所得
  socialInsurancePremium: 0, //社会保険料
  incomeTax: 0, //所得税
  residenceTax: 0, //住民税
};

export const salaryman: Module<SalarymanState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  // actions
};
