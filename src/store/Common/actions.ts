import { ActionTree } from "vuex";
import { CommonState, RootState } from "@/store/types";

export const ACTION_COMMON_REVENUE2 = "actionCommonRevenue";
export const ACTION_COMMON_REVENUE = `common/${ACTION_COMMON_REVENUE2}`;

import { SET_REVENUE } from "@/store/IndividualBusiness/mutations";
import { SET_YEARLY_INCOME } from "@/store/Salaryman/mutations";
const actions: ActionTree<CommonState, RootState> = {
  [ACTION_COMMON_REVENUE2](
    { commit, dispatch, state, rootState, getters, rootGetters },
    commonRevenue
  ) {
    //console.log("SET_REVENUE2 revenue:", revenue);
    state.commonRevenue = commonRevenue;
    commit(SET_YEARLY_INCOME, commonRevenue, { root: true });
    commit(SET_REVENUE, commonRevenue, { root: true });
    commit("corporation/setRevenue", commonRevenue, { root: true });
    //console.log("actions!!!!!!!!!!!!!!!", commit);

    //state.revenue = revenue;
    //state.profit = state.revenue - state.expense - state.deduction;
  },
};

export default actions;
