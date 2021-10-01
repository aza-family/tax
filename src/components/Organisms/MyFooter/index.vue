<template>
  <footer class="relative pt-8 pb-6 mt-8">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-6/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Made with
            <a
              href="https://www.creative-tim.com/product/notus-js"
              class="text-blueGray-500 hover:text-gray-800"
              target="_blank"
              >Notus JS</a
            >
            by
            <a
              href="https://www.creative-tim.com"
              class="text-blueGray-500 hover:text-blueGray-800"
              target="_blank"
            >
              Creative Tim</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {},
});
</script>

<style scoped>
.tile {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
}
</style>
