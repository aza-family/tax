<template>
  <td class="px-4 py-3 border text-md font-semibold">
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
      {{ res }}
    </span>
  </td>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  props: {
    res: String,
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
