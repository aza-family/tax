import { Module } from "vuex";
import { CorporationState, RootState } from "@/store/types";
import getters from "./getters";
import mutations from "./mutations";

const state: CorporationState = {
  flag: true,
  revenue: 1000, //売上
  expense: 200, //経費
  directorsCompensation: 400, //役員報酬
  deduction: 0, //控除
  profit: 400, //課税所得
};

export const corporation: Module<CorporationState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  // actions
};
