<template>
  <section class="py-1 bg-blueGray-50">
    <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          shadow-lg
          rounded-lg
          bg-blueGray-100
          border-0
        "
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6 class="text-blueGray-700 text-xl font-bold">
              フリーランスエンジニア向けの税金比較表(万円単位)
            </h6>
            <button
              class="
                bg-pink-500
                text-white
                active:bg-pink-600
                font-bold
                uppercase
                text-xs
                px-4
                py-2
                rounded
                shadow
                hover:shadow-md
                outline-none
                focus:outline-none
                mr-1
                ease-linear
                transition-all
                duration-150
              "
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <!----Common Form---------------------------------->

          <common-form />

          <hr class="mt-6 border-b-1 border-blueGray-300" />
          <!----会社員---------------------------------->
          <salaryman-form v-if="getFlag('salaryman')" />

          <!----個人事業主---------------------------------->
          <individual-business-form v-if="getFlag('individualBusiness')" />

          <!----法人---------------------------------->
          <corporation-form v-if="getFlag('corporation')" />
          <!----マイクロ法人---------------------------------->

          <!-- <micro-corporation-form />

          <hr class="mt-6 border-b-1 border-blueGray-300" /> -->
        </div>
      </div>
      <!-- <footer class="relative pt-8 pb-6 mt-2">
        <div class="container mx-auto px-4">
          <div
            class="
              flex flex-wrap
              items-center
              md:justify-between
              justify-center
            "
          >
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Made with
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                  >Notus JS</a
                >
                by
                <a
                  href="https://www.creative-tim.com"
                  class="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  Creative Tim</a
                >.
              </div>
            </div>
          </div>
        </div>
      </footer> -->
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import CommonForm from "@cm/CommonForm/index.vue";
import SalarymanForm from "@cm/SalarymanForm/index.vue";
import IndividualBusinessForm from "@cm/IndividualBusinessForm/index.vue";
import CorporationForm from "@cm/CorporationForm/index.vue";
//import MicroCorporationForm from "@cm/MicroCorporationForm/index.vue";
export default Vue.extend({
  components: {
    IndividualBusinessForm,
    SalarymanForm,
    CommonForm,
    CorporationForm,
    //MicroCorporationForm,
    //TextArea,
    //SelectForm,
    //InputColor,
  },
  methods: {
    getFlag(model) {
      return (this as any).$store.getters[`${model}/getFlag`];
    },
  },
  data() {
    return {
      fontFamilyList: [
        { name: "Nanum Gothic", value: "Nanum Gothic" },
        { name: "Gulim", value: "Gulim" },
        { name: "Arial", value: "Arial" },
        { name: "Helvetica", value: "Helvetica" },
      ],
      fontSizeList: [
        { name: "15", value: "15" },
        { name: "20", value: "20" },
        { name: "25", value: "25" },
        { name: "30", value: "30" },
        { name: "35", value: "35" },
        { name: "40", value: "40" },
        { name: "45", value: "45" },
      ],
      fontWeightList: [
        { name: "Lghter", value: "lighter" },
        { name: "Normal", value: "normal" },
        { name: "Bolder", value: "bolder" },
      ],
      textBorderList: [
        { name: "Transparent", value: "transparent" },
        { name: "Black", value: "black" },
        { name: "White", value: "white" },
      ],
    };
  },
});
</script>

<style scoped>
.editor {
  /* width: 35%; */
  margin-left: auto;
  margin-right: auto;
}
.editor-text {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}

@media screen and (max-width: 525px) {
  .editor-text {
    flex-wrap: wrap;
  }
}
</style>
