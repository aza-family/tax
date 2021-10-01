<template>
  <!-- <div class="w-full md:w-5/12 ml-auto mr-auto px-4"> -->
  <div class="editor">
    <text-area />
    <div class="editor-text">
      <select-form
        label="Font Family"
        type="fontFamily"
        :items="fontFamilyList"
      />
      <select-form label="Font Size" type="fontSize" :items="fontSizeList" />
      <!-- <select-form label="폰트 색상" type="fontColor" :items="fontSizeList" /> -->
      <input-color label="Font Color" />
      <select-form
        label="Font Weight"
        type="fontWeight"
        :items="fontWeightList"
      />
      <select-form
        label="Text Border"
        type="textBorder"
        :items="textBorderList"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextArea from "@cm/TextArea/index.vue";
import SelectForm from "@cm/SelectForm/index.vue";
import InputColor from "@cm/InputColor/index.vue";
export default Vue.extend({
  components: {
    TextArea,
    SelectForm,
    InputColor,
  },
  data() {
    return {
      fontFamilyList: [
        { name: "Nanum Gothic", value: "Nanum Gothic" },
        { name: "Gulim", value: "Gulim" },
        { name: "Arial", value: "Arial" },
        { name: "Helvetica", value: "Helvetica" },
      ],
      fontSizeList: [
        { name: "15", value: "15" },
        { name: "20", value: "20" },
        { name: "25", value: "25" },
        { name: "30", value: "30" },
        { name: "35", value: "35" },
        { name: "40", value: "40" },
        { name: "45", value: "45" },
      ],
      fontWeightList: [
        { name: "Lghter", value: "lighter" },
        { name: "Normal", value: "normal" },
        { name: "Bolder", value: "bolder" },
      ],
      textBorderList: [
        { name: "Transparent", value: "transparent" },
        { name: "Black", value: "black" },
        { name: "White", value: "white" },
      ],
    };
  },
});
</script>

<style scoped>
.editor {
  /* width: 35%; */
  margin-left: auto;
  margin-right: auto;
}
.editor-text {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>
