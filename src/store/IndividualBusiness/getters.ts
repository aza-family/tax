import { GetterTree } from "vuex";
import { IndividualBusinessState, RootState } from "@/store/types";

export const GET_REVENUE2 = "getRevenue";
export const GET_REVENUE = `individualBusiness/${GET_REVENUE2}`;

export const GET_EXPENSE2 = "getExpense";
export const GET_EXPENSE = `individualBusiness/${GET_EXPENSE2}`;

export const GET_DEDUCTION2 = "getDeduction";
export const GET_DEDUCTION = `individualBusiness/${GET_DEDUCTION2}`;

export const GET_PROFIT2 = "getProfit";
export const GET_PROFIT = `individualBusiness/${GET_PROFIT2}`;

export const GET_INCOME_TAX2 = "getIncomeTax";
export const GET_INCOME_TAX_V2 = `individualBusiness/${GET_INCOME_TAX2}`;

export const GET_RESIDENCE_TAX2 = "getResidenceTax";
export const GET_RESIDENCE_TAX_V2 = `individualBusiness/${GET_RESIDENCE_TAX2}`;

import { getIncomeTax, getResidenceTax } from "@/utils";

const getters: GetterTree<IndividualBusinessState, RootState> = {
  [GET_REVENUE2](state) {
    return state.revenue;
  },
  [GET_EXPENSE2](state) {
    return state.expense;
  },
  [GET_DEDUCTION2](state) {
    return state.deduction;
  },
  [GET_PROFIT2](state) {
    return state.profit;
  },
  [GET_INCOME_TAX2](state) {
    return getIncomeTax(state.profit) / 10000;
  },
  [GET_RESIDENCE_TAX2](state) {
    return getResidenceTax(state.profit);
  },
  getFlag: (state) => {
    return state.flag;
  },
};

export default getters;
