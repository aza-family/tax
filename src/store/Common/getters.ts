import { GetterTree } from "vuex";
import { CommonState, RootState } from "@/store/types";

export const GET_COMMON_REVENUE2 = "getCommonRevenue";
export const GET_COMMON_REVENUE = `common/${GET_COMMON_REVENUE2}`;

const getters: GetterTree<CommonState, RootState> = {
  [GET_COMMON_REVENUE2](state) {
    return state.commonRevenue;
  },
};

export default getters;
