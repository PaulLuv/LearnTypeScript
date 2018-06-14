
## TypeScript学习

### 1.初始化TypeScript单元测试环境

``` shell
mkdir learn-ts  
cd learn-ts
npm init -y 
tsc --init 
yarn add mocha chai @types/mocha @types/chai  // 添加 mocha  chai库
yarn add typescript ts-node // 添加 ts-node，避免ts编译为js的过程（node默认只认js）
// 修改package.json文件的 script、test
yarn test
```