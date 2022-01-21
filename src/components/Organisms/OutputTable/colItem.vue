<template>
  <td class="px-4 py-3 border text-md font-semibold">
    <template v-if="type == 'sum'">
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
        {{ res }}万円
      </span></template
    >
    <template v-else>
      {{ res }}
    </template>
  </td>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  props: {
    res: Number,
    type: String,
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
