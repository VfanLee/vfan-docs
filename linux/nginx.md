# nginx

## ssl 配置

```conf
server {
    # ssl 使用443端口
    listen       443 ssl;
    # ssl 证书绑定的域名
    server_name  liyuanfan.me;

        # 公钥
        ssl_certificate      /root/cert/liyuanfan.me.cer;
    # 私钥
    ssl_certificate_key  /root/cert/liyuanfan.me.key;
    # 启用 SSL session 缓存
    ssl_session_cache    shared:SSL:1m;
    # 缓存 SSL 握手产生的参数和加密密钥的时长
        ssl_session_timeout  5m;
        # 使用的加密套件的类型
        ssl_ciphers HIGH:!aNULL:!MD5;
        # 使用的 TLS 协议的类型
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        # 加密套件优先选择服务器的加密套件
        ssl_prefer_server_ciphers  on;
    
    location / {
        root html;
        index index.html;
    }
}
```
