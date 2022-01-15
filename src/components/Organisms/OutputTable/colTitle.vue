<template>
  <td class="px-4 py-3 border">
    <div class="flex items-center text-sm">
      <div class="relative w-8 h-8 mr-3 rounded-full md:block">
        <img
          class="object-cover w-full h-full rounded-full"
          :src="imgUrl"
          alt=""
          loading="lazy"
        />
        <div
          class="absolute inset-0 rounded-full shadow-inner"
          aria-hidden="true"
        ></div>
      </div>
      <div>
        <!-- <p class="font-semibold text-black">Sufyan</p> -->
        <p class="font-semibold">{{ title }}</p>
      </div>
    </div>
  </td>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  props: {
    title: String,
    imgUrl: String,
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
