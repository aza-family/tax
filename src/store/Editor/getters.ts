import { GetterTree } from "vuex";
import { EditorState, RootState } from "@/store/types";
const getters: GetterTree<EditorState, RootState> = {
  getOptions: (state) => {
    return state.options;
  },
};

export default getters;
