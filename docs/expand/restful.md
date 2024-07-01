# RESTful API

在RESTful API中，CRUD操作（创建、读取、更新和删除）是四种基本的数据操作方式。每种操作对应HTTP方法和相应的状态码。

## 创建 (Create)

- **HTTP 方法**：POST
- **URI 示例**：`/resources`
- **状态码**：
  - **201 Created**：资源创建成功。通常返回新创建资源的详细信息和Location头，指示新资源的位置。
  - **400 Bad Request**：请求格式错误或缺少必要数据。
- **响应示例**：

  ```http
  POST /resources HTTP/1.1
  Content-Type: application/json

  {
      "name": "New Resource"
  }
  ```

  ```http
  HTTP/1.1 201 Created
  Content-Type: application/json
  Location: http://example.com/resources/123

  {
      "id": 123,
      "name": "New Resource",
      "created_at": "2024-06-27T12:34:56Z"
  }
  ```

## 读取 (Read)

- **HTTP 方法**：GET
- **URI 示例**：`/resources` 或 `/resources/{id}`
- **状态码**：
  - **200 OK**：请求成功并返回数据。
  - **404 Not Found**：请求的资源不存在。
- **响应示例**：

  ```http
  GET /resources/123 HTTP/1.1
  ```

  ```http
  HTTP/1.1 200 OK
  Content-Type: application/json

  {
      "id": 123,
      "name": "Existing Resource",
      "created_at": "2024-06-27T12:34:56Z"
  }
  ```

在 RESTful API 中：

- 如果是执行一个搜索操作，未找到任何匹配结果时应返回 200，并且响应体中返回一个空集合。
- 如果客户端请求一个具体的资源（如通过 ID 查找），未找到时应返回 404。

## 更新 (Update)

- **HTTP 方法**：PUT（整体更新）或 PATCH（部分更新）
- **URI 示例**：`/resources/{id}`
- **状态码**：
  - **200 OK**：更新成功并返回更新后的资源。
  - **204 No Content**：更新成功但没有返回内容。
  - **400 Bad Request**：请求格式错误或缺少必要数据。
  - **404 Not Found**：请求的资源不存在。
- **响应示例**：

  ```http
  PUT /resources/123 HTTP/1.1
  Content-Type: application/json

  {
      "name": "Updated Resource"
  }
  ```

  ```http
  HTTP/1.1 200 OK
  Content-Type: application/json

  {
      "id": 123,
      "name": "Updated Resource",
      "updated_at": "2024-06-27T12:45:00Z"
  }
  ```

  或者：

  ```http
  HTTP/1.1 204 No Content
  ```

## 删除 (Delete)

- **HTTP 方法**：DELETE
- **URI 示例**：`/resources/{id}`
- **状态码**：
  - **200 OK**：删除成功并返回确认信息。
  - **204 No Content**：删除成功但没有返回内容。
  - **404 Not Found**：请求的资源不存在。
- **响应示例**：

  ```http
  DELETE /resources/123 HTTP/1.1
  ```

  ```http
  HTTP/1.1 204 No Content
  ```

## 总结

- **创建**：使用 POST 请求，返回 201 Created 和新资源信息。
- **读取**：使用 GET 请求，返回 200 OK 和资源数据，未找到资源返回 404 Not Found。
- **更新**：使用 PUT 或 PATCH 请求，返回2 00 OK和更新后的资源，或返回 204 No Content 表示更新成功但无返回内容。
- **删除**：使用 DELETE 请求，返回 204 No Content表示删除成功，或返回 200 OK 并确认删除信息。
