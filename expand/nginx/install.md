# Docker 安装 nginx

1. 创建 nginx 目录，并赋予权限。

    ```sh
    mkdir -p /app/nginx
    chmod -R 777 /app/nginx
    ```

2. 申请证书。

    参考：[申请 SSL 证书](申请证书)

    ```sh
    mkdir -p /app/nginx/certs
    # 公钥
    cd /app/nginx/certs && vi cert.pem
    # 私钥
    cd /app/nginx/certs && vi key.pem
    ```

3. 编写 nginx 配置文件。

    - 参考：[nginx.conf 模板](/expand//nginx/template/nginx.conf)
    - 参考：[代理静态页面](/expand//nginx/template/代理静态页.conf)
    - 参考：[反向代理](/expand//nginx/template/反向代理.conf)
    - 参考：[重定向](/expand//nginx/template/重定向.conf)

4. 部署容器

    [Nginx 镜像](https://hub.docker.com/_/nginx)

    ```sh
    docker network create nginx-network
    docker container run -d \
                         --name nginx-container \
                         --network nginx-network \
                         --publish 80:80 \
                         --publish 443:443 \
                         --volume /app/nginx/nginx.conf:/etc/nginx/nginx.conf \
                         --volume /app/nginx/conf.d:/etc/nginx/conf.d \
                         --volume /app/nginx/html:/usr/share/nginx/html \
                         --volume /app/nginx/logs:/var/log/nginx \
                         --volume /app/nginx/certs:/etc/nginx/certs \
                         nginx:latest
    ```
