// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const ca = "./src/components/Atoms";
const cm = "./src/components/Molecules";
const co = "./src/components/Organisms";
const ct = "./src/components/Templates";
module.exports = {
  runtimeCompiler: true,
  css: {
    modules: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@ca": path.resolve(__dirname, ca),
        "@cm": path.resolve(__dirname, cm),
        "@co": path.resolve(__dirname, co),
        "@ct": path.resolve(__dirname, ct),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
