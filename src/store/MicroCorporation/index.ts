import { Module } from "vuex";
import { MicroCorporationState, RootState } from "@/store/types";
import getters from "./getters";
import mutations from "./mutations";

const state: MicroCorporationState = {
  flag: true,
  revenue: 36, //売上
  expense: 0, //経費
  revenueSelf: 1000, //売上(個人)
  profitSelf: 714, //課税所得(個人)
  expenseSelf: 200, //経費(個人)

  directorsCompensation: 24, //役員報酬
  deduction: 0, //控除
  deductionSelf: 86 + 65, //控除(個人)
  hoeknForSelf: 13,
  hoken: 3.4,
  pension: 9.6,
  profit: -1, //課税所得
};

export const microCorporation: Module<MicroCorporationState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  // actions
};
