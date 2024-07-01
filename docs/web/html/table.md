# Table 表格

## 单元格合并

- colspan：合并列
- rowspan：合并行

## 样式

- `border-spacing: 0;`
- `border-collapse: collapse;`

## colgroup

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col

## DOM 操作

```html
<table>
  <thead>
    <tr>
      <th>数字</th>
      <th>字母</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B</td>
    </tr>
    <tr>
      <td>1</td>
      <td>C</td>
    </tr>
  </tbody>
</table>
```

```js
const allTables = document.querySelectorAll('table')
for (const table of allTables) {
  const tBody = table.tBodies[0]
  const rows = Array.from(tBody.rows)
  const headerCells = table.tHead.rows[0].cells
  for (const th of headerCells) {
    const cellIndex = th.cellIndex
    th.addEventListener('click', () => {
      rows.sort((tr1, tr2) => {
        const tr1Text = tr1.cells[cellIndex].textContent
        const tr2Text = tr2.cells[cellIndex].textContent
        return tr1Text.localeCompare(tr2Text)
      })
      tBody.append(...rows)
    })
  }
}
```
