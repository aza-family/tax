import { MutationTree } from "vuex";
import { CorporationState } from "@/store/types";

export const SET_REVENUE2 = "setRevenue";
export const SET_REVENUE = `corporation/${SET_REVENUE2}`;

export const SET_EXPENSE2 = "setExpense";
export const SET_EXPENSE = `corporation/${SET_EXPENSE2}`;

export const SET_DIRECTORS_COMPENSATION2 = "setDirectorsCompensation";
export const SET_DIRECTORS_COMPENSATION = `corporation/${SET_DIRECTORS_COMPENSATION2}`;

export const SET_DEDUCTION2 = "setDeduction";
export const SET_DEDUCTION = `corporation/${SET_DEDUCTION2}`;

export const SET_PROFIT2 = "setProfit";
export const SET_PROFIT = `corporation/${SET_PROFIT2}`;

const mutations: MutationTree<CorporationState> = {
  [SET_REVENUE2](state, revenue) {
    state.revenue = revenue;
    state.profit = state.revenue - state.expense - state.directorsCompensation;
  },
  [SET_EXPENSE2](state, expense) {
    state.expense = expense;
    state.profit = state.revenue - state.expense - state.directorsCompensation;
  },
  [SET_DEDUCTION2](state, deduction) {
    state.deduction = deduction;
    state.profit =
      state.revenue -
      state.expense -
      state.directorsCompensation -
      state.deduction;
  },
  [SET_PROFIT2](state, profit) {
    state.profit = profit;
  },
  setFlag: (state, val) => {
    state.flag = val;
  },
  [SET_DIRECTORS_COMPENSATION2](state, val) {
    state.directorsCompensation = val;
    state.profit = state.revenue - state.expense - state.directorsCompensation;
  },
};

export default mutations;
