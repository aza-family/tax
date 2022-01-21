import { MutationTree } from "vuex";
import { MicroCorporationState } from "@/store/types";

export const SET_REVENUE2 = "setRevenue";
export const SET_REVENUE = `microCorporation/${SET_REVENUE2}`;

export const SET_REVENUE_SELF2 = "setRevenue";
export const SET_REVENUE_SELF = `microCorporation/${SET_REVENUE_SELF2}`;

export const SET_EXPENSE2 = "setExpense";
export const SET_EXPENSE = `microCorporation/${SET_EXPENSE2}`;

export const SET_EXPENSE_SELF2 = "setExpenseSelf";
export const SET_EXPENSE_SELF = `microCorporation/${SET_EXPENSE_SELF2}`;

export const SET_DIRECTORS_COMPENSATION2 = "setDirectorsCompensation";
export const SET_DIRECTORS_COMPENSATION = `microCorporation/${SET_DIRECTORS_COMPENSATION2}`;

export const SET_DEDUCTION2 = "setDeduction";
export const SET_DEDUCTION = `microCorporation/${SET_DEDUCTION2}`;

export const SET_DEDUCTION_SELF2 = "setDeductionSelf";
export const SET_DEDUCTION_SELF = `microCorporation/${SET_DEDUCTION_SELF2}`;

export const SET_PROFIT2 = "setProfit";
export const SET_PROFIT = `microCorporation/${SET_PROFIT2}`;

export const SET_PROFIT_SELF2 = "setProfitSelf";
export const SET_PROFIT_SELF = `microCorporation/${SET_PROFIT_SELF2}`;

const mutations: MutationTree<MicroCorporationState> = {
  [SET_REVENUE2](state, revenue) {
    state.revenue = revenue;
    state.profit = state.revenue - state.expense - state.directorsCompensation;
  },
  [SET_REVENUE_SELF2](state, revenueSelf) {
    state.revenueSelf = revenueSelf;
    state.profitSelf =
      Number(state.revenueSelf) +
      state.directorsCompensation -
      state.expenseSelf -
      state.deductionSelf;
  },
  [SET_EXPENSE2](state, expense) {
    state.expense = expense;
    state.profit = state.revenue - state.expense - state.directorsCompensation;
  },
  [SET_EXPENSE_SELF2](state, expenseSelf) {
    state.expenseSelf = expenseSelf;
    state.profitSelf =
      Number(state.revenueSelf) +
      state.directorsCompensation -
      state.expenseSelf -
      state.directorsCompensation -
      state.deductionSelf;
  },
  [SET_DEDUCTION2](state, deduction) {
    state.deduction = deduction;
    state.profit =
      state.revenue -
      state.expense -
      state.directorsCompensation -
      state.deduction;
  },
  [SET_DEDUCTION_SELF2](state, deductionSelf) {
    state.deductionSelf = deductionSelf;
    state.profitSelf =
      Number(state.revenueSelf) +
      state.directorsCompensation -
      state.expense -
      state.directorsCompensation -
      state.deductionSelf;
  },
  [SET_PROFIT2](state, profit) {
    state.profit = profit;
  },
  [SET_PROFIT_SELF2](state, profitSelf) {
    state.profitSelf = profitSelf;
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
