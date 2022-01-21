<template>
  <table class="w-full">
    <row-title-list :flags="getAllFlags" />
    <!-- <row-sub-title :flags="getAllFlags" /> -->
    <tbody class="bg-white">
      <template v-for="(item, key) in items">
        <tr :key="key" class="text-gray-700">
          <col-title :title="item.title" :imgUrl="item.imgUrl" />
          <col-item
            :res="getTaxes.fre[item.type]"
            :type="item.type"
            v-if="getAllFlags.fre"
          />
          <template v-if="getAllFlags.cor">
            <col-item
              :res="getTaxes.cor[getTypeSelf(item.type)]"
              :type="item.type"
            />
            <col-item :res="getTaxes.cor[item.type]" :type="item.type" />
          </template>
          <template v-if="getAllFlags.mic">
            <col-item
              :res="getTaxes.mic[getTypeSelf(item.type)]"
              :type="item.type"
            />
            <col-item :res="getTaxes.mic[item.type]" :type="item.type" />
          </template>

          <col-item
            :res="getTaxes.sal[item.type]"
            :type="item.type"
            v-if="getAllFlags.sal"
          />
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
import { GET_ALL_FLAGS, GET_TAXES } from "@/store/Common/getters";

import { mapGetters } from "vuex";
import rowTitleList from "./rowTitleList.vue";
import colTitle from "./colTitle.vue";
import colItem from "./colItem.vue";
//import rowSubTitle from "./rowSubTitle.vue";
//import TextArea from "@cm/TextArea/index.vue";
//import SelectForm from "@cm/SelectForm/index.vue";
//import InputColor from "@cm/InputColor/index.vue";
export default Vue.extend({
  components: {
    rowTitleList,
    colTitle,
    colItem,
    //rowSubTitle,
    //colSumItem,
    //TextArea,
    //SelectForm,
    //InputColor,
  },
  computed: {
    ...mapGetters({
      getAllFlags: GET_ALL_FLAGS,
      getTaxes: GET_TAXES,
    }),
  },
  methods: {
    getTypeSelf(type) {
      return `${type}Self`;
    },
    getFlag(model) {
      return (this as any).$store.getters[`${model}/getFlag`];
    },
  },

  data() {
    return {
      items: [
        {
          title: "所得税+復興特別所得税",
          type: "incomeTax",
          imgUrl:
            "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        {
          title: "社会保険料",
          type: "hoken",
          imgUrl:
            "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        {
          title: "国民年金・厚生年金",
          type: "pension",
          imgUrl:
            "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        {
          title: "住民税",
          type: "residenceTax",
          imgUrl:
            "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        //{
        //  title: "事業税",
        //  imgUrl:
        //    "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        //},
        {
          title: "法人税等",
          type: "corporateTaxesEtc",
          imgUrl:
            "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        {
          title: "合計",
          type: "sum",
          imgUrl:
            "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
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
