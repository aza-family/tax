<template>
  <thead>
    <tr
      class="
        text-md
        font-semibold
        tracking-wide
        text-left text-gray-900
        bg-gray-100
        uppercase
        border-b border-gray-600
      "
    >
      <th class="px-4 py-3"></th>
      <th class="px-4 py-3" v-if="flags.fre"></th>
      <th class="px-4 py-3" v-if="flags.cor">
        <td class="px-4 py-3 border text-md font-semibold">個人</td>
        <td class="px-4 py-3 border text-md font-semibold">法人</td>
      </th>
      <th class="px-4 py-3" v-if="flags.sal"></th>
    </tr>
  </thead>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  props: {
    flags: [],
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
