<template>
  <div class="header-wrapper">
    <p class="text-5xl">Meme Generator</p>
    <select-form type="imageIndex" :items="getImages" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SelectForm from "@cm/SelectForm/index.vue";
import images from "@/utils/images";
export default Vue.extend({
  components: {
    SelectForm,
  },
  computed: {
    getImages() {
      return images;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
