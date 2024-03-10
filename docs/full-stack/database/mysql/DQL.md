# DQL

DQL：Data Query Language（数据查询语言 DQL）

查询顺序归纳总结：

```sql
select 查询列表             #七
from 表1 别名               #一
连接类型 join 表2           #二
on 连接条件                 #三
where 筛选                  #四
group by 分组列表           #五
having 筛选                 #六
order by 排序列表           #八
limit 起始条目索引，条目数;  #九
```

## 1. 基本查询（基本格式）

```sql
select 查询列表
from 表名;
```

### 1.1. 查询单个或多个字段

```sql
select 字段名【,字段名...】 
from 表名;

# 查询所有字段，效率低！
select * from 表名;
```

### 1.2. 查询常量

```sql
select 常量值;

#例：
select 100;
select "tom";
```

注意：**字符型** 和 **日期型** 的常量值必须用 **单引号** 引起来，数值型不需要

### 1.3. 查询表达式

```sql
select 表达式;
 
#例:
select 98%2;
```

### 1.4. 查询函数

```sql
select 函数名(实参列表);

#例：
select version();
```

### 1.5. 起别名

```sql
#方式一：使用as
select 字段名 as 别名 from 表名;

#例：
SELECT 100%98 AS 结果;
SELECT last_name AS 姓,first_name AS 名 FROM employees;

#方式二：使用空格
select 字段名 别名 from 表名;

#例：
SELECT last_name 姓,first_name 名 FROM employees;
```

### 1.6. 去重

```sql
select distinct 字段名 from 表名;

#例：查询员工表中涉及到的所有的部门编号
SELECT DISTINCT department_id FROM employees;
```

### 1.7. +号的作用（运算符）

```sql
select 100+90;
#两个操作数都为数值型，则做加法运算

select '123'+90;
#只要其中一方为字符型，试图将字符型数值转换成数值型
#如果转换成功，则继续做加法运算

select 'john'+90;
#如果转换失败，则将字符型数值转换成0

select null+10;
#只要其中一方为null，则结果肯定为null
```

## 2. 条件查询（基本格式）

```sql
select 查询列表 
from 表名 
where 筛选条件
```

### 2.1. 按条件表达式筛选

简单条件运算符：>  <  =  !=  <>  >=  <= <=>

```sql
#例：查询工资>12000的员工信息
select * 
from employees 
where salary>12000;

# != <> 建议使用<>
#例：查询部门编号不等于90号的员工名和部门编号
select last_name,department_id
from employees
where department_id<>90; 

# <=> 安全登录
#例：查询没有奖金的员工名和奖金率
select last_name,commission_pct
from employees
where commission_pct <=> null;

#例：查询工资为12000的员工信息
select * 
from employees
where salary <=> 12000;
```

### 2.2. 按逻辑表达式筛选

逻辑运算符：

&& 和 and：两个条件都为true，结果为true，反之为false

|| 或 or： 只要有一个条件为true，结果为true，反之为false

! 或 not： 如果连接的条件本身为false，结果为true，反之为false

```sql
#例：查询工资在10000到20000之间的员工名、工资以及奖金
select last_name,salary,commission_pct
from employees
where salary>=10000 and salary<=20000;

#例：查询部门编号不是在90到110之间，或者工资高于15000的员工信息
select *
from employees
where not(department_id>=90 and department_id<=110) or salary>15000;
```

### 2.3. 模糊查询

#### 2.3.1. like		一般和通配符搭配使用。

通配符：

- % 任意多个字符，包含0个字符
- _ 任意单个字符

```sql
#例：查询员工名中包含字符a的员工信息
select *
from employees
where last_name like '%a%';

#例：查询员工名中第三个字符为e，第五个字符为a的员工名和工资
select last_name,salary
from employees
where last_name like '__e_a%';

#例：查询员工名中第二个字符为_的员工名
select last_name
from employees
where last_name like '_\_%'; #方式一 直接转义
where last_name like '_$_%' escape '$'; #方式二 手动指定$为转义字符
```

#### 2.3.2. between and

- 使用between and 可以提高语句的简洁度
- 包含临界值
- 两个临界值不要调换顺序

```sql
#例：查询员工编号在100到120之间的员工信息
select *
from employees
where employee_id >= 120 and employee_id<=100;

select *
from employees
where employee_id between 100 and 120;
```

