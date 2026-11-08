---
title: "Apache服务器"
pubDate: 2026-11-08
tags: ["study", "ctf"]
---
Apache是一个免费的web服务器软件，负责监听80端口，接收浏览器发来的http请求，把网页、图片等内容返回给浏览器。

# 特点：
1. 模块化：想用什么功能就开什么模块（mod_rewriteURL重写、mod_sslHTTPS、mod_php跑PHP)
2. 跨平台：linux/windows/mac都能跑
3. 支持虚拟主机：一台服务器放多个网站
4. 经典组合：LAMP=Linux+Apache+MySQL+PHP,Web入门标配
5. 配置：主配置文件httpd.conf,目录配置.htaccess（主配置文件一般只有服务器管理员才能改，改完必须重启Apache新规则才能生效，是写死在服务器里面的配置；而Apache每次收到访问特定目录的请求时都会检查一遍是否有.htaccess）

# 工作流程：
浏览器→发http请求→Apache(监听80端口）→
静态文件（html/png/css):直接读文件返回
PHP 动态文件：交给 PHP 解释器执行，拿到结果再返回浏览器

# .htaccess
Apache的一大特色，是Apache的局部小配置文件

## 作用：
1. 修改文件解析规则：比如 SetHandler application/x-httpd-php，让 .jpg / .xxx 文件被当成 PHP 执行（这就是你这道题的考点！因为它禁止直接访问.php，但可以用 htaccess 把别的后缀解析成 php）
2. 302 重定向
3. 自定义访问权限、禁止某些文件访问
4. 开启伪静态 Rewrite 规则
（注意文件名开头有个点 .htaccess，Linux 下开头带点的文件是隐藏文件，ls 默认看不到，要 ls -a）

## 指令：
SetHandler application/x-httpd-php  
当前目录所有文件，全部交给 php 解析（jpg 也能当 php 跑！）  
AddType application/x-httpd-php .xxx  
自定义后缀当做 php 解析，比如 .jpg .txt	  
AddHandler php8-script .abc  
绑定后缀到 php 处理器，另一种绕过写法  
php_flag engine on/off  
开关 php 解析引擎  
至于.heaccess是否能生效，则要看AllowOverride：none=不检查不读取;all/fileinfo/authconfig/indexes=读取但放行规则不一样

# 常见语法：

## 1.容器块（包裹一组规则）
<VirtualHost *:80> ... </VirtualHost>  
    虚拟主机块，绑定端口+域名，一个站点一套配置  
<Directory "/path"> ... </Directory>  
    专门用来给【文件夹（目录）】单独设置规则。匹配服务器硬盘上的文件夹  
<Location /urlpath> ... </Location>  
    针对访问 URL 路径设置规则，不是本地文件路径。匹配用户浏览器输入的url  
<FilesMatch "\.php$"> ... </FilesMatch>  
    正则匹配文件名，对特定后缀文件控制权限  
<Files "test.txt"> ... </Files>  
    精准匹配单个文件名

## 2.目录 & 首页相关
Options Indexes  
开启目录浏览（没有 index 文件时列出全部文件）  
如果访问一个目录（比如 `whuctf2025.com/test/`），这个目录里**没有 index.html/index.php 这种默认首页文件，Apache 就直接把这个文件夹里所有文件列出来给浏览器看（目录浏览）。indexes只有在完全没有首页文件(index.html/index.php)时才会生效显示目录列表  
Options -Indexes  
关闭目录浏览（默认很多靶场关）  
DirectoryIndex index.html index.php  
访问目录时，自动找首页文件.当我访问一个文件夹（目录）的时候，优先自动去找哪一个文件当做首页返回给浏览器  
AllowOverride All / None  
是否允许目录下 .htaccess 覆盖配置  
Options FollowSymLinks  
    允许 Apache 跟随软链接（符号链接）。简单说：如果目录里有个软链接文件指向别的地方，访问这个链接时 Apache 会去读目标文件。  

## 3.访问控制  
Require all granted  
    允许所有人访问  
Require all denied  
    全部拒绝访问  
Require ip 127.0.0.1  
    只允许指定ip访问  
    虚拟主机配套指令（写vhost必带）  
ServerName xxxx.com  
    这个虚拟主机对应的域名  
ServerAlias www.xxxx.com  
    域名别名，多个域名绑定同一个站点  
DocumentRoot /xxx/xxx/xxx  
    网站根目录（磁盘路径）  
ErrorLog /xxx/error.log  
    错误日志路径  
CustomLog /xxx/access.log  
    访问日志  