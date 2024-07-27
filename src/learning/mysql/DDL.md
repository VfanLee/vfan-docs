# DDL

DDL：Data Definition Language（数据定义语言）

## 1. 库的管理

### 1.1. 创建自定义数据库

```sql
create database 【if not exists】 库名 【character set 字符集名】;
```

### 1.2. 查看所有数据库

```sql
show databases;
```

### 1.3. 查看创建数据库时的基本信息

```sql
show create database 库名;
```

### 1.4. 使用指定数据库

```sql
use 库名;
```

### 1.5. 查看当前使用的数据库

```sql
select database();
```

### 1.6. 修改数据库的字符集

```sql
alter database 库名 character set 字符集名;
```

### 1.7. 删除库

```sql
drop database 【if exists】 库名;
```

## 2. 表的管理

### 2.1. 创建自定义表

```sql
create table 【if not exists】 表名(
    列名 列的类型 【(长度) 约束】,
    列名 列的类型 【(长度) 约束】,
    ...
    列名 列的类型 【(长度) 约束】 
);
```

### 2.2. 常见的数据类型

#### 2.2.1. 整型

**分类**：

- tinyint
- smallint
- mediumint
- int/integer
- bigint

**特点**：

1. 如果不设置无符号还是有符号，默认是有符号，如果想设置无符号，需要添加unsigned关键字
2. 如果插入的数值超出了整型的范围,会报out of range异常，并且插入临界值
3. 如果不设置长度，会有默认的长度
4. 长度代表了显示的最大宽度，如果不够会用0在左边填充，但必须搭配zerofill使用！

#### 2.2.2. 小数

**分类**：

- 浮点型
  - float(M,D)
  - double(M,D)

- 定点型
  - dec(M,D)
  - decimal(M,D)

**特点**：

①  
M：整数部位+小数部位
D：小数部位
如果超过范围，则插入临界值  

②  
M和D都可以省略
如果是decimal，则M默认为10，D默认为0
如果是float和double，则会根据插入的数值的精度来决定精度

③  
定点型的精确度较高，如果要求插入数值的精度较高如货币运算等则考虑使用

#### 2.2.3. 字符型

**分类**：

较短的文本：char，varchar
其他：

- binary和varbinary用于保存较短的二进制
- enum用于保存枚举
- set用于保存集合

较长的文本：text，blob(较大的二进制)

**特点**：

| 写法    | M的意思    | 特点                            | 空间的耗费     |
| ------- | ---------- | ------------------------------- | -------------- |
| char    | char(M)    | 最大的字符数，可以省略，默认为1 | 固定长度的字符 |
| varchar | varchar(M) | 最大的字符数，不可以省略        | 可变长度的字符 |

#### 2.2.4. 日期型

**分类**：
date只保存日期
time 只保存时间
year只保存年
datetime保存日期+时间
timestamp保存日期+时间

**特点**：

|           | 字节 | 范围       | 时区等的影响 |
| --------- | ---- | ---------- | ------------ |
| datetime  | 8    | 1000——9999 | 不受         |
| timestamp | 4    | 1970-2038  | 受           |

### 2.3. 常见约束

一种限制，用于限制表中的数据，为了保证表中的数据的准确和可靠性

#### 2.3.1. 六大约束

**NOT NULL**：非空，用于保证该字段的值不能为空

- 比如姓名、学号等

**DEFAULT**：默认，用于保证该字段有默认值

- 比如性别

**PRIMARY KEY**:主键，用于保证该字段的值具有唯一性，并且非空

- 比如学号、员工编号等

**UNIQUE**：唯一，用于保证该字段的值具有唯一性，可以为空

- 比如座位号

**CHECK**：检查约束【mysql中不支持】

- 比如年龄、性别

**FOREIGN KEY**：外键，用于限制两个表的关系，用于保证该字段的值必须来自于主表的关联列的值。在从表添加外键约束，用于引用主表中某列的值。

- 比如学生表的专业编号，员工表的部门编号，员工表的工种编号。

#### 2.3.2. 添加约束的时机

1.创建表时
2.修改表时

#### 2.3.3. 约束的添加分类

