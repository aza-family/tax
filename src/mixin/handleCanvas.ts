import Vue from "vue";
import { mapGetters } from "vuex";
import { SET_OPTIONS } from "@/store/Editor/mutations";
import images from "@/utils/images";
export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    getCanvasDom(): any {
      return document.getElementById("canvas");
    },
    getImages() {
      return images;
    },
    ...mapGetters({
      getOptions: "editor/getOptions",
    }),
  },
  methods: {
    onChanged(type, e) {
      this.getOptions[type] = e.target.value;
      this.$store.commit(SET_OPTIONS, this.getOptions);
      this.updateCanvas();
    },
    updateCanvas() {
      if (!this.getCanvasDom) return;
      this.updateCanvasImage();
    },
    updateCanvasImage() {
      const canvas = this.getCanvasDom;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = this.getImages[this.getOptions.imageIndex].src;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        //set size proportional to image
        canvas.height = canvas.width * (img.height / img.width);

        // step 1 - resize to 50%
        const oc = document.createElement("canvas");
        const octx = oc.getContext("2d");

        oc.width = img.width * 0.5;
        oc.height = img.height * 0.5;
        octx?.drawImage(img, 0, 0, oc.width, oc.height);

        // step 2
        octx?.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);

        // step 3, resize to final size
        ctx.drawImage(
          oc,
          0,
          0,
          oc.width * 0.5,
          oc.height * 0.5,
          0,
          0,
          canvas.width,
          canvas.height
        );
        this.updateCanvasText();
      };
    },
    updateCanvasText() {
      const canvas: any = this.getCanvasDom;

      //const { canvas } = this.getCanvasDom;
      const { text, fontFamily, fontSize, fontColor, fontWeight, textBorder } =
        this.getOptions;
      const ctx = canvas.getContext("2d");
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      const lines = text.split("\n");
      lines.forEach((line, index) => {
        // ctx.shadowColor = 'black';
        // ctx.shadowBlur = 10;
        ctx.lineWidth = 5;
        ctx.strokeStyle = `${textBorder}`;
        ctx.strokeText(
          line,
          canvas.width / 2,
          canvas.height - fontSize * (lines.length - index) * 1.5
        );
        ctx.fillStyle = fontColor;
        ctx.fillText(
          line,
          canvas.width / 2,
          canvas.height - fontSize * (lines.length - index) * 1.5
        );
      });
    },
  },
});
