import { MutationTree } from "vuex";
import { IndividualBusinessState } from "@/store/types";

export const SET_REVENUE2 = "setRevenue";
export const SET_REVENUE = `individualBusiness/${SET_REVENUE2}`;

export const SET_EXPENSE2 = "setExpense";
export const SET_EXPENSE = `individualBusiness/${SET_EXPENSE2}`;

export const SET_DEDUCTION2 = "setDeduction";
export const SET_DEDUCTION = `individualBusiness/${SET_DEDUCTION2}`;

export const SET_PROFIT2 = "setProfit";
export const SET_PROFIT = `individualBusiness/${SET_PROFIT2}`;

//export const RECALCULATION_PROFIT2 = "recalculationProfit";
//export const RECALCULATION_PROFIT = `individualBusiness/${RECALCULATION_PROFIT2}`;

const mutations: MutationTree<IndividualBusinessState> = {
  [SET_REVENUE2](state, revenue) {
    //console.log("SET_REVENUE2 revenue:", revenue);
    state.revenue = revenue;
    state.profit = state.revenue - state.expense - state.deduction;
  },
  [SET_EXPENSE2](state, expense) {
    state.expense = expense;
    state.profit = state.revenue - state.expense - state.deduction;
  },
  [SET_DEDUCTION2](state, deduction) {
    state.deduction = deduction;
    state.profit = state.revenue - state.expense - state.deduction;
  },
  [SET_PROFIT2](state, profit) {
    state.profit = profit;
  },
  setFlag: (state, val) => {
    //console.log("setFlag2:", val);
    state.flag = val;
  },
  //[RECALCULATION_PROFIT2](state) {
  //  state.profit = state.revenue - state.expense - state.deduction;
  //},
};

export default mutations;
