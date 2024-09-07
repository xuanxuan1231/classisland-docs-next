import { defineUserConfig, Plugin } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ClassIsland 文档",
      description: "ClassIsland 的文档",
    },
    "/en-us/": {
      lang: "en-US",
      title: "ClassIsland Documentation",
      description: "documentation of ClassIsland",
    },
  },
  theme
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
