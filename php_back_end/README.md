# 项目-商城（后端代码的自述文件）

## 一、概述

###  1、 编写目的

+  为项目的系统的开发设计的依据与指导。
+  为参与该项目的编程人员提供依据；
+  为修改、维护提供条件；
+  项目负责人将按计划书的要求布置和控制开发工作全过程；
+  项目质量保证组将按此计划书做阶段性和总结性的质量验证和确认。

### 2、 读者对象

+  项目开发人员，特别是编程人员；
+  软件维护人员；
+  技术管理人员；
+  执行软件质量保证计划的专门人员；
+  参与本项目开发进程各阶段验证、确认以及负责为最后项目验收、鉴定提供相应报告的有关人员。
+  合作各方有关部门的负责人；项目组负责人和全体参加人员。

### 3、 注意事项

+  权限审查：此文档仅供技术部功能组内部使用。
+  保存备份：此文档仅在服务器上作修改，不允许本地备份。
+  该文档采用 markdown 编写规范，建议使用markdownPad或相关编辑工具查看和修改。


## 二、 项目说明

### 1、概述

### 2、


## 三、源码说明

### 1、源代码说明

+ 项目采用前后端分离

### 2、 目录结构


+ 总体目录结构

~~~

project                应用根目录
├─ backstage           后台前端页面代码
│  └─ ...              
├─ reception_desk      前台前端页面代码
│  ├─ mobile...          手机尺寸风格页面
│  └─ PC...              PC电脑尺寸风格页面
├─ php_back_end        php后端
│  └─ ...              
├─ README.md          自述文件
└─ ...

~~~

+ 后端部分目录结构



~~~
project  应用部署目录
├─application               应用目录（可设置）
│  ├─common                 公共模块目录（可更改）
│  ├─index                  模块目录(可更改)
│  │  ├─config.php          模块配置文件
│  │  ├─common.php          模块函数文件
│  │  ├─controller          控制器目录
│  │  ├─model               模型目录
│  │  ├─view                视图目录
│  │  └─ ...                更多类库目录
│  ├─command.php            命令行工具配置文件
│  ├─common.php             应用公共（函数）文件
│  ├─config.php             应用（公共）配置文件
│  ├─database.php           数据库配置文件
│  ├─tags.php               应用行为扩展定义文件
│  └─route.php              路由配置文件
├─extend                    扩展类库目录（可定义）
├─public                    WEB 部署目录（对外访问目录）
│  ├─static                 静态资源存放目录(css,js,image)
│  ├─index.php              应用入口文件
│  ├─router.php             快速测试文件
│  └─.htaccess              用于 apache 的重写
├─runtime                   应用的运行时目录（可写，可设置）
├─vendor                    第三方类库目录（Composer）
├─thinkphp                  框架系统目录
│  ├─lang                   语言包目录
│  ├─library                框架核心类库目录
│  │  ├─think               Think 类库包目录
│  │  └─traits              系统 Traits 目录
│  ├─tpl                    系统模板目录
│  ├─.htaccess              用于 apache 的重写
│  ├─.travis.yml            CI 定义文件
│  ├─base.php               基础定义文件
│  ├─composer.json          composer 定义文件
│  ├─console.php            控制台入口文件
│  ├─convention.php         惯例配置文件
│  ├─helper.php             助手函数文件（可选）
│  ├─LICENSE.txt            授权说明文件
│  ├─phpunit.xml            单元测试配置文件
│  ├─README.md              README 文件
│  └─start.php              框架引导文件
├─build.php                 自动生成定义文件（参考）
├─composer.json             composer 定义文件
├─LICENSE.txt               授权说明文件
├─think                     命令行入口文件
├─DevelopmentTutorial.md    开发教程和开发实例记录
├─DevelopmentLog.md         开发日志
├─prj_shop.sql              SQL数据库文件
└─README.md                 自述文件
~~~

