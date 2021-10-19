<template>
  <label
    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    htmlfor="grid-password"
  >
    {{ label }}
  </label>
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
<style lang="scss" scoped></style>
