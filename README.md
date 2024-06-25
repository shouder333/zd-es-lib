# zd-es-lib

Hi~ o(_￣ ▽ ￣_)ブ

## 文档

- [中文文档](https://github.com/zhaoyiming0803/zd-es-lib/blob/master/README.md)
- [English Documentation](https://github.com/zhaoyiming0803/zd-es-lib/blob/master/README_en.md)

## 介绍

- 这是一个 ExtendScript 的库,里面包含了一些常用的函数.
- 这个库的目的是为了方便开发者开发 After Effects 的脚本.
- 基于 ts 开发,用 webpack 打包.
- 目前这个库还在开发中,欢迎大家提出宝贵意见.

## 目录

```
zd-es-lib
├── dist
│ ├── main.js // 打包后的 js 文件
├── src
│ ├── @types // 类型文件夹
│ ├   ├── auto-imports.d.ts // 全部的函数声明
│ ├   ├── index.d.ts // 全局的类型声明
├── index.ts // 入口文件
├── webpack // webpack 配置
├── tsconfig.json // ts 配置
├── package.json // 包管理配置
└── README.md // 介绍文档
```

## 使用

tsconfig.json:

```json
{
      "extends": "./node_modules/zd-es-lib/tsconfig.json",
      "compilerOptions": {
            "path": {
                  "zd-es-lib": ["./node_modules/zd-es-lib/auto-imports.d.ts"]
            }
      }
}
```

写好 ts 配置以后,这个库的所有函数和变量会变成全局的,不需要 import.

## 开发

- [x] webpack > 5.0.0
- [x] typescript > 5.0.0

```
# 安装依赖
npm install

# 开发环境
npm run dev

# 打包
npm run build
```

## 参考

- src/global/JSON.ts
  [json2](https://github.com/douglascrockford/JSON-js)
- src/global/atob.ts, src/global/btoa.ts
  [base64](https://github.com/davidchambers/Base64.js)