> + 框架版本：thinkphp5.0.6
> + 详细开发文档参考 [ThinkPHP5完全开发手册](http://www.kancloud.cn/manual/thinkphp5)

### 1、命名规范

遵循PSR-2命名规范和PSR-4自动加载规范，并且注意如下规范：

+ 目录和文件
    *   目录不强制规范，驼峰和小写+下划线模式均支持；
    *   类库、函数文件统一以`.php`为后缀；
    *   类的文件名均以命名空间定义，并且命名空间的路径和类库文件所在路径一致；
    *   类名和类文件名保持一致，统一采用驼峰法命名（首字母大写）；



+ 函数和类、属性命名

    *   类的命名采用驼峰法，并且首字母大写，例如 `User`、`UserType`，默认不需要添加后缀，例如`UserController`应该直接命名为`User`；
    *   函数的命名使用小写字母和下划线（小写字母开头）的方式，例如 `get_client_ip`
    *   方法的命名使用驼峰法，并且首字母小写，例如 `getUserName`
    *   属性的命名使用驼峰法，并且首字母小写，例如 `tableName`、`instance`
    *   以双下划线“__”打头的函数或方法作为魔法方法，例如 `__call` 和 `__autoload`


+ 常量和配置
    *   常量以大写字母和下划线命名，例如 `APP_PATH`和 `THINK_PATH`；
    *   配置参数以小写字母和下划线命名，例如 `url_route_on` 和`url_convert`；


+ 数据表和字段
    *   数据表和字段采用小写加下划线方式命名，并注意字段名不要以下划线开头，例如 `think_user` 表和 `user_name`字段，不建议使用驼峰和中文作为数据表字段命名。


### 3、 运行环境

+ 运行环境：
    * lampp或wampp
    * nginx
    * mysql或MariaDB

### 4、 部署说明

#### a、配置总纲

+ (1)、用nginx当前台前端、后台后端的web服务器，
+ (2)、使用nginx的转发代理功能转发请求到后端
    * 所需条件：
        + 1、域名（前台域名、后台域名）---本地配置修改host
            * 本地开发的重定向配置（windows配置文件C:\Windows\System32\drivers\etc\HOSTS）
            ~~~
                127.0.0.1    api.prj_diy_website.com
                127.0.0.1    admin.prj_sprj_diy_websitehop.com
                127.0.0.1    mobile.prj_diy_website.com
                127.0.0.1    img.prj_diy_website.com
            ~~~

#### b、nginx配置说明

+ nginx 配置说明

+ 配置例子

~~~
    ## 项目 后端服务端
    server {
        listen       80;
        server_name  api.prj_diy_website.com;

        #charset koi8-r;

        access_log  logs/tp5_prj_shop_access.log  main;
            root   "C:/MyWorkSpace/GitHub_Prj/prj_diy_website/php_back_end/public";
        location / {
            index  index.html index.htm index.php l.php;
           autoindex  off;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;


        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        location ~ \.php(.*)$  {
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param  PATH_INFO  $fastcgi_path_info;
            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include        fastcgi_params;
        }

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


~~~

#### c、PHP环境配置说明


#### d、数据库配置说明

+ 建议版本： MySQL5.8及以上 或MariaDB
+ 字符集：   utf8--UTF-8 Unicode
+ 排序规则   utf8_general_ci

> 环境要求
> + PHP >= 5.4.0
> + PDO PHP Extension
> + MBstring PHP Extension
> + CURL PHP Extension




## 四、参考资料

+ 数据库表结构设计（登录部分）
    * [浅谈数据库用户表结构设计，第三方登录](https://www.cnblogs.com/nuanxin/p/6215237.html)
    * [设计一个可扩展的用户登录系统（第三方登录）](http://caimx.iteye.com/blog/2286568)
    * [支持多种登录方式的数据表设计](https://blog.6ag.cn/1619.html)


## 五、开发日志

+ 初始配置
    * 开启调试配置
        + 'app_debug'         => true,      // 设置开启调试模式
        + 'app_trace'         => true,       // 应用Trace
    * 开始强制模式路由
        + 'url_param_type'    =>  1,    // 按照顺序解析变量
        + 'url_route_on'      =>  true,
        + 'url_route_must'    =>  true,
    * 使用方法
        + 访问url(地址)： http://域名或IP:端口/index.php/路由
        > 这种方式下面必须严格给每一个访问地址定义路由规则（包括首页），否则将抛出异常。首页的路由规则采用/定义即可
    * 参考资料
        + [ThinkPHP5.0完全开发手册（路由模式）](https://www.kancloud.cn/manual/thinkphp5/118019)
    * 该部分版本：
        + 新增 2018-06-26 17:52:03

+ 根据注释生成api文档模块（makeapidoc）
    * composer安装mumbaicat/makeapidoc
        + 安装命令：在应用根目录下面执行 composer require mumbaicat/makeapidoc "1.6"
        + 更新命令：在应用根目录下面执行 composer update  mumbaicat/makeapidoc "1.6"
        + 移除依赖：在应用根目录下面执行 composer remove mumbaicat/makeapidoc （这只是删除了依赖关系，不会自动加载，但其依赖包还在vender文件夹里，可手动删除）
        + 使用步骤：
            * （1）、在项目发布目录（Tp5 在 ./public下）新建 doc_api.php文件，文件内容如下：
                ~~~
                    <?php
                    // +----------------------------------------------------------------------
                    // | Description: 基础类，Api文档类
                    // +----------------------------------------------------------------------
                    // | Author: 
                    // +----------------------------------------------------------------------
                    require __DIR__ . '/../vendor/mumbaicat/makeapidoc/src/ApiDoc.php'; // 引入api文档生成类文件
                    use mumbaicat\makeapidoc\ApiDoc; // 声明类
                    $prj_name = 'api2';
                    $doc = new ApiDoc('../application'); //参数1是代码目录，参数2是保存路径，参数2默认是当前路径。
                    // dump($doc); exit();
                    $doc->setName($prj_name);           //设置项目名称，不写此行默认是api，生成 项目名称.html 的文件，注意保存路径下是否有同名的文件，会被覆盖。
                    $doc->make();                        //生成
                    echo "生成完毕！访问地址: <a href='http://".$_SERVER['HTTP_HOST'].'/'.$prj_name.'.html'."'>http://".$_SERVER['HTTP_HOST'].'/'.$prj_name.'.html</a>';
                ~~~
            * （2）、到控制器代码中，添加注释，格式如下：
                ~~~
                    /**
                     * 添加数据
                     * api POST http://域名或IP：端口/index.php/index/index/insert
                     * @param string $name 姓名
                     * @param string $age 年龄
                     * @return inetger $code 状态码
                     */
                ~~~
            * （3）、域名或IP地址/doc_api.php,就会在根目录下生成一个api2.html文件
            * （4）、访问该生成tml文件即可
    * 参考资料：
        + [php注释自动生成api文档 v1.6]( https://github.com/mumbaicat/makeapidoc )
    * 该部分版本：
        + 新增 2018-06-8 14:53:45
        + 修改 2018-06-11 14:54:06



## 五、任务或问题记录


