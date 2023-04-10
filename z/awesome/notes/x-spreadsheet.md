# x-spreadsheet

> 文档：https://hondrytravis.com/x-spreadsheet-doc/doc/  
> 当前版本：1.1.9

## 1. 安装

```sh
npm i x-data-spreadsheet less-loader@7
```

## 2. 基本使用

<!-- tabs:start -->
<!-- tab:HTML -->
```html
<!-- 指定渲染容器 -->
<div id="x-spreadsheet-demo"></div>
```

<!-- tab:JS -->
```js
import Spreadsheet from "x-data-spreadsheet";

// 初始化
const s = new Spreadsheet("#x-spreadsheet-demo", {})
```
<!-- tabs:end -->

## 3. 国际化

```js
import 'x-data-spreadsheet/dist/locale/zh-cn'

// 默认加载 en
Spreadsheet.locale('zh-cn')
```

## 4. 结合 SheetJS 使用

需要两个工具方法：https://cdn.sheetjs.com/xspreadsheet/xlsxspread.js

```js
/**
 * Converts data from SheetJS to x-spreadsheet
 * @param  {Object} wb SheetJS workbook object
 * @returns {Object[]} An x-spreadsheet data
 */
function stox(wb) {
  var out = [];
  wb.SheetNames.forEach(function (name) {
    var o = { name: name, rows: {} };
    var ws = wb.Sheets[name];
    if(!ws || !ws["!ref"]) return;
    var range = XLSX.utils.decode_range(ws['!ref']);
    // sheet_to_json will lost empty row and col at begin as default
    range.s = { r: 0, c: 0 };
    var aoa = XLSX.utils.sheet_to_json(ws, {
      raw: false,
      header: 1,
      range: range
    });

    aoa.forEach(function (r, i) {
      var cells = {};
      r.forEach(function (c, j) {
        cells[j] = { text: c };

        var cellRef = XLSX.utils.encode_cell({ r: i, c: j });

        if ( ws[cellRef] != null && ws[cellRef].f != null) {
          cells[j].text = "=" + ws[cellRef].f;
        }
      });
      o.rows[i] = { cells: cells };
    });

    o.merges = [];
    (ws["!merges"]||[]).forEach(function (merge, i) {
      //Needed to support merged cells with empty content
      if (o.rows[merge.s.r] == null) {
        o.rows[merge.s.r] = { cells: {} };
      }
      if (o.rows[merge.s.r].cells[merge.s.c] == null) {
        o.rows[merge.s.r].cells[merge.s.c] = {};
      }

      o.rows[merge.s.r].cells[merge.s.c].merge = [
        merge.e.r - merge.s.r,
        merge.e.c - merge.s.c
      ];

      o.merges[i] = XLSX.utils.encode_range(merge);
    });

    out.push(o);
  });

  return out;
}

/**
 * Converts data from x-spreadsheet to SheetJS
 * @param  {Object[]} sdata An x-spreadsheet data object
 * @returns {Object} A SheetJS workbook object
 */
function xtos(sdata) {
  var out = XLSX.utils.book_new();
  sdata.forEach(function (xws) {
    var ws = {};
    var rowobj = xws.rows;
    var minCoord = { r: 0, c: 0 }, maxCoord = { r: 0, c: 0 };
    for (var ri = 0; ri < rowobj.len; ++ri) {
      var row = rowobj[ri];
      if (!row) continue;

      Object.keys(row.cells).forEach(function (k) {
        var idx = +k;
        if (isNaN(idx)) return;

        var lastRef = XLSX.utils.encode_cell({ r: ri, c: idx });
        if (ri > maxCoord.r) maxCoord.r = ri;
        if (idx > maxCoord.c) maxCoord.c = idx;

        var cellText = row.cells[k].text, type = "s";
        if (!cellText) {
          cellText = "";
          type = "z";
        } else if (!isNaN(Number(cellText))) {
          cellText = Number(cellText);
          type = "n";
        } else if (cellText.toLowerCase() === "true" || cellText.toLowerCase() === "false") {
          cellText = Boolean(cellText);
          type = "b";
        }

        ws[lastRef] = { v: cellText, t: type };

        if (type == "s" && cellText[0] == "=") {
          ws[lastRef].f = cellText.slice(1);
        }

        if (row.cells[k].merge != null) {
          if (ws["!merges"] == null) ws["!merges"] = [];

          ws["!merges"].push({
            s: { r: ri, c: idx },
            e: {
              r: ri + row.cells[k].merge[0],
              c: idx + row.cells[k].merge[1]
            }
          });
        }
      });
    }
    ws["!ref"] = minCoord ? XLSX.utils.encode_range({
      s: minCoord,
      e: maxCoord
    }) : "A1";

    XLSX.utils.book_append_sheet(out, ws, xws.name);
  });

  return out;
}
```

### 4.1. 导入

将 `Sheet workbook` 转换成 `x-spreadsheet data`，并渲染到 `s` 容器中。

```js
s.loadData(stox(XLSX.read(data)))
```

### 4.2. 导出

将 `x-spreadsheet data` 转换成 `Sheet workbook`，并导出为 `Sheet.xlsx`。

```js
XLSX.writeFile(xtos(s.getData()), "Sheet.xlsx");
```
