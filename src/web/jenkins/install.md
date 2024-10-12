# 安装

## Docker 安装 Jenkins

[Jenkins 镜像](https://hub.docker.com/r/jenkins/jenkins)

1. 创建 Jenkins 目录，并赋予权限。

    ```sh
    mkdir /app/jenkins_home
    chmod -R 777 /app/jenkins_home
    ```

2. 拉取并创建容器。

    ```sh
    docker network create jenkins-network
    docker container run -d \
                         --name jenkins-container \
                         -p 8080:8080 \
                         --network jenkins-network \
                         -v /app/jenkins_home:/var/jenkins_home \
                         jenkins/jenkins:latest
    ```

3. 获取管理员密码。

    ```sh
    cat /app/jenkins_home/initialAdminPassword
    # or
    docker exec jenkins-container cat /var/jenkins_home/secrets/initialAdminPassword
    ```

4. 后续根据提示下一步即可。
