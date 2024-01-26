// 创建分片数据
function createChunks(file, chunkSize) {
  const result = []
  for (let i = 0; i < file.size; i += chunkSize) {
    result.push(file.slice(i, i + chunkSize))
  }
  return result
}

// 计算文件的 hash（增量算法）
function hash(chunks) {
  return new Promise((resolve, reject) => {
    const spark = new SparkMD5()
    function _read(i) {
      if (i >= chunks.length) {
        // 读取完成
        resolve(spark.end())
        return
      }

      const blob = chunks[i]
      const reader = new FileReader()
      reader.onload = ev => {
        const bytes = ev.target.result
        spark.append(bytes)
        _read(i + 1)
      }
      reader.readAsArrayBuffer(blob)
    }
    _read(0)
  })
}

const handleChange = async e => {
  const file = e.target.files[0]

  const chunks = createChunks(file, 10 * 1024 * 1024)
  console.log('分片数据：', chunks)

  const result = await hash(chunks)
  console.log('文件 hash 值：', result)

  // do something ...
}
