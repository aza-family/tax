import { ActionTree } from "vuex";
import { CommonState, RootState } from "@/store/types";

export const ACTION_COMMON_REVENUE2 = "actionCommonRevenue";
export const ACTION_COMMON_REVENUE = `common/${ACTION_COMMON_REVENUE2}`;

export const ACTION_COMMON_EXPENSE2 = "actionCommonExpense";
export const ACTION_COMMON_EXPENSE = `common/${ACTION_COMMON_EXPENSE2}`;

import { SET_REVENUE, SET_EXPENSE } from "@/store/IndividualBusiness/mutations";
import { SET_YEARLY_INCOME } from "@/store/Salaryman/mutations";
import { SET_REVENUE_SELF } from "@/store/MicroCorporation/mutations";
const actions: ActionTree<CommonState, RootState> = {
  [ACTION_COMMON_REVENUE2](
    { commit, dispatch, state, rootState, getters, rootGetters },
    commonRevenue
  ) {
    //console.log("SET_REVENUE2 revenue:", revenue);
    state.commonRevenue = commonRevenue;
    commit(SET_YEARLY_INCOME, commonRevenue, { root: true });
    commit(SET_REVENUE, commonRevenue, { root: true });
    commit(SET_REVENUE_SELF, commonRevenue, { root: true });

    commit("corporation/setRevenue", commonRevenue, { root: true });
    //console.log("actions!!!!!!!!!!!!!!!", commit);

    //state.revenue = revenue;
    //state.profit = state.revenue - state.expense - state.deduction;
  },
  [ACTION_COMMON_EXPENSE2](
    { commit, dispatch, state, rootState, getters, rootGetters },
    commonExpense
  ) {
    //console.log("SET_REVENUE2 revenue:", revenue);
    state.commonExpense = commonExpense;
    commit(SET_EXPENSE, commonExpense, { root: true });
    commit("microCorporation/setExpenseSelf", commonExpense, { root: true });
    commit("corporation/setExpense", commonExpense, { root: true });
    //console.log("actions!!!!!!!!!!!!!!!", commit);

    //state.revenue = revenue;
    //state.profit = state.revenue - state.expense - state.deduction;
  },
};

export default actions;
