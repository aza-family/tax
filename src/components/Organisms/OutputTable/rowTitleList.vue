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
      <th class="px-4 py-3 text-center" v-if="flags.fre">個人事業主</th>
      <th class="px-4 py-3 text-center" colspan="2" v-if="flags.cor">
        法人成り
      </th>
      <th class="px-4 py-3 text-center" colspan="2" v-if="flags.mic">
        マイクロ法人
      </th>
      <th class="px-4 py-3 text-center" v-if="flags.sal">会社員</th>
    </tr>
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
      <th class="px-4 py-3 text-center" v-if="flags.fre"></th>
      <th class="px-4 py-3 text-center" v-if="flags.cor">個人</th>
      <th class="px-4 py-3 text-center" v-if="flags.cor">法人</th>
      <th class="px-4 py-3 text-center" v-if="flags.mic">個人</th>
      <th class="px-4 py-3 text-center" v-if="flags.mic">法人</th>
      <th class="px-4 py-3 text-center" v-if="flags.sal"></th>
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