**列级约束**：六大约束语法上都支持，但 **外键约束没有效果**。

- 语法：直接在字段名和类型后面追加 约束类型即可。

**表级约束**：**非空、默认不支持**。

- 语法：在各个字段的最下面 ==》 【constraint 约束名】 约束类型(字段名)

```sql
#一、创建表时添加约束
create table 表名(
	字段名 字段类型 列级约束,
	字段名 字段类型,
	表级约束
);

create table if not exists major(
	id int primary key,
	majorName varchar(20)
);

#例：表级约束(外键没有效果)
create table stuinfo(
	id int primary key,#主键
    stuName varchar(20) not null,#非空
    seat int unique,#唯一
    age int default 18#默认约束
);

#例：列级约束(非空和默认不支持)
create table if not exists stuinfo(
	id int,
	stuname varchar(20),
	gender char(1),
	seat int,
	age int,
	majorid int,
	
	constraint pk primary key(id),#主键
	constraint uq unique(seat),#唯一键
	constraint fk_stuinfo_major foreign key(majorid) references major(id)#外键
);

#通用的写法：★
create table if not exists stuinfo(
	id int primary key,
	stuname varchar(20) not null,
	sex char(1),
	age int default 18,
	seat int unique,
	majorid int,
    
	constraint fk_stuinfo_major foreign key(majorid) references major(id)
);

#二、修改表时添加约束
#1、添加列级约束
alter table 表名 modify column 字段名 字段类型 新约束;

#2、添加表级约束
alter table 表名 add 【constraint 约束名】 约束类型(字段名) 【外键的引用】;

#三、修改表时删除约束
#例1.删除非空约束
alter table stuinfo modify column stuname varchar(20) null;

#例2.删除默认约束
alter table stuinfo modify column age int;
```

#### 2.3.4. 主键和唯一的对比

|      | 保证唯一性 | 是否允许为空      | 一个表中可以有多个键 | 是否允许组合                              |
| ---- | ---------- | ----------------- | -------------------- | ----------------------------------------- |
| 主键 | √          | ×                 | 至多有一个主键       | 如：primary key(id，name)，允许，但不推荐 |
| 唯一 | √          | √（只能一个为空） | 可以有多个唯一键     | 如：unique(id，name)，允许，但不推荐      |

**外键**：

1. 要求在从表设置外键关系。
2. 从表的外键列的类型和主表的关联列的类型要求一致或兼容，名称无要求。
3. **主表的关联列必须是一个key**（一般是主键或唯一）。
4. 插入数据时，先插入主表，再插入从表。
5. 删除数据时，先删除从表，再删除主表。

### 2.4. 标识列（自增长列）

含义：可以不用手动的插入值，系统提供默认的序列值
特点：

1. 标识列必须和主键搭配吗？不一定，但 **要求是一个key**。
2. 一个表 **至多一个** 标识列。
3. 标识列的类型只能是 **数值型**。
4. 标识列可以通过 `set auto_increment_increment=3` 设置步长。
5. 可以通过手动插入值，来达到设置起始值的效果。

```sql
auto_increment

例：
create table tab_identity(
	id int unique auto_increment,
	NAME varchar,
);

# 设置步长为3
set auto_increment_increment=3;
```

### 2.5. 查看所有表

```sql
show tables;
```

### 2.6. 查看表结构

```sql
desc 表名;
```

### 2.7. 查看表中的所有索引，包括主键、外键、唯一

```sql
show index from 表名;
```

### 2.8. 复制表的结构

```sql
create table 表名 like 旧表;
```

### 2.9. 复制表的结构+数据

```sql
create table 表名 
select 查询列表 from 旧表【where 筛选】;
```

### 2.10. 表的修改

```sql
/*
  add：添加列
  modify：修改列的类型或约束
  change：修改列名
  drop：删除列
*/
alter table 表名  add|drop|modify|change  column 列名 【列类型 约束】;

alter table 表名 add 【constraint 约束名】 约束类型(字段名) 【外键的引用】;

#修改表名
alter table 表名 rename to 新表名;
```

### 2.11. 删除表

```sql
drop table 【if exists】 表名;

truncate table 【if exists】 表名;
```
