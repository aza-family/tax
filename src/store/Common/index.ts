import { Module } from "vuex";
import { CommonState, RootState } from "@/store/types";
import getters from "./getters";
//import mutations from "./mutations";
import actions from "./actions";

const state: CommonState = {
  commonRevenue: 1000, //売上
};

export const common: Module<CommonState, RootState> = {
  namespaced: true,
  state,
  getters,
  //mutations,
  actions,
};
