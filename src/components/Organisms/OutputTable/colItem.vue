<template>
  <td class="px-4 py-3 border text-md font-semibold">
    {{ res }}
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
