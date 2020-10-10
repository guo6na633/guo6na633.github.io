(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{379:function(n,s,e){"use strict";e.r(s);var t=e(25),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"工程目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工程目录"}},[n._v("#")]),n._v(" 工程目录")]),n._v(" "),e("h2",{attrs:{id:"vue-cli2-0工程目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli2-0工程目录"}},[n._v("#")]),n._v(" vue-cli2.0工程目录")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" vue-cli 目录结构详细讲解\n目录\n结构预览\n├─build                 // 保存一些webpack的初始化配置,项目构建\n│ ├─build.js            // 生产环境构建\n│ ├─check-version.js    // 检查npm、node版本\n│ ├─vue-loader.conf.js  // webpack loader配置\n│ ├─webpack.base.conf.js// webpack基础配置\n│ ├─webpack.dev.conf.js // 开发环境配置，构建本地开发服务器\n│ ├─webpack.prod.conf.js// 生产环境的配置\n│\n├─config                // config文件夹保存一些项目初始化的配置\n│ ├─dev.env.js          // 开发环境的配置\n│ ├─index.js            // 项目一些配置变量\n│ ├─prod.env.js         // 生产环境的配置\n│\n├─dist                  // 打包后的项目\n├─node_modules          // 依赖包\n│\n├─src                   // 源码目录\n│ ├─assets              // 静态文件目录\n│ ├─components          // 组件文件\n│ ├─router              // 路由\n│ ├─App.vue             // 是项目入口文件\n│ ├─main.js             // 是项目的核心文件，入口\n├─static                // 静态资源目录 \n├─.babelrc              // Babel的配置文件\n├─.editorconfig         // 代码规范配置文件\n├─.gitignore            // git忽略配置文件\n├─.postcssrc.js         // postcss插件配置文件\n├─index.html            // 页面入口文件\n├─package-lock.json     // 项目包管控文件\n├─package.json          // 项目配置\n└─README.md             // 项目说明书\n\n\n\n\n")])])]),e("h2",{attrs:{id:"vue-cli3-0工程目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3-0工程目录"}},[n._v("#")]),n._v(" vue-cli3.0工程目录")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(".\n├── node_modules                                // npm/yarn安装的项目依赖模块\n├── public                                      // 静态资源目录\n├── src                                         // 源码目录\n│   ├── api                                     // 网络请求文件\n│   │   ├── app                                 // 基础工程网络请求文件\n│   │   │   ├── user.js                         // 用户模块api请求\n│   │   ├── example\n│   │   │   └── ***                             // 示例模块api请求\n│   ├── assets                                  // 资源目录\n│   │   ├── fonts                               // 字体文件\n│   │   ├── images                              // 图片文件\n│   │   |   ├── app                             // 基础工程图片\n│   │   |   ├── 404_img                         // 404图片\n│   │   ├── js\n│   │   |   ├── utils                           //工具类js\n│   │   |   |   ├── get-url.js                  //根据设置获取请求url\n│   │   |   |   ├── premission.js               //权限控制\n│   │   |   |   ├── request.js                  //拦截器\n│   │   |   |   ├── validate.js                 //表单校验\n│   │   |   ├── vendor                          //第三方js\n│   │   |   ├── common.js                       //全局js方法\n│   │   |   ├── business-common.js              //业务相关全局js方法\n│   │   ├── sass\n│   │   |   └── common.scss                     // 样式出口文件\n│   │   |   └── vant-ui.scss                    // vant样式\n│   │   |   └── minix.scss                      // 样式配置\n│   │   |   └── transition.scss                 // 动画样式\n│   │   |   └── utils.scss                      // 工具样式\n│   │   |   └── variables.scss                  // 变量文件\n│   ├── components                              // 公共组件\n│   ├── config                                  // 配置文件\n│   |   ├── index.js                            // 环境配置\n│   |   ├── urlMap.js                           // api url配置\n│   ├── filters\n│   |   ├── index.js                            // 过滤器\n│   ├── router\n│   |   ├── app                                 // 基础工程路由\n│   |   ├── example                             // 示例路由\n│   |   ├── index.js                            // 路由配置\n│   ├── store\n│   |   ├── modules                             // 状态模块\n│   |   ├── getters.js                          // 配置getters\n│   |   ├── index.js                            // 引用vuex，创建store\n│   ├── views\n│   |   ├── app                                 // 基础工程页面\n│   |   |   ├── layout                          // layout：导航栏、侧边栏、主窗口等\n│   |   |   ├── login                           // 登录页面\n│   |   |   ├── 404.vue                         // 404页面\n│   |   |   ├── home.vue                        // 首页\n│   |   ├── example                             // 示例页面，不一一列举\n│   ├── App.vue                                 // 页面入口文件\n│   ├── main.js                                 // 程序入口文件，加载各种公共组件\n├── tests                                       // 测试相关文件\n├── .env.development                            // 开发环境配置\n├── .env.production                             // 生产环境配置\n├── .env.staging                                // staging环境配置\n├── .eslintrc.js                                // eslint配置\n├── babel.config.js                             // 转码配置\n├── .prettierrc                                 // prettier配置\n├── jest.config.js                              // 测试配置\n├── package.json                                // 安装包列表文件\n├── postcss.config.js                           // 样式配置\n├── vue.config.js                               // vue工程配置\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);