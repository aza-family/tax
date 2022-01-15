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
      <th class="px-4 py-3" v-if="flags.fre">個人事業主</th>
      <th class="px-4 py-3" v-if="flags.cor">法人成り</th>
      <th class="px-4 py-3" v-if="flags.sal">会社員</th>
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
