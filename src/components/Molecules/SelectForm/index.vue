<template>
  <div class="relative mt-4">
    <label
      for="name"
      class="text-base leading-7 text-blueGray-500"
      v-if="label"
    >
      {{ label }}
    </label>
    <select
      v-model="getOptions[type]"
      @input="onChanged(type, $event)"
      class="
        w-full
        px-4
        py-2
        mt-2
        text-base text-black
        transition
        duration-500
        ease-in-out
        transform
        rounded-lg
        bg-gray-100
        focus:border-blueGray-500
        focus:bg-white
        focus:outline-none
        focus:shadow-outline
        focus:ring-2
        ring-offset-current ring-offset-2
      "
    >
      <option v-for="(item, key) in items" :value="item.value" :key="key">
        {{ item.name }}
      </option>
      <!--<option>Surabaya</option>
      <option>Bandung</option>
      <option>jakarta</option> -->
    </select>
  </div>
</template>

<script lang="ts">
//import { cloneDeep } from "lodash";
import Vue from "vue";
//import { SET_OPTIONS } from "@/store/Editor/mutations";
//import { updateCanvas } from "@/utils/handleCanvas";
import handleCanvas from "@/mixin/handleCanvas";
export default Vue.extend({
  mixins: [handleCanvas],
  props: {
    label: String,
    type: String,
    items: [],
  },
  data() {
    return {
      //labelList: [
      //  { fontFamily: "폰트 종류" },
      //  { fontSize: "폰트 사이즈" },
      //  { fontColor: "폰트 색상" },
      //  { fontWeight: "폰트 두께" },
      //  { textBorder: "폰트 테두리" },
      //],
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
