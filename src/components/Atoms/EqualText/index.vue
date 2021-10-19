<template>
  <h1
    class="
      custom-text
      text-ms
      px-3
      py-3
      w-full
      ease-linear
      transition-all
      duration-150
    "
    value="United States"
  >
    =
  </h1>
</template>

<script lang="ts">
import Vue from "vue";
//import handleCanvas from "@/mixin/handleCanvas";
export default Vue.extend({
  //mixins: [handleCanvas],
  props: {
    label: { type: String },
  },
  computed: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.custom-text {
  font-size: 40px;
  text-align: center;
}
</style>
