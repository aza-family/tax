<template>
  <tr class="text-gray-700">
    <td class="px-4 py-3 border">
      <div class="flex items-center text-sm">
        <div class="relative w-8 h-8 mr-3 rounded-full">
          <img
            class="object-cover w-full h-full rounded-full"
            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            loading="lazy"
          />
          <div
            class="absolute inset-0 rounded-full shadow-inner"
            aria-hidden="true"
          ></div>
        </div>
        <div>
          <p class="font-semibold">合計</p>
          <!-- <p class="text-xs text-gray-600">Designer</p>-->
        </div>
      </div>
    </td>
    <td
      class="px-4 py-3 border text-md font-semibold"
      v-if="getFlag('salaryman')"
    >
      <span
        class="
          px-2
          py-1
          font-semibold
          leading-tight
          text-green-700
          bg-green-100
          rounded-sm
        "
      >
        {{ getSumTax }}万円
      </span>
    </td>
    <td
      class="px-4 py-3 border text-md font-semibold"
      v-if="getFlag('individualBusiness')"
    >
      <span
        class="
          px-2
          py-1
          font-semibold
          leading-tight
          text-green-700
          bg-green-100
          rounded-sm
        "
      >
        {{ getSumTaxV2 }}万円
      </span>
    </td>
    <td
      class="px-4 py-3 border text-md font-semibold"
      v-if="getFlag('corporation')"
    >
      <span
        class="
          px-2
          py-1
          font-semibold
          leading-tight
          text-green-700
          bg-green-100
          rounded-sm
        "
      >
        {{ getSumTaxV3 }}万円
      </span>
    </td>
  </tr>
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
