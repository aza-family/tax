<template>
  <div class="flex flex-wrap mt-4 mb-6 -mx-3">
    <div class="w-full px-3">
      <label class="text-base leading-7 text-blueGray-500" for="description"
        >Text Area
      </label>
      <textarea
        @input="onChanged('text', $event)"
        class="
          textarea-custom
          w-full
          h-16
          px-4
          py-2
          mt-2
          text-base text-blueGray-500
          transition
          duration-500
          ease-in-out
          transform
          bg-white
          border
          rounded-lg
          focus:border-blue-500
          focus:outline-none
          focus:shadow-outline
          focus:ring-2
          ring-offset-current ring-offset-2
          apearance-none
          autoexpand
        "
        id="description"
        type="text"
        name="description"
        placeholder="Message..."
        required=""
      ></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//import { mapGetters } from "vuex";
import handleCanvas from "@/mixin/handleCanvas";

export default Vue.extend({
  mixins: [handleCanvas],
  props: {
    msg: String,
  },
});
</script>

<style scoped></style>
