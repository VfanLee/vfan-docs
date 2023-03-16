# SheetJS CE

> 社区版文档：https://docs.sheetjs.com/docs/  
> 当前版本：0.18.5

sheetjs 社区版提供基础功能，高级功能例如：excel 自定义样式、预览 …… 需要购买 [高级版](https://sheetjs.com/pro/)。

## 1. 安装

```sh
npm i xlsx
```

## 2. 基本使用

```js
import * as XLSX from xlsx
```

## 3. 数据对象

> 参考：https://docs.sheetjs.com/docs/csf/

- **workbook**：工作簿对象
  - `wb.Props`：存储属性。
  - `wb.SheetNames`：sheet 名称列表。
  - `wb.Sheets`：sheet 对象列表。
  - `wb.Workbook`：workbook 属性。
  - `wb.bookType`：workbook 类型。

- **worksheet**：工作表对象
  - `sheet['!ref']`：基于 A-1 的范围，表示工作表范围。
  - `sheet['!margins']`：页边距的对象。
  - `ws['!cols']`：列属性对象数组。
  - `ws['!rows']`：行属性对象数组。
  - `ws['!merges']`：与工作表中合并的单元格对应的范围对象数组。
  - `ws['!outline']`：配置轮廓的行为方式。
  - `ws['!protect']`：写表保护属性的对象。
  - `ws['!autofilter']`：AutoFilter 对象遵循模式。

## 4. API

> 参考：https://docs.sheetjs.com/docs/api/

### 4.1. 解析数据

#### `XLSX.read(data, opts)`

解析 data 源数据，并生成 workbook。

| opts | 描述                                | 默认值 |
| ---- | ----------------------------------- | ------ |
| type | Input data encoding（参考 type 表） |        |

| type   | expected input                                              |
| ------ | ----------------------------------------------------------- |
| base64 | string: Base64 encoding of the file                         |
| binary | string: binary string (byte `n` is `data.charCodeAt(n)`)    |
| string | string: JS string (only appropriate for UTF-8 text formats) |
| buffer | nodejs Buffer                                               |
| array  | array: array of 8-bit unsigned int (byte `n` is `data[n]`)  |
| file   | string: path of file that will be read (nodejs only)        |

### 4.2. 写入数据

#### `XLSX.writeFile(workbook, filename, opts)`

将 workbook 写入到 `filename` 中。在浏览器环境中会进行下载。

| opts     | 描述                                           | 默认值 |
| -------- | ---------------------------------------------- | ------ |
| type     | Output data encoding（参考 type 表）           |        |
| bookType | 工作簿类型（参考 bookType 表）            xlsx |        |

| bookType | 文件后缀 | container | sheets | 描述                            |
| -------- | -------- | --------- | ------ | ------------------------------- |
| xlsx     | .xlsx    | ZIP       | multi  | Excel 2007+ XML Format          |
| xlsm     | .xlsm    | ZIP       | multi  | Excel 2007+ Macro XML Format    |
| xlsb     | .xlsb    | ZIP       | multi  | Excel 2007+ Binary Format       |
| biff8    | .xls     | CFB       | multi  | Excel 97-2004 Workbook Format   |
| biff5    | .xls     | CFB       | multi  | Excel 5.0/95 Workbook Format    |
| biff4    | .xls     | none      | single | Excel 4.0 Worksheet Format      |
| biff3    | .xls     | none      | single | Excel 3.0 Worksheet Format      |
| biff2    | .xls     | none      | single | Excel 2.0 Worksheet Format      |
| xlml     | .xls     | none      | multi  | Excel 2003-2004 (SpreadsheetML) |
| numbers  | .numbers | ZIP       | single | Numbers 3.0+ Spreadsheet        |
| ods      | .ods     | ZIP       | multi  | OpenDocument Spreadsheet        |
| fods     | .fods    | none      | multi  | Flat OpenDocument Spreadsheet   |
| wk3      | .wk3     | none      | multi  | Lotus Workbook (WK3)            |
| csv      | .csv     | none      | single | Comma Separated Values          |
| txt      | .txt     | none      | single | UTF-16 Unicode Text (TXT)       |
| sylk     | .sylk    | none      | single | Symbolic Link (SYLK)            |
| html     | .html    | none      | single | HTML Document                   |
| dif      | .dif     | none      | single | Data Interchange Format (DIF)   |
| dbf      | .dbf     | none      | single | dBASE II + VFP Extensions (DBF) |
| wk1      | .wk1     | none      | single | Lotus Worksheet (WK1)           |
| rtf      | .rtf     | none      | single | Rich Text Format (RTF)          |
| prn      | .prn     | none      | single | Lotus Formatted Text            |
| eth      | .eth     | none      | single | Ethercalc Record Format (ETH)   |

| type   | output                                                   |
| ------ | -------------------------------------------------------- |
| base64 | string: Base64 encoding of the file                      |
| binary | string: binary string (byte `n` is `data.charCodeAt(n)`) |
| string | string: JS string (not compatible with binary formats)   |
| buffer | nodejs Buffer                                            |
| array  | ArrayBuffer, fallback array of 8-bit unsigned int        |
| file   | string: path of file that will be created (nodejs only)  |

### 4.3. 单元格

#### `encode_row / decode_row`

converts between 0-indexed rows and 1-indexed rows.

#### `encode_col / decode_col`

converts between 0-indexed columns and column names.

#### `encode_cell / decode_cell`

converts cell addresses.

#### `encode_range / decode_range`

converts cell ranges.

### 4.4. 构建

#### `XLSX.utils.book_new()`

创建一个空的 workbook 对象。

#### `XLSX.utils.book_append_sheet(wb, ws, sheetname)`

worksheet 附加到 workbook，该表命名为 `sheetname`。

### 4.5. 导入

#### `XLSX.utils.aoa_to_sheet`

转换一组 aoa 到一个 worksheet 中。

| Opts       | 描述                                             | 默认值 |
| ---------- | ------------------------------------------------ | ------ |
| dateNF     | Use specified date format in string output       | FMT 14 |
| cellDates  | Store dates as type d (default is n)             | false  |
| sheetStubs | Create cell objects of type z for null values    | false  |
| nullError  | If true, emit #NULL! error cells for null values | false  |

#### `XLSX.utils.json_to_sheet`

转换一组 aoo 到一个 worksheet 中。

#### `XLSX.utils.sheet_add_aoa(ws, aoa, opts)`

将一组 aoa 添加到现有 worksheet 中。

#### `XLSX.utils.sheet_add_json(ws, aoo, opts)`

将一组 aoo 添加到现有 worksheet 中。

### 4.6. 导出

#### `XLSX.utils.sheet_to_json(ws, opts)`

| 配置项    | 默认值 | 描述                                               |
| --------- | ------ | -------------------------------------------------- |
| raw       | true   | Use raw values (true) or formatted strings (false) |
| range     | **     | Override Range (参考 range 表)                     |
| header    |        | Control output format (参考 header 表)             |
| dateNF    | FMT 14 | Use specified date format in string output         |
| defval    |        | Use specified value in place of null or undefined  |
| blankrows | **     | Include blank lines in the output **               |

| range     | 描述                                                  |
| --------- | ----------------------------------------------------- |
| 数字      | Use worksheet range but set starting row to the value |
| 字符      | Use specified range (A1-Style bounded range string)   |
| (default) | Use worksheet range (`ws['!ref']`)                    |

| header    | 描述                                                  |
| --------- | ----------------------------------------------------- |
| 1         | Generate an array of arrays                           |
| "A"       | Row object keys are literal column labels             |
| array of  | strings  Use specified strings as keys in row objects |
| (default) | Read and disambiguate first row as keys               |
