# Nginx 配置目录介绍

## 目录概览

```sh
/etc/nginx/
├── conf.d
├── fastcgi.conf
├── fastcgi_params
├── koi-utf
├── koi-win
├── mime.types
├── modules-available
├── modules-enabled
│   ├── 50-mod-http-image-filter.conf -> /usr/share/nginx/modules-available/mod-http-image-filter.conf
│   ├── 50-mod-http-xslt-filter.conf -> /usr/share/nginx/modules-available/mod-http-xslt-filter.conf
│   ├── 50-mod-mail.conf -> /usr/share/nginx/modules-available/mod-mail.conf
│   └── 50-mod-stream.conf -> /usr/share/nginx/modules-available/mod-stream.conf
├── nginx.conf
├── proxy_params
├── scgi_params
├── sites-available
│   └── default
├── sites-enabled
│   └── default -> /etc/nginx/sites-available/default
├── snippets
│   ├── fastcgi-php.conf
│   └── snakeoil.conf
├── uwsgi_params
└── win-utf
```

1. **conf.d/**
   - 这个目录用于存放额外的 Nginx 配置文件，这些文件会自动被包含到主配置文件中。常用于放置特定的站点或模块的配置文件。例如，你可以在这里放置单独的虚拟主机配置文件。

2. **fastcgi.conf**
   - 定义与 FastCGI 协议相关的参数，用于处理动态内容，如 PHP 脚本。这个文件通常包含一些预定义的指令来配置 FastCGI。

3. **fastcgi_params**
   - 另一个与 FastCGI 协议相关的配置文件，定义了一些基本的 FastCGI 参数。这个文件通常会被 `fastcgi.conf` 包含。

4. **koi-utf**
   - 字符集文件，定义了 KOI8-R 到 UTF-8 的转换规则。这个文件通常不需要修改，除非你需要特定的字符集支持。

5. **koi-win**
   - 字符集文件，定义了 KOI8-R 到 Windows-1251 的转换规则。与 `koi-utf` 类似，通常不需要修改。

6. **mime.types**
   - 定义文件扩展名和 MIME 类型的映射表。Nginx 使用这个文件来确定响应头中的 `Content-Type`。例如，`.html` 文件对应 `text/html` MIME 类型。

7. **modules-available/**
   - 存储所有可用的 Nginx 模块配置文件。文件名通常以 `mod-` 开头，表示不同的模块配置。例如：
     - `mod-http-image-filter.conf`：用于处理 HTTP 图像过滤模块的配置。
     - `mod-http-xslt-filter.conf`：用于处理 HTTP XSLT 过滤模块的配置。
     - `mod-mail.conf`：用于处理邮件协议模块的配置。
     - `mod-stream.conf`：用于处理流协议模块的配置。

8. **modules-enabled/**
   - 存储已启用的 Nginx 模块配置文件的符号链接。链接指向 `modules-available` 目录中的文件。这些配置文件会被 Nginx 加载。例如：
     - `50-mod-http-image-filter.conf` -> `/usr/share/nginx/modules-available/mod-http-image-filter.conf`
     - `50-mod-http-xslt-filter.conf` -> `/usr/share/nginx/modules-available/mod-http-xslt-filter.conf`
     - `50-mod-mail.conf` -> `/usr/share/nginx/modules-available/mod-mail.conf`
     - `50-mod-stream.conf` -> `/usr/share/nginx/modules-available/mod-stream.conf`

9. **nginx.conf**
   - Nginx 的主配置文件。这个文件定义全局设置，并包括其他配置文件。所有全局配置都在此文件中定义，如 worker 进程数、全局日志路径等。

10. **proxy_params**
    - 定义代理服务器相关的参数，用于处理反向代理设置。通常包含一些预定义的指令来配置代理服务器。

11. **scgi_params**
    - 定义 SCGI（Simple Common Gateway Interface）协议相关的参数。这个文件包含一些预定义的指令来配置 SCGI。

12. **sites-available/**
    - 存放可用的站点配置文件。每个站点有一个独立的配置文件，但默认不启用。你可以在这个目录中添加多个站点的配置文件。例如：
      - `default`：这是一个默认站点配置文件。

13. **sites-enabled/**
    - 存放已启用的站点配置文件的符号链接。Nginx 只会加载这个目录中的配置文件。启用站点时，通常会在这个目录中创建符号链接。例如：
      - `default` -> `/etc/nginx/sites-available/default`

14. **snippets/**
    - 存储可复用的配置片段，可以在其他配置文件中通过 `include` 指令包含这些片段，以避免配置重复。例如：
      - `fastcgi-php.conf`：常用于 PHP 的 FastCGI 配置片段。
      - `snakeoil.conf`：通常用于自签名证书的 SSL 配置示例。

15. **uwsgi_params**
    - 定义与 uWSGI 协议相关的参数，用于与 uWSGI 应用服务器通信。这个文件包含一些预定义的指令来配置 uWSGI。

16. **win-utf**
    - 字符集文件，定义了 Windows-1251 到 UTF-8 的转换规则。通常不需要修改，除非你需要特定的字符集支持。
