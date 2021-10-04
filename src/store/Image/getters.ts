import { GetterTree } from "vuex";
import { ImageState, RootState } from "@/store/types";
import images from "@/utils/images";
const getters: GetterTree<ImageState, RootState> = {
  getImages: () => {
    return images;
  },
  getImagesLength: () => {
    return images.length;
  },
};

export default getters;
