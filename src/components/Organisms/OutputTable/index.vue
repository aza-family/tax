<template>
  <section class="container mx-auto p-6 font-mono">
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto"></div>
      <table-wrapper />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

//import table from "./table.vue";
import tableWrapper from "@co/OutputTable/tableWrapper.vue";

//import TextArea from "@cm/TextArea/index.vue";
//import SelectForm from "@cm/SelectForm/index.vue";
//import InputColor from "@cm/InputColor/index.vue";
export default Vue.extend({
  components: {
    tableWrapper,
    //TextArea,
    //SelectForm,
    //InputColor,
  },
  computed: {},
  methods: {},
  data() {
    return {};
  },
});
</script>

<style scoped></style>
