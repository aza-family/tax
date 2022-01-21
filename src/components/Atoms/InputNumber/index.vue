<template>
  <input
    type="number"
    @input="onChanged(set, $event)"
    :disabled="disableStatus == true"
    :class="disabledStyle"
    class="
      border-0
      px-3
      py-3
      placeholder-blueGray-300
      text-blueGray-600
      bg-white
      rounded
      text-sm
      shadow
      focus:outline-none focus:ring
      w-full
      ease-linear
      transition-all
      duration-150
    "
    value="New York"
  />
</template>

<script lang="ts">
import Vue from "vue";

//import handleCanvas from "@/mixin/handleCanvas";
import handle from "@/mixin/handle";

export default Vue.extend({
  mixins: [handle],
  props: {
    //disabled: { type: Boolean, default: false },
    set: { type: String, default: "" },
    disableStatus: { type: Boolean, default: false },
  },
  computed: {
    disabledStyle() {
      //console.log("disableStatus:", this.disableStatus);
      return this.disableStatus == true ? "disabled-style" : "xx";
    },
    //disabledProperty() {
    //  return this.disabled ? "disabled" : "";
    //},
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.disabled-style {
  background-color: #d2d0d0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
