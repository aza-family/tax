<template>
  <div class="flex items-center justify-center space-x-1">
    <button
      @click="onClick('imageIndex', imageIndexBack)"
      class="
        hover:bg-pink-500
        flex
        items-center
        px-4
        py-2
        text-gray-500
        bg-gray-300
        rounded-md
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 17l-5-5m0 0l5-5m-5 5h12"
        />
      </svg>
    </button>

    <template v-for="(item, key) in getImages">
      <button
        :class="selectedClass(item.value)"
        @click="onClick('imageIndex', item.value)"
        :key="key"
        class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-pink-500"
      >
        {{ item.value }}
      </button>
    </template>

    <button
      @click="onClick('imageIndex', imageIndexNext)"
      class="
        px-4
        py-2
        text-gray-500
        bg-gray-300
        rounded-md
        hover:bg-pink-500 hover:text-white
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//import { mapGetters } from "vuex";
import handleCanvas from "@/mixin/handleCanvas";
import images from "@/utils/images";
import { mapGetters } from "vuex";
//import zero from "../../../assets/0.png";

//import one from "@/assets/1.png";
//import two from "@/assets/2.png";
//import there from "@/assets/3.png";
//import four from "@/assets/4.png";
//import five from "@/assets/5.png";
//import six from "@/assets/6.png";
//import seven from "@/assets/7.png";
//import eight from "@/assets/8.png";
//import nine from "@/assets/9.png";

export default Vue.extend({
  mixins: [handleCanvas],
  //props: {
  //  msg: String,
  //},
  mounted() {
    (this as any).updateCanvas();
  },
  methods: {
    selectedClass(num) {
      return this.getImageIndex == num ? "selected" : "";
    },
  },
  computed: {
    getImages() {
      return images;
    },
    imageIndexBack() {
      return (this as any).getImageIndex - 1;
    },
    imageIndexNext() {
      return (this as any).getImageIndex + 1;
    },
    getImageIndex(): number {
      return this.getOptions["imageIndex"];
    },

    ...mapGetters({
      //getCanvasDom: "editor/getCanvasDom",
      getOptions: "editor/getOptions",
    }),
  },
});
</script>

<style scoped lang="scss">
@import "@/style/variable.scss";
.selected {
  /* border: 1.5px solid $pink-color !important; */
  outline: 1.5px solid $pink-color;
}
</style>
