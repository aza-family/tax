<template>
  <!-- <div class="w-full md:w-4/12 ml-auto mr-auto px-4"> -->
  <div>
    <!-- <img
      alt="..."
      class="max-w-full rounded-lg shadow-lg"
      src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
    /> -->
    <canvas
      id="canvas"
      ref="canvas"
      :width="1000"
      :height="450"
      class="rounded-lg shadow-lg"
    >
      이 브라우저는 HTML5의 canvas 요소를 지원하지 않습니다
    </canvas>
    <div class="mt-6">
      <button
        @click="downloadCanvas"
        class="
          w-100
          px-6
          py-2
          leading-5
          text-white
          transition-colors
          duration-200
          transform
          bg-pink-500
          rounded-md
          hover:bg-pink-700
          focus:outline-none focus:bg-gray-600
        "
      >
        Download Image
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
//import { SET_CANVAS_DOM } from "@/store/Editor/mutations";
import Vue from "vue";
export default Vue.extend({
  name: "tile",
  methods: {
    downloadCanvas() {
      const url = (this as any).$refs.canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `${this.getImages[this.getOptions.imageIndex].name}.png`
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  mounted() {
    //console.log("@@@@@@@@@@@ this.$refs.canvas:", this.$refs.canvas);
    //this.$store.commit(SET_CANVAS_DOM, this.$refs.canvas);
  },
  computed: {
    ...mapGetters({
      getCanvasDom: "editor/getCanvasDom",
      getOptions: "editor/getOptions",
      //getImageIndex: "editor/getOptions['imageIndex']",
      getImages: "editor/getImages",
    }),
  },
});
</script>

<style scoped>
.w-100 {
  width: 100%;
}

#canvas {
  max-width: 100% !important;
}
</style>
