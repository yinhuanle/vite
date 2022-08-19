# Vite + Vue 3 + TypeScript + ElementPlus

## Node版本
推荐v16.0.0  
官方声明：Vite 需要 Node.js 版本 >= 12.0.0。  
然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。  

## vscode设置
### vscode扩展中的安装
1.vue3推荐：可以使用新的插件 volar，代替旧的 vetur。禁用vetur改用volar  
volar 支持：  
语法高亮  
typescript  
component auto importing  
script setup  

2.开启ESLint  

## 项目成员
### 见证vite构建速度
1.git clone ... 拉项目代码  
2.npm install  
3.npm run dev  

## 开发过程中
### 1.集成eslint和.prettierrc：项目团队统一格式化代码
useTabs：使用tab缩进还是空格缩进，选择false；  
tabWidth：tab是空格的情况下，是几个空格，选择2个；  
printWidth：一行字符的长度；  
singleQuote：使用单引号还是双引号，选择true，使用单引号；  
trailingComma：在多行输入的尾逗号是否添加，设置为 none；  
semi：语句末尾是否要加分号，默认值true，选择false表示不加；  
htmlWhitespaceSensitivity: "ignore"空格被认为是不敏感的  

### 2.集成commitlint：git代码提交规范
feat: 新功能  
fix: 修改 bug  
docs: 文档  
perf: 性能相关  
refactor: 代码重构（就是不影响使用，内部结构的调整）  
test: 测试用例  
style: 样式修改  
workflow: 工作流  
build: 项目打包构建相关的配置修改  
ci: 持续集成相关  
revert: 恢复上一次提交（回滚）  
wip: work in progress 工作中 还没完成  
chore: 其他修改（不在上述类型中的修改）  
release: 发版  
deps: 依赖相关的修改  

### 3.自动引入vue3相关api：auto-imports
优势：  
列：无需import { ref } from 'vue'

### 4.公共UI框架ElementPlus
### 5.构建各个环境
#### package.json
同之前vue2项目构建配置  
"build:dev": "vue-tsc --noEmit && vite build --mode dev",  
"build:fat": "vue-tsc --noEmit && vite build --mode fat",  
"build:prod": "vue-tsc --noEmit && vite build --mode prod",



<!-- 使用standard-version（发版与 Changelog 自动化）
https://blog.csdn.net/huangpb123/article/details/125774863
npm run release 1.0.0
git push --tags
https://www.csdn.net/tags/NtDaYg4sNDc2Ny1ibG9n.html -->

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