#### 2.3.3. in

- 使用in提高语句简洁度
- in列表的值类型必须一致或兼容
- in列表中不支持通配符

```sql
#例：查询员工的工种编号是 IT_PROG、AD_VP、AD_PRES中的一个员工名和工种编号
select last_name,job_id
from employees
where job_id='IT_PROT' or job_id='AD_VP' or JOB_ID='AD_PRES';

select last_name,job_id
from employees
where job_id in('IT_PROT','AD_VP','AD_PRES');
```

#### 2.3.4. is null / is not null

- =或<>不能用于判断null值
- is null或is not null 可以判断null值

```sql
#例：查询没有奖金的员工名和奖金率
select last_name,commission_pct
from employees
where commission_pct is null;

#例：查询有奖金的员工名和奖金率
select last_name,commission_pct
from employees
where commission_pct is not null;
```

### 2.4. IS NULL 与 <=> 比较

IS NULL：仅仅可以判断NULL值，可读性较高，建议使用。

<=>：既可以判断NULL值，又可以判断普通的数值，可读性较低。

## 3. 排序查询（基本格式）

```sql
/*
asc ：升序，如果不写默认升序
desc：降序
*/
select 查询列表
from 表名
【where 筛选条件】
order by 排序的字段或表达式 【asc | desc】;
```

```sql
#案例：查询部门编号>=90的员工信息，并按员工编号降序
select *
from employees

#1、按单个字段排序
#例：
select * 
from employees 
order by salary desc;

#2、添加筛选条件再排序
# 例：查询部门编号>=90的员工信息，并按员工编号降序
select * 
from employees
where department_id>=90
order by employee_id desc;

#3、按表达式排序
#例：查询员工信息，并按年薪降序
select * 
from employees
order by salary*12*(1+ifnull(commission_pct,0)) desc;

#4、按别名排序
#例：查询员工信息 按年薪升序
select *,salary*12*(1+ifnull(commission_pct,0)) 年薪
from employees
order by 年薪 asc;

#5、按函数排序
#例：查询员工名，并且按名字的长度降序
select last_name
from employees
order by length(last_name) desc;

#6、按多个字段排序
#例：查询员工信息，要求先按工资降序，再按employee_id升序
select *
from employees
order by salary desc,employee_id asc;
```

## 4. 分组查询（基本格式）

```sql
select 查询列表
from 表
【where 筛选条件】
group by 分组的字段
【order by 排序的字段】;
```

```sql
#例：查询每个工种的员工平均工资
select avg(salary),job_id
from employees
group by job_id;

#例：查询每个位置的部门个数
select count(*),location_id
from departments
group by location_id;

#分组前筛选
#例1：查询邮箱中包含a字符的每个部门的最高工资
select max(salary),department_id
from employees
where email like '%a%'
group by department_id;

例2：查询有奖金的每个领导手下员工的平均工资
select avg(salary),manager_id
from employees
where commission_pct is not null
group by manager_id;

#分组后筛选  "having关键字"
#例1：查询哪个部门的员工个数>5
select count(*),department_id
from employees
group by department_id
having count(*)>5;

#例2：每个工种有奖金的员工的最高工资>12000的工种编号和最高工资
select job_id,max(salary)
from employees
where commission_pc is not null
group by job_id
having max(salary)>12000;

#例3：领导编号>102的每个领导手下的最低工资大于5000的领导编号和最低工资
select manager_id,min(salary)
from employees
where manager_id>102
group by manager_id 
having  min(salary)>5000

#添加排序
#例：每个工种有奖金的员工的最高工资>6000的工种编号和最高工资,按最高工资升序
select job_id,max(salary) ms
from employees
where commission_pct is not null
group by job_id
having ms
order by ms;

#按多个字段分组
#例：查询每个工种每个部门的最低工资,并按最低工资降序
select min(salary),job_id,department_id
from employees
group by job_id,department_id
order by min(salary);
```

## 5. 连接查询（多表查询）

### 5.1. sql92标准

#### 5.1.1. 等值连接

