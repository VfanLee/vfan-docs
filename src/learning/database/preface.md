# 前言

数据库根据 数据存储 和 管理方式，可以分为两大类：

- 关系型数据库（RDBMS - Relational Database Management System）
- 非关系型数据库（NoSQL - Not Only SQL Database）

## 关系型数据库

### 特点

- 表格结构：数据以行和列的形式存储在表格中，表与表之间通过外键建立关联。
- 严格的模式：数据表有固定的模式（Schema），每列的数据类型需要提前定义。
- SQL 查询：使用结构化查询语言（SQL）进行数据的插入、更新、删除和查询操作。
- 事务支持：关系型数据库通常支持 ACID（Atomicity、Consistency、Isolation、Durability）事务特性，确保数据一致性和可靠性。
- 扩展性：通常垂直扩展（Scale-up），通过增加服务器资源（如 CPU、内存）来提升性能。

### 常见的关系型数据库

- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server
- SQLite

### 适用场景

- 结构化数据管理：如财务系统、订单管理系统等。
- 需要事务支持的场景：如银行系统，电商交易等。

## 非关系型数据库

### 特点

- 灵活的模式：NoSQL 数据库没有固定的模式，可以存储不同结构的数据。
- 多种数据模型：支持键值对、文档、列族、图等多种数据模型。
- 高可扩展性：通常水平扩展（Scale-out），通过增加节点来处理大量的数据和高并发的请求。
- 灵活性：适合快速变化的需求，数据结构可以根据需要随时调整。

### NoSQL 的主要类型

1. 键值存储 (Key-Value Stores)：
   - 数据以键值对的形式存储，查询非常快速。
   - 代表数据库：Redis, DynamoDB

2. 文档存储 (Document Stores)：
   - 数据以文档（通常是 JSON、BSON）的形式存储，适合存储结构化和半结构化数据。
   - 代表数据库：MongoDB, CouchDB

3. 列族存储 (Column-Family Stores)：
   - 数据以列族的形式存储，适合处理大量的分布式数据。
   - 代表数据库：Cassandra, HBase

4. 图数据库 (Graph Databases)：
   - 数据以节点和边的形式存储，适合处理关系复杂的数据。
   - 代表数据库：Neo4j, JanusGraph

### 适用场景

- 非结构化或半结构化数据管理：如社交媒体、内容管理系统等。
- 高并发、海量数据场景：如大数据分析、实时数据处理等。
- 需要快速迭代和灵活数据模型的场景：如互联网应用、移动应用等。
