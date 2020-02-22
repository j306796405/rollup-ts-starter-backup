"use strict";
module.exports = {
    // 不要更改types, 只允许出现这几种
    types: [
        {
            value: "wip",
            name: "wip：大版本功能开发阶段性提交"
        },
        {
            value: "feat",
            name: "feat：完整新功能提交"
        },
        {
            value: "fix",
            name: "fix：修复bug"
        },
        {
            value: "build",
            name: "build：打包，准备发布"
        },
        {
            value: "docs",
            name: "docs：只修改了文档相关的文件，例如修改README.md"
        },
        {
            value: "style",
            name: "style：代码风格、不影响代码功能的更改，例如修改空格缩进，换行规范等"
        },
        {
            value: "refactor",
            name: "refactor：既不修复错误也不添加新功能的代码更改，例如重构"
        },
        {
            value: "chore",
            name: "chore：对非业务性代码进行修改，例如包管理器,构建过程或辅助工具的变动"
        },
        {
            value: 'perf',
            name: 'perf：性能优化'
        },
        {
            value: 'test',
            name: 'test：增加测试'
        },
        {
            value: 'revert',
            name: 'revert：回退'
        },
    ],
    // 按照项目模块, 自行配置
    scopes: [{name: "品牌监测"}, {name: "活动监测"}, {name: "kol监测"}],
    // 可以根据匹配的类型不同, 显示不一样的scope,
    scopeOverrides: {
        fix: [{name: "merge"}],
        chore: []
    },
    allowCustomScopes: true,
    //重要的改动要声明
    allowBreakingChanges: ["feat", "fix"]
};
