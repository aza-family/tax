import { MutationTree } from "vuex";
import { EditorState } from "@/store/types";

export const SET_OPTIONS2 = "setOptions";
export const SET_OPTIONS = `editor/${SET_OPTIONS2}`;

const mutations: MutationTree<EditorState> = {
  [SET_OPTIONS2](state, options) {
    state.options = options;
  },
};

export default mutations;
