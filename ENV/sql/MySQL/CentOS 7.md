---
title: CentOS 7
url: https://www.yuque.com/doublefan-tdo7d/agr25e/lkt74p0t81ophxpu
---

<a name="fnyjB"></a>

## 准备工作

- **访问MySQL官网下载社区版**

![](..\\..\\..\assets\lkt74p0t81ophxpu\1621156809387-4dc2b3b0-32f9-4f58-8477-a3a9289e5066.png)

- **选择 MySQL Yum Repository**

![](..\\..\\..\assets\lkt74p0t81ophxpu\1621156809494-be43f794-481c-4cc4-a8ae-8d5d59333faa.png)

- **可参考使用文档【详细的安装教程】**

![](..\\..\\..\assets\lkt74p0t81ophxpu\1621156809506-60b13524-2c11-4177-875f-aac34dec7317.png)

- **再回到下载页面，选择对应版本**

![](..\\..\\..\assets\lkt74p0t81ophxpu\1621156809546-3311a743-6f84-4146-baa2-217da1b521e7.png)

- **复制下载链接**

![](..\\..\\..\assets\lkt74p0t81ophxpu\1621156809454-cb354e17-9d53-4d2d-b969-7dc3dbce5870.png) <a name="s5zz0"></a>

## 安装MySQL的YUM存储库

```bash
# 通过yum下载wget命令
yum -y install wget

# 通过wget下载MySql存储库
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
```

<a name="EJFOe"></a>

## 安装下载好的rpm包

```bash
# 安装rpm包
rpm -Uvh mysql80-community-release-el7-3.noarch.rpm

==================== 拓 展 ====================
# 查看rpm包
# rpm -qa | grep 内容

# 卸载rpm包
# rpm -e --nodeps rpm名称
```

<a name="44OFG"></a>

## 选择发行版本

- **因为默认安装的是8.0版本的Mysql，修改为5.7版本**

```bash
# 查看默认的发行版本
yum repolist all | grep mysql
# 编辑/etc/yum.repos.d/mysql-community.repo文件，修改发行版本
vim /etc/yum.repos.d/mysql-community.repo
```

![](..\\..\\..\assets\lkt74p0t81ophxpu\1621156809456-8c19d0bb-ef1b-43f4-9b41-d23372bba867.png)

- **保存后查看**

```bash
yum repolist all | grep mysql
```

- **效果如下**

![](..\\..\\..\assets\lkt74p0t81ophxpu\1621156809495-6f7fc1ca-42e2-45c5-8259-79042232ac2e.png) <a name="Z6Hja"></a>

## 安装Mysql社区版服务

```bash
yum install -y mysql-community-server
```

<a name="8PDdE"></a>

## 安装成功后启动Mysql服务，并连接

```bash
# 启动Mysql服务
systemctl start mysqld.service
# 查看初始化密码
grep 'temporary password' /var/log/mysqld.log
# 连接Mysql服务
mysql -u root -p
# 紧接着输入查询到的初始化密码
# 修改密码，要求必须携带大小写字母，数字，特殊符号
ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';
```

<a name="50YXL"></a>

## 开启远程连接

- **设置远程连接的登录名和密码**

```bash
mysql> GRANT ALL PRIVILEGES ON *.* TO '登录名'@'%'IDENTIFIED BY '密码' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
```

- **图形化工具测试**

![](..\\..\\..\assets\lkt74p0t81ophxpu\1621156809412-01375d8a-2c1d-48e7-848b-d443aa100898.png) <a name="RFjm5"></a>

## 忘记密码怎么办？

<a name="QaV5I"></a>

### `my.cnf` 中添加配置

```bash
vi /etc/my.cnf
#在[mysql]下添加配置
skip-grant-tables
```

<a name="hJn5g"></a>

### 重启 mysql 服务

```bash
systemctl restart mysqld.service
```

<a name="fHKfB"></a>

### 直接输入 mysql

```bash
mysql
```

<a name="gNecB"></a>

### 选择 mysql 数据库

```bash
mysql> user mysql;
```

<a name="OzVjB"></a>

### 修改密码

```bash
mysql> update user set authentication_string=password('新密码') where user='root';
```

<a name="5odAt"></a>

### 之后退出mysql，将之前在 `my.cnf` 添加的配置去掉，重启服务，密码就重置成功了
