# 项目 DIY 官网

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

~~~

project                应用根目录
├─ backstage           后台前端页面代码
│  └─ ...              
├─ reception_desk      前台前端页面代码
│  ├─ mobile...   手机尺寸风格页面
│  └─ ...              
├─ back_end        php后端应用（接口）
│  └─ ...              
├─ README.md          自述文件
└─ ...

~~~

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
                127.0.0.1    admin.prj_diy_website.com
                127.0.0.1    mobile.prj_diy_website.com
                127.0.0.1    img.prj_diy_website.com
            ~~~

#### b、nginx配置说明

+ nginx 配置说明

+ 配置

~~~

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

+ 后台账号
    * 超级管理员： admin   密码： 123456

## 四、开发说明

### 0、命名规范

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

### 1、nginx转发配置调试技巧

+ a、设置nginx日志格式

    ~~~
        http {
            #...其他配置...
            log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                              '$status $body_bytes_sent "$http_referer" '
                              '"$http_user_agent" "$http_x_forwarded_for"';
             #...其他配置...
             }


    ~~~

+ b、在相应的服务配置里开启
    ~~~
         #access_log  logs/XXXX_access.log  main;
    ~~~
    
+ 参考资料
    * [文章18 ：Nginx中http请求的处理过程](https://blog.csdn.net/yankai0219/article/details/8220695)
    * [搭建nginx反向代理用做内网域名转发](http://www.ttlsa.com/nginx/use-nginx-proxy/)
    * [Nginx 记录请求分发日志](https://blog.csdn.net/lkx94/article/details/54575225)

### 2、数据库调试技巧

+ 开启数据库日志输出
  ~~~
    set global general_log="ON";
    show variables like "general_log%";
    查看配置： SHOW VARIABLES LIKE "general_log%"; 
    开启日志 ： SET GLOBAL general_log = 'ON';
  ~~~

## 五、任务或问题记录

