# formData vs json

```js
const jsondata = {
  id: 1,
  name: 'foo'
}

// json => formData
const formData = new FormData()
for (const key in jsondata) {
  if (Object.hasOwnProperty.call(jsondata, key)) {
    formData.append(key, jsondata[key])
  }
}
console.log(formData);

// formData => json
const data = {}
formData.forEach((value, key) => (data[key] = value))
console.log(data);
```
