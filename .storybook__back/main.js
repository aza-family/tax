const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.ts"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: (config) => {
    config.resolve = {
      extensions: [".ts", ".js"],
      alias: {
        "@": path.join(__dirname, "../js/"),
        vue$: "vue/dist/vue.esm.js", // 'vue/dist/vue.common.js' for webpack 1
      },
    };
    config.module.rules.push({
      // TypeScriptに対応する
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true,
          },
        },
      ],
    });
    return config;
  },
};
