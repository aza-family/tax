<template>
  <div id="app">
    <div class="meme bg-blueGray-50">
      <header-wrapper />
      <editor class="meme-editor" />
      <preview-image class="meme-preview-image" />
      <my-footer />
    </div>
  </div>
</template>
<script lang="ts">
import HeaderWrapper from "@co/HeaderWrapper/index.vue";
import Editor from "@co/Editor/index.vue";
import PreviewImage from "@co/PreviewImage/index.vue";
import MyFooter from "@co/MyFooter/index.vue";
import Vue from "vue";

//import images from "@/utils/images";
//import { cloneDeep } from "lodash";
export default Vue.extend({
  components: {
    HeaderWrapper,
    Editor,
    PreviewImage,
    MyFooter,
  },
  mounted() {
    this.$ga.page("/");
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
