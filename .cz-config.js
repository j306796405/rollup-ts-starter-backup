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
    // override the messages, defaults are as follows
    messages: {
        type: '请选择提交类型:',
        // scope: '请输入文件修改范围(可选):',
        // used if allowCustomScopes is true
        customScope: '请输入修改范围(可选):',
        subject: '请简要描述提交(必填):',
        body: '请输入详细描述(可选，待优化去除，跳过即可):',
        // breaking: 'List any BREAKING CHANGES (optional):\n',
        footer: '请输入要关闭的issue(待优化去除，跳过即可):',
        confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
    },
    allowCustomScopes: true,
    // allowBreakingChanges: ['feat', 'fix'],
    skipQuestions: ['body', 'footer'],
    // limit subject length, commitlint默认是72
    subjectLimit: 72
};
