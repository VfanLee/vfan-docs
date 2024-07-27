# Java 开发环境

## 编辑器

- [IDEA](https://www.jetbrains.com/zh-cn/idea/download/?section=windows)

## 安装 JDK

1. 下载 [JDK](https://www.oracle.com/java/technologies/downloads/)

    建议下载压缩包然后自行解压，统一管理，方便后续通过修改环境变量来切换版本。

2. 配置环境变量：

    - `JAVA_HOME` -> `D:\Software\Java\jdk-1.8`
    - `Path` 中添加 `%JAVA_HOME%\bin`

3. 通过查看版本来检查是否配置成功：

    ```sh
    java -version
    ```

## Tomcat

1. 下载 [Tomcat](https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.100/bin/)

    建议下载压缩包然后自行解压，统一管理，方便后续通过修改环境变量来切换版本。

2. 配置环境变量：

    - `CATALINA_HOME` -> `D:\Software\apache-tomcat-8.5.100`
    - `Path` 中添加 `%CATALINA_HOME%\bin`

3. 通过查看版本来检查是否配置成功：

    ```sh
    catalina.bat version
    ```

## Maven

1. 下载 [Maven](https://maven.apache.org/download.cgi)

    建议下载压缩包然后自行解压，统一管理，方便后续通过修改环境变量来切换版本。

2. 配置环境变量：

    - `MAVEN_HOME` -> `D:\Software\apache-maven-3.9.8`
    - `Path` 中添加 `%MAVEN_HOME%\bin`

3. 通过查看版本来检查是否配置成功：

    ```sh
    mvn --version
    ```

4. 配置镜像：

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>

    <settings>
        <mirrors>
            <mirror>
                <id>alimaven</id>
                <name>aliyun maven</name>
                <mirrorOf>central</mirrorOf>
                <url>https://maven.aliyun.com/repository/central</url>
            </mirror>
        </mirrors>
    </settings>
    ```

    ::: tip
    IDEA 中 maven 的默认路径：

    - User settings file: `~/.m2/settings.xml`
    - Local repository: `~/.m2/repository`
    :::

## Linux

```sh
# 安装 jdk
apt install -y openjdk-8-jdk
```
