<template>
  <label class="inline-flex items-center mt-3">
    <input
      v-model="flag"
      type="checkbox"
      class="form-checkbox h-5 w-5 text-gray-600"
      checked
    /><span class="ml-2 text-gray-700">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import Vue from "vue";

//import handleCanvas from "@/mixin/handleCanvas";
//import handle from "@/mixin/handle";

export default Vue.extend({
  props: {
    model: { type: String, default: "" },
    label: { type: String, default: "" },
  },
  computed: {
    flag: {
      get() {
        return (this as any).$store.getters[`${(this as any).model}/getFlag`];
      },
      set(value) {
        (this as any).$store.commit(`${(this as any).model}/setFlag`, value);
        //this.value = value;
      },
    },
    //getSalaryManFlag() {
    //
    //  return (this as any).$store.getters["salaryman/getFlag"];
    //},
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
