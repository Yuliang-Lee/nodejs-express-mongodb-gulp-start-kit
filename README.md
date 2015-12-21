## 介绍
这是一个使用了Nodejs、Express、mongodb、gulp的脚手架项目，可用于使用nodejs做服务器的中小型项目快速搭建起项目骨架，可选择开发模式启动和生产模式启动，减少重复工作。

## 环境

* **Nodejs 5.2.0** 不确保在低版本中是否可行
* **NODE_ENV** 项目启动会通过检测`NODE_ENV`选择读取项目内的配置文件还是环境中的`REC_CONFIG`变量指向的位置文件，所以需要首先设置这个变量的值。如果在linux环境中使用，直接运行*bin*目录内的脚本启动不用设置NODE_ENV，脚本会自行处理。

*编译安装node出错看这里：另外在linux中编译安装nodejs4.0以上需要gcc4.8+，常规方法安装的gcc一般都低于这个版本，安装最新的gcc可参考(centos6 编译安装node v4)[https://cnodejs.org/topic/5631db1976eafe2e2aa356a3]。*

## 项目说明

### 获取

通过git把项目克隆到本地目录：

```bash
$ git git@github.com:Yuliang-Lee/nodejs-express-mongodb-gulp-start-kit.git
```

### 启动

#### 生产环境

进入到项目目录下，输入命令(此方法需要先设置环境变量NODE_ENV为production和设置环境变量REC_CONFIG指定一个配置文件路径)

```bash
$ npm run prod
```

或者进入项目`bin`目录运行脚本(不需要设置NODE_ENV变量，需要设置REC_CONFIG)

```bash
$ sh prod-start.sh
```

#### 开发环境

进入到项目目录下，输入命令启动服务器

```bash
$ npm run start
```

or

```bash
bin$ sh dev-start.sh
```

在另外一个命令窗口,进入到项目目录下，输入命令启动gulp监听服务

```bash
$ npm run dev
```

### 目录结构

```
├── app.json                   项目主入口文件
├── bin                        存放脚本文件
├── cluster.js                 使用集群启动服务器
├── config                     存放配置文件
│   └── gulp                   存放gulp的配置文件
├── gulpfile.js                gulp的入口文件
├── helper                     存放项目使用到的一些工具类
├── model                      存放mongoose使用的scheme
├── nodemon.json               nodemon配置文件
├── routes                     存放路由配置
├── src                        存放源码的目录
│   ├── html                   会被编译放到views中
│   ├── js                     会被编译放到static/dist中
│   └── scss                   会被编译放到static/dist中
├── static                     存放静态文件,除了dist子目录,其他用来存放不需要编译的文件
│   ├── css
│   ├── dist
│   ├── favicon.ico
│   ├── js
│   └── vendor
└── views                      视图模板文件
```

### 特点

* 使用Nodejs内置的cluster模块启动应用，使node也能体验到多核的力量。
* 可以使用sass编写更优化的css，也可以写原生css。
* js的编译使用了babel，能把JSX和babel适用的ES6代码编译到ES5版本，能使用很多新特性写js代码。
* 在生产模式下启动会对js和css进行压缩合并，并且会对`src/html/index.html`文件内的`<!-- build-->`注册内容块替换成压缩之后的一个js文件，一般用于合并引用的外部js库。
* 项目适合用来开发普通网站类型项目，不适合用于开发SPA

### 待改进

* 缺少测试
* 缺少错误页面，错误处理
* 使用mongoose管理mongdb舍弃了noSQL灵活的特点，操作mongodb略繁琐。但是带来的是更规范的使用mongodb。
