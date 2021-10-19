<template>
  <section class="container mx-auto p-6 font-mono">
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
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
              <th class="px-4 py-3" v-if="getFlag('salaryman')">会社員</th>
              <th class="px-4 py-3" v-if="getFlag('individualBusiness')">
                個人事業主
              </th>
              <th class="px-4 py-3" v-if="getFlag('corporation')">法人</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
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
                    <p class="text-xs text-gray-600">社会保険料</p>
                  </div>
                </div>
              </td>
              <td
                class="px-4 py-3 text-ms font-semibold border"
                v-if="getFlag('salaryman')"
              >
                22
              </td>
              <td
                class="px-4 py-3 text-xs border"
                v-if="getFlag('individualBusiness')"
              >
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
                  Acceptable
                </span>
              </td>
              <td
                class="px-4 py-3 text-sm border"
                v-if="getFlag('corporation')"
              >
                6/4/2000
              </td>
            </tr>
            <tr class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <!-- <p class="font-semibold text-black">Stevens</p> -->
                    <p class="text-xs text-gray-600">所得税</p>
                  </div>
                </div>
              </td>
              <td
                class="px-4 py-3 text-md font-semibold border"
                v-if="getFlag('salaryman')"
              >
                {{ getIncomeTax }}
              </td>
              <td
                class="px-4 py-3 text-md font-semibold border"
                v-if="getFlag('individualBusiness')"
              >
                {{ getIncomeTaxV2 }}
              </td>
              <!--<td class="px-4 py-3 text-xs border">
                <span
                  class="
                    px-2
                    py-1
                    font-semibold
                    leading-tight
                    text-orange-700
                    bg-gray-100
                    rounded-sm
                  "
                >
                  {{ getIncomeTaxV2 }}
                </span>
              </td> -->
              <td
                class="px-4 py-3 text-sm border"
                v-if="getFlag('corporation')"
              >
                {{ getIncomeTaxV3 }}
              </td>
            </tr>
            <tr class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <!-- <p class="font-semibold">Nora</p>-->
                    <p class="text-xs text-gray-600">住民税</p>
                  </div>
                </div>
              </td>
              <td
                class="px-4 py-3 text-md font-semibold border"
                v-if="getFlag('salaryman')"
              >
                {{ getResidenceTax }}
              </td>
              <td
                class="px-4 py-3 text-md font-semibold border"
                v-if="getFlag('individualBusiness')"
              >
                {{ getResidenceTaxV2 }}
              </td>
              <td
                class="px-4 py-3 text-md font-semibold border"
                v-if="getFlag('corporation')"
              >
                {{ getResidenceTaxV3 }}
              </td>
            </tr>
            <tr class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold">事業税</p>
                    <!-- <p class="text-xs text-gray-600">事業税</p>-->
                  </div>
                </div>
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('salaryman')"
              >
                0
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('individualBusiness')"
              >
                0
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('corporation')"
              >
                0
              </td>
            </tr>
            <tr class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold">社会保険料(法人負担)</p>
                    <!-- <p class="text-xs text-gray-600">Designer</p>-->
                  </div>
                </div>
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('salaryman')"
              >
                0
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('individualBusiness')"
              >
                0
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('corporation')"
              >
                0
              </td>
            </tr>

            <tr class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold">法人税等</p>
                    <!-- <p class="text-xs text-gray-600">Designer</p>-->
                  </div>
                </div>
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('salaryman')"
              >
                0
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('individualBusiness')"
              >
                0
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('corporation')"
              >
                {{ getCorporateTaxesEtc }}
              </td>
            </tr>

            <tr class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold">合計</p>
                    <!-- <p class="text-xs text-gray-600">Designer</p>-->
                  </div>
                </div>
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('salaryman')"
              >
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
                  0
                </span>
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('individualBusiness')"
              >
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
                  0
                </span>
              </td>
              <td
                class="px-4 py-3 border text-md font-semibold"
                v-if="getFlag('corporation')"
              >
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
                  {{ getSumTaxV3 }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { GET_INCOME_TAX, GET_RESIDENCE_TAX } from "@/store/Salaryman/getters";
import {
  GET_INCOME_TAX_V2,
  GET_RESIDENCE_TAX_V2,
} from "@/store/IndividualBusiness/getters";
import {
  GET_CORPORATE_TAXES_ETC,
  GET_RESIDENCE_TAX_V3,
  GET_INCOME_TAX_V3,
  GET_SUM_TAX_V3,
} from "@/store/Corporation/getters";
import { mapGetters } from "vuex";
//import TextArea from "@cm/TextArea/index.vue";
//import SelectForm from "@cm/SelectForm/index.vue";
//import InputColor from "@cm/InputColor/index.vue";
export default Vue.extend({
  components: {
    //TextArea,
    //SelectForm,
    //InputColor,
  },
  computed: {
    ...mapGetters({
      getIncomeTax: GET_INCOME_TAX,
      getIncomeTaxV2: GET_INCOME_TAX_V2,
      getResidenceTax: GET_RESIDENCE_TAX,
      getResidenceTaxV2: GET_RESIDENCE_TAX_V2,
      getResidenceTaxV3: GET_RESIDENCE_TAX_V3,
      getIncomeTaxV3: GET_INCOME_TAX_V3,
      getCorporateTaxesEtc: GET_CORPORATE_TAXES_ETC,
      getSumTaxV3: GET_SUM_TAX_V3,
    }),
  },
  methods: {
    getFlag(model) {
      return (this as any).$store.getters[`${model}/getFlag`];
    },
  },
  data() {
    return {
      table: [{ tax: "" }],
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
