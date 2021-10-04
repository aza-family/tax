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
      :width="1200"
      :height="505"
      class="rounded-lg shadow-lg"
    >
    </canvas>
    <div class="mt-6">
      <pagination />
    </div>
    <div class="mt-6">
      <button
        @click="downloadCanvas"
        class="
          w-100
          h-12
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
import Vue from "vue";
import Pagination from "@/components/Molecules/Pagination/index.vue";
export default Vue.extend({
  components: {
    Pagination,
  },
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

  computed: {
    ...mapGetters({
      getImages: "image/getImages",
      getOptions: "editor/getOptions",
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
  max-height: 505px;
}
</style>
