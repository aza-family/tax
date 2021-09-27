<template>
  <div class="tile">Here is the tile</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "tile",
  methods: {},
});
</script>

<style scoped>
.tile {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
}
</style>
