<template>
  <div :class="getClass">
    <label-text :label="label" />
    <input-number :disableStatus="disableStatus" v-model="get" :set="set" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InputNumber from "@ca/InputNumber/index.vue";
import LabelText from "@ca/LabelText/index.vue";

export default Vue.extend({
  props: {
    widthPerClass: { type: String, default: "lg:w-2/12" },
    label: { type: String, default: "" },
    disableStatus: { type: Boolean, default: false },
    set: {},
    get: {},
  },
  computed: {
    getClass() {
      return `w-full ${this.widthPerClass}`;
    },
  },
  components: {
    InputNumber,
    LabelText,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.w_per__input_custom {
  width: 13%;
}
</style>
