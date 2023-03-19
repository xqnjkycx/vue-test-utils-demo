export default {
  globals: {},
  testEnvironment: "jsdom",
  // testMatch -- 匹配测试用例文件
  testMatch: ["<rootDir>/src/test/unit/specs/*.spec.js"],
  // transform -- 用 vue-jest 处理 *.vue 文件，用 babel-jest 处理 *.js 文件
  transform: {
    "^.+\\js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  // transformIgnorePatterns: 指定某些文件不被babel翻译
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
  // coverageReporters -- 覆盖率报告的生成文件格式
  coverageReporters: ["json", "html"],
  // coverageDirectory -- 覆盖率报告的目录，测试报告所存放的位置 生成报告 npx jest --coverage
  coverageDirectory: "coverage",
  // collectCoverageFrom -- 测试报告想要覆盖那些文件，目录，前面加！是避开这些文件
  collectCoverageFrom: [
    "src/components/**/*.(js|vue)",
    "!src/main.js",
    "!src/router/index.js",
    "!**/node_modules/**",
  ],
};
