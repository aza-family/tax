import { Module } from "vuex";
import { CorporationState, RootState } from "@/store/types";
import getters from "./getters";
import mutations from "./mutations";

const state: CorporationState = {
  flag: true,
  revenue: 1000, //売上
  expense: 200, //経費
  directorsCompensation: 400, //役員報酬
  deduction: 86, //控除
  profit: 381, //課税所得
  profitSelf: 190, //課税所得
  hoken: 3.4,
  pension: 9.6,
};

export const corporation: Module<CorporationState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  // actions
};