```sql
#例：查询女神名和对应的男神名
select name,boyName
from boys,beauty
where beauty.boyfriend_id=boys.id;

#例：查询员工名和对应的部门名
select last_name,department_name
from employees,departments
where employees.department_id=departments.department_id;

#例：查询员工名、工种号、工种名
select e.last_name,e.job_id,j.job_title
from employees e,jobs j
where e.job_id=j.job_id;

#例：查询有奖金的员工名、部门名
select e.last_name,d.department_name,e.commission_pct
from employees e,departments d
where e.department_id=d.department_id and e.commission_pct is not null;

#例：查询城市名中第二个字符为o的部门名和城市名
select department_name,city
from departments d,locations l
where d.location_id = l.location_id
and city like '_o%';

#例：查询每个城市的部门个数
select count(*) 个数,city
from departments d,locations l
where d.location_id=l.location_id
group by city;

#例：查询每个工种的工种名和员工的个数，并且按员工个数降序
select job_title,count(*)
from employees e,jobs j
where e.job_id=j.job_id
group by job_title
order by count(*) desc;

#三表连接
#例：查询员工名、部门名和所在的城市，并且城市以“S”开头，以部门名降序排列
select last_name,department_name,city
from employees e,departments d,locations l
where e.department_id=d.department_id 
and d.location_id=l.location_id
and city like "S%"
order by department_name desc;
```

#### 5.1.2. 非等值连接

```sql
#例：查询员工的工资和工资级别
select salary,grade_level
from employees e,job_grades g
where salary between g.lowest_sal and g.highest_sal;
```

#### 5.1.3. 自连接

```sql
#例：查询员工名和上级的名称
SELECT e.employee_id,e.last_name,m.employee_id,m.last_name
FROM employees e,employees m
WHERE e.`manager_id`=m.employee_id;
```

### 5.2. sql99标准（基本格式）

```sql
select 查询列表
from 表1 别名
【连接类型】 join 表2 别名 
on 连接条件
【where 筛选条件】
【group by 分组】
【having 筛选条件】
【order by 排序列表】

/*
连接类型
内连接（★）：inner
外连接
	左外(★):left 【outer】
	右外(★)：right 【outer】
	全外：full 【outer】
交叉连接：cross 
*/
```

#### 5.2.1. 内连接

```sql
#（一）等值连接
#例：查询员工名、部门名
select last_name,department_name
from departments d
inner join employees e
on d.department_id=e.department_id;

#例：查询名字中包含e的员工名和工种名（添加筛选）
select last_name,job_title
from employees e
inner join jobs j
on e.job_id=j.job_id
where last_name like "%e%";

#查询部门个数>3的城市名和部门个数，（添加分组+筛选）
select city,count(*) 部门个数
from departments d
inner join locations l
on d.location_id=l.location_id
group by city
having count(*)>3;

#例：查询每个部门的员工个数>3的部门名和员工个数，并按个数降序（添加排序）
select department_name,count(*) 员工个数
from employees e
inner join departments d
on e.department_id=d.department_id
group by department_name
having count(*)>3
order by count(*) desc;

#例：查询员工名、部门名、工种名，并按部门名降序（添加三表连接）
select last_name,department_name,job_title
from employees e
inner join departments d
on e.department_id=d.department_id
inner join jobs j 
on e.job_id = j.job_id
order by department_name desc;

#（二）非等值连接
#例：查询员工的工资级别
select salary,grade_level
from employees e
join job_grades g
on e.salary between g.lowest_sal and g.highest_sal;

#例：查询工资级别的个数>20的个数，并且按工资级别降序
select count(*),grade_level
from employees e
join job_grades g
on e.salary between g.lowest_sal and g.highest_sal
group by grade_level
having count(*)>20
order by grade_level desc;

#（三）自连接
#例：查询员工的名字、上级的名字
select e.last_name 员工名,m.last_name 上级名
from employees e
join employees m
on e.manager_id= m.employee_id;
 
#例：查询姓名中包含字符k的员工的名字、上级的名字
select e.last_name 员工名,m.last_name 上级名
from employees e
join employees m
on e.manager_id= m.employee_id
where e.last_name like "%k%";
```

#### 5.2.2. 外连接

应用场景：用于查询一个表中有，另一个表没有的记录

特点：

