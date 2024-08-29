import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ClassIsland文档",
  description: "ClassIsland的文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
