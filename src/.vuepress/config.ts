import { defineUserConfig, Plugin } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/classisland-docs-next/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ClassIsland文档",
      description: "ClassIsland的文档",
    },
    "/en-us/": {
      lang: "en-US",
      title: "ClassIsland Documentation",
      description: "ClassIsland's documentation",
    },
  },

  theme,


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
