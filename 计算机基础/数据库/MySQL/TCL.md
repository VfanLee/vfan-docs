# TCL

TCL：Transaction Control Language（事务控制语言）

## 1. 事务

一条或多条sql语句组成一个执行单位，一组sql语句要么都执行要么都不执行。

## 2. 事务的特性（ACID）

原子性（Atomic）：一个事务不可再分割，要么都执行要么都不执行。
一致性（Consistency）：一个事务可以使数据从一个一致状态切换到另外一个一致的状态。
隔离性（Isolation）：一个事务的执行不受其他事务的干扰。
持久性（Durability）：一个事务一旦提交，则会永久的改变数据库的数据。

## 3. 事务的创建

**隐式事务**：事务没有明显的开启和结束的标记
比如insert、update、delete语句
**
**显式事务**：事务具有明显的开启和结束的标记（前提：必须先设置自动提交功能为禁用）

```sql
步骤1：开启事务
set autocommit=0;
start transaction;可选的

步骤2：编写事务中的sql语句(select insert update delete)
语句1;
语句2;
...

步骤3：结束事务
commit;提交事务
rollback;回滚事务(truncate不支持事务回滚，操作会持久化到数据库中)

savepoint 节点名;设置保存点

#例：演示savepoint 的使用
SET autocommit=0;
START TRANSACTION;
DELETE FROM account WHERE id=25;
SAVEPOINT a;#设置保存点
DELETE FROM account WHERE id=28;
ROLLBACK TO a;#回滚到保存点
```

## 4. 事务的隔离级别

mysql中 默认 第三个隔离级别 repeatable read
oracle中 默认 第二个隔离级别 read committed

|  | 脏读 | 不可重复读 | 幻读 |
| --- | --- | --- | --- |
| read uncommitted | √ | √ | √ |
| read committed | × | √ | √ |
| repeatable read | × | × | √ |
| serializable | × | × | × |

## 5. 并发事务问题

**脏读**：一个事务读取了其他事务还没有提交的数据，读到的是其他事务“更新”的数据
**不可重复读**：一个事务多次读取，结果不一样
**幻读**：一个事务读取了其他事务还没有提交的数据，只是读到的是 其他事务“插入”的数据