1. 外连接的查询结果为主表中的所有记录
如果从表中有和它匹配的，则显示匹配的值
如果从表中没有和它匹配的，则显示null
外连接查询结果=内连接结果+主表中有而从表没有的记录
2. **左外连接**，left join左边的是主表
**右外连接**，right join右边的是主表
3. 左外和右外交换两个表的顺序，可以实现同样的效果
4. **全外连接** = 内连接的结果+表1中有但表2没有的+表2中有但表1没有的（mysql不支持）

```sql
#例：查询所有男生的女朋友
select bo.*,b.*
from boys bo
left outer join beauty b
on bo.id=b.boyfriend_id;

#例：查询哪个部门没有员工
select d.*,e.employee_id
from departments d
left outer join employees e
on d.department_id = e.department_id
where e.employee_id is null;
```

#### 5.2.3. 交叉连接

特点：类似于笛卡尔乘积

```sql
例：
select b.*,bo.*
from beauty b
cross join boys bo;
```

## 6. 子查询

出现在其他语句中的select语句，称为子查询或内查询。

外部的查询语句，称为主查询或外查询。

**按子查询出现的位置分类**：

- select后面：
   - 仅仅支持标量子查询
- from后面：
   - 支持表子查询
- where或having后面：
   - 标量子查询（单行子查询）
   - 列子查询（多行子查询）
   - 行子查询（结果集一行多列或多行多列）
- exists后面（相关子查询）
   - 表子查询

**按结果集的行列数不同分类**：

- 标量子查询（结果集只有一行一列）
- 列子查询（结果集只有一列多行）
- 行子查询（结果集有一行多列）
- 表子查询（结果集一般为多行多列）

### 6.1. where 和 having 后面

1、标量子查询（单行子查询）
2、列子查询（多行子查询）
3、行子查询（多列多行）

特点：

1. 子查询放在小括号内
2. 子查询一般放在条件的右侧
3. 标量子查询，一般搭配着单行操作符（> < >= <= = <>）使用
4. 列子查询，一般搭配着多行操作符（in/not in、any/some、all）使用
5. 子查询的执行优先于主查询执行，主查询的条件用到了子查询的结果

#### 6.1.1. 标量子查询★

```sql

#例：谁的工资比 Abel 高
#①查询Abel的工资
#②查询员工的信息，满足 salary>①结果
select *
from employees 
where salary>(
	select salary
	from employees
	where last_name="Abel"
);

#例：返回job_id与141号员工相同，salary比143号员工多的员工 姓名，job_id 和工资
#①查询141号员工的job_id
#②查询143号员工的salary
#③查询员工的姓名，job_id 和工资，要求job_id=①并且salary>②
select last_name,job_id,salary
from employees
where job_id=(
	select job_id
	from employees
	where employee_id=141
) and salary>(
	select salary
	from employees
	where employee_id=143
);

#例：返回公司工资最少的员工的last_name,job_id和salary
#①查询公司的 最低工资
#②查询last_name,job_id和salary，要求salary=①
select last_name,job_id,salary
from employees
where salary=(
	select min(salary) 
	from employees
);

#例：查询最低工资大于50号部门最低工资的部门id和其最低工资
#①查询50号部门的最低工资
#②查询每个部门的最低工资
#③ 在②基础上筛选，满足min(salary)>①
select department_id,min(salary)
from employees
group by department_id
having min(salary)>(
	select min(salary)
	from employees
	where department_id=50
);
```

#### 6.1.2. 列子查询★

any和all  可以被  min和max 替代

in可以被=any替代

not in 可以被 <>all替代

```sql
#例：返回location_id是1400或1700的部门中的所有员工姓名
#①查询location_id是1400或1700的部门编号
#②查询员工姓名，要求部门号是①列表中的某一个
select last_name
from employees
where department_id in(
	select department_id
	from departments
	where location_id in(1400,1700)
);

#例：返回其它工种中比job_id为‘IT_PROG’工种 “任一” 工资低的员工的员工号、姓名、job_id 以及salary
#①查询job_id为‘IT_PROG’部门任一工资
#②查询员工号、姓名、job_id 以及salary，salary<(①)的任意一个
select employee_id,last_name,job_id,salary
from employees
where salary < any(
	select salary
	from employees
	where job_id="IT_PROG"
) and job_id<>"IT_PROG";

select employee_id,last_name,job_id,salary
from employees
where salary<(
	select max(salary)
	from employees
	where job_id="IT_PROG"
) and job_id<>"IT_PROG";

#例：返回其它部门中比job_id为‘IT_PROG’部门 “所有” 工资都低的员工的员工号、姓名、job_id 以及salary
select employee_id,last_name,job_id,salary
from employees
where salary < all(
	select salary
	from employees
	where job_id="IT_PROG"
) and job_id<>"IT_PROG";

select employee_id,last_name,job_id,salary
from employees
where salary<(
	select min(salary)
	from employees
	where job_id="IT_PROG"
) and job_id<>"IT_PROG";
```

