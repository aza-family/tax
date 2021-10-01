import { Module } from "vuex";
import { EditorState, RootState } from "@/store/types";
import getters from "@/store/Editor/getters";
import mutations from "@/store/Editor/mutations";

const state: EditorState = {
  images: [],
  options: {
    imageIndex: 0,
    fontFamily: "Nanum Gothic",
    fontSize: 30,
    fontColor: "#FFFFFF",
    fontWeight: "normal",
    text: "",
    textBorder: "black",
  },
};

export const editor: Module<EditorState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  // actions
};
