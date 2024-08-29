import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "首页",
      link: "index.md",
    },
  ],
  "/app/": [
    {
      text: "应用帮助",
      children: [
        "index.md",
        "setup.md",
        "basic.md",
        {
          text: "档案设置",
          prefix: "profile/",
          children: [
            "README.md",
            "classplan.md",
            "time-layout.md",
            "subject.md",
          ],
        },
        {
          text: "迁移课表",
          prefix: "migrate/",
          children: [
            "README.md",
            "ecs.md",
          ],
        },
        "notifications.md",
        "uri-navigation.md",
        "backup.md",
        "advanced.md",
        {
          text: "错误排除",
          prefix: "faq/",
          children: [
            "faq.md",
            "reporting-issue.md",
          ],
        },
      ],
    },
  ],
  "/management/": [
    {
      text: "集控",
      children: [
        "README.md",
        "client-identify.md",
        "connect-to-mgmt-server.md",
        "configure.md",
        "policy.md",
        "tutorial-create-management-config.md",
      ],
    },
  ],
  "/dev/": [
    {
      text: "开发文档",
      children: [
        "README.md",
        {
          text: "开始",
          prefix: "get-started/",
          children: [
            "devlopment.md",
            "devlopment-plugins.md",
          ],
        },
        {
          text: "插件",
          prefix: "plugins/",
          children: [
            "create-project.md",
            "basics.md",
            "plugin-base.md",
            "publishing.md",
          ],
        },
        "basics.md",
        "events.md",
        "uri-navigation.md",
        "components.md",
        {
          text: "提醒",
          prefix: "notifications/",
          children: [
            "index.md",
            "advanced-request.md",
          ],
        },
        "settings-page.md",
      ],
    },
  ],
  "/community/": [
    {
      text: "社区",
      children: [
        "README.md",
        "contributing.md",
      ],
    },
  ],
});