#### 6.1.3. 行子查询

```sql
#例：查询员工编号最小并且工资最高的员工信息
#直接思维的方式
#①查询最小的员工编号
#②查询最高工资
#③查询员工信息
select * 
from employees
where employee_id=(
	select min(employee_id)
	from employees
)and salary=(
	select max(salary)
	from employees
);

#行子查询的方式
select * 
from employees
where (employee_id,salary)=(
	select min(employee_id),max(salary)
	from employees
);
```

### 6.2. select 后面

仅仅支持标量子查询

```sql
#例：查询每个部门的员工个数
select d.*,(
	select count(*)
	from employees e
	where e.department_id=d.department_id
)
from departments d;

#例：查询员工号=102的部门名
select (
	 select department_name
	 from departments d
	 inner join employees e
	 on d.department_id=e.department_id
	 where e.employee_id=102
) 部门名;
```

### 6.3. from后面

将子查询结果充当一张表，要求必须起别名

```sql
#例：查询每个部门的平均工资的工资等级
#①查询每个部门的平均工资
#②连接①的结果集和job_grades表，筛选条件平均工资 between lowest_sal and highest_sal
select ag_dep.* ,g.grade_level
from (
	select avg(salary) ag,department_id
	from employees
	group by department_id
) ag_dep
inner join job_grades g
on ag_dep.ag between lowest_sal and highest_sal;
```

### 6.4. exists后面（相关子查询，表子查询）

语法：

exists(完整的查询语句)

结果：1或0

```sql
#例：查询有员工的部门名
# in方法
select department_name
from departments d
where d.department_id in(
	select department_id
	from employees
);
#exists 方法
select department_name
from departments d
where exists(
	select department_id
	from employees
)

#例：查询没有女朋友的男神信息
#in
select bo.*
from boys bo
where bo.id not in(
	select boyfriend_id
	from beauty
);

#exists
select bo.*
from boys bo
where not exists(
	select  boyfriend_id
	from beauty b
	where bo.id=b.boyfriend_id
);
```

## 7. 分页查询

应用场景：当要显示的数据，一页显示不全，需要分页提交sql请求

特点：limit语句放在查询语句的最后

```sql
/*
offset要显示条目的起始索引（起始索引从0开始）
size 要显示的条目个数
*/
select 查询列表
from 表
【join type join 表2
on 连接条件
where 筛选条件
group by 分组字段
having 分组后的筛选
order by 排序的字段】
limit 【offset,】size;

/*
公式：
要显示的页数 page，每页的条目数size
*/
select 查询列表
from 表
limit (page-1)*size,size;
```

```sql
#案例1：查询前五条员工信息
select * 
from employees
limit 1,5;

#案例2：查询第11条——第25条
select * 
from  employees 
limit 10,15;

#案例3：有奖金的员工信息，并且工资较高的前10名显示出来
select * 
from employees 
where commission_pct is not null
order by salary desc 
limit 10 ;
```

## 8. 联合查询

应用场景：要查询的结果来自于多个表，且多个表没有直接的连接关系，但查询的信息一致时

特点：

1. 要求多条查询语句的查询列数是一致的！
2. 要求多条查询语句的查询的每一列的类型和顺序最好一致
3. **union** 关键字默认去重
4. 如果使用 **union all** 可以包含重复项

```sql
#查询语句1
union
#查询语句2
union
...
```

```sql
#例：查询部门编号>90或邮箱包含a的员工信息
select * from employees where email like '%a%' or department_id>90;

select * from employees  where email like '%a%'
union
select * from employees  where department_id>90;

#例：查询中国用户中男性的信息以及外国用户中年男性的用户信息
select id,cname from t_ca where csex='男'
union all
select t_id,tname from t_ua where tGender='male';
```
