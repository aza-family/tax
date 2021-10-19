<template>
  <div id="app">
    <div class="meme bg-blueGray-50">
      <!-- <header-wrapper /> -->
      <input-form class="meme-editor" />
      <output-table />
      <!-- <preview-image class="meme-preview-image" /> -->
      <my-footer />
    </div>
  </div>
</template>
<script lang="ts">
//import HeaderWrapper from "@co/HeaderWrapper/index.vue";
import InputForm from "@co/InputForm/index.vue";
import OutputTable from "@co/OutputTable/index.vue";
//import PreviewImage from "@co/PreviewImage/index.vue";
import MyFooter from "@co/MyFooter/index.vue";
import Vue from "vue";

//import images from "@/utils/images";
//import { cloneDeep } from "lodash";
export default Vue.extend({
  components: {
    //HeaderWrapper,
    InputForm,
    OutputTable,
    //PreviewImage,
    MyFooter,
  },
});
</script>

<style lang="scss">
@import "./assets/tailwind.css";
@import "@/style/variable.scss";
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");

html,
body {
  background-color: $white-rgb !important;
}

.meme {
  margin: 20px auto 50px;
  //max-width: 990px;
  max-width: 1200px;
}

.meme-preview-image {
  //width: 70%;
  margin-top: 1rem;
}
</style>
