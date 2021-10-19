import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  computed: {},
  methods: {
    onChanged(type, e) {
      //this.getOptions[type] = e.target.value;
      //console.log("onChanged", e);
      this.$store.commit(type, e.target.value);
    },
  },
});
