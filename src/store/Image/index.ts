import { Module } from "vuex";
import { ImageState, RootState } from "@/store/types";
import getters from "@/store/Image/getters";

const state: ImageState = {
  images: [],
};

export const image: Module<ImageState, RootState> = {
  namespaced: true,
  state,
  getters,
};
