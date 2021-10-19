<template>
  <div class="flex items-center justify-center space-x-1 flex-wrap">
    <button
      @click="onClick('imageIndex', imageIndexBack)"
      class="
        outline-none
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
import handle from "@/mixin/handle";
import { mapGetters } from "vuex";

export default Vue.extend({
  mixins: [handle],
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
  background-color: $pink-color;
  /* border: 1.5px solid $pink-color !important; */
  //outline: 1.5px solid $pink-color;
}

button,
button:focus {
  border: none;
  border-radius: 2pt;
  //box-shadow: 0 0 0 1pt grey;
  outline: none;
  transition: 0.1s;
}
</style>
