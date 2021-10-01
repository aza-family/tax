<template>
  <div class="relative pt-4">
    <label for="name" class="text-base leading-7 text-blueGray-500">{{
      label
    }}</label>
    <input
      :value="getOptions[type]"
      @input="onChanged('fontColor', $event)"
      type="color"
      id="color"
      name="color"
      placeholder="name"
      class="
        w-full
        px-4
        py-2
        mt-2
        mr-4
        text-base text-black
        transition
        duration-500
        ease-in-out
        transform
        rounded-lg
        bg-gray-100
        focus:border-blueGray-500
        focus:bg-white
        focus:outline-none
        focus:shadow-outline
        focus:ring-2
        ring-offset-current ring-offset-2
      "
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import handleCanvas from "@/mixin/handleCanvas";
export default Vue.extend({
  mixins: [handleCanvas],
  props: {
    label: String,
    type: String,
    items: [],
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
