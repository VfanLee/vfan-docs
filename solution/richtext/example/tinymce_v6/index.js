// TinyMCE 6：https://www.tiny.cloud/docs/tinymce/6/
// Example：https://www.tiny.cloud/docs/tinymce/6/full-featured-open-source-demo/

const editorContent = document.querySelector('#editor-content')

function filePickerCallBack(callback, value, meta) {
  if (meta.filetype == 'file') {
  }

  if (meta.filetype == 'image') {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.addEventListener('change', e => {
      // do something ...
      callback('https://picsum.photos/100')
    })
    input.click()
  }

  if (meta.filetype == 'media') {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'video/*, audio/*')
    input.addEventListener('change', e => {
      // do something ...
      callback('https://vjs.zencdn.net/v/oceans.mp4')
    })
    input.click()
  }
}

function imagesUploadHandler(blobInfo, progress) {
  const base64 = blobInfo.base64()
  const blob = blobInfo.blob()
  const blobUri = blobInfo.blobUri()
  const fileName = blobInfo.filename()
  console.log(blobInfo)
  // do something ...
  return Promise.resolve('https://picsum.photos/300/200')
}

tinymce.init({
  selector: '#mytextarea',
  placeholder: '请输入内容',
  // 插件配置
  plugins: 'quickbars searchreplace lists linkchecker autolink advlist link table image media wordcount charmap emoticons code fullscreen preview codesample directionality help',
  height: 600,
  resize: true,
  min_height: 200,
  // 菜单栏配置
  menubar: false,
  // 工具栏配置
  toolbar_mode: 'sliding',
  toolbar: `undo redo |
            blocks fontfamily fontsize |
            bold italic underline strikethrough |
            align numlist bullist |
            table link image media |
            lineheight outdent indent |
            forecolor backcolor removeformat |
            charmap emoticons |
            code fullscreen preview |
            print |
            codesample |
            ltr rtl |
            help`,
  // 快速选择
  quickbars_selection_toolbar: `bold italic |
                                quicklink h2 h3 blockquote |
                                quickimage quicktable`,
  // 状态栏
  statusbar: true,
  // 元素路径
  elementpath: true,
  // tiny 技术支持
  branding: false,
  // 语言类型
  language: 'zh_CN',
  font_family_formats: `微软雅黑=Microsoft YaHei;
                        苹果苹方=PingFang SC;
                        宋体=simsun, serif;
                        仿宋体=FangSong, serif;
                        黑体=SimHei, sans-serif;
                        Arial=arial, helvetica, sans-serif;
                        Arial Black=arial black, avant garde;
                        Times New Roman=times new roman, times;`,
  font_size_formats: '14px 16px 18px 20px 24px 26px 28px 30px 32px 36px',
  // Copy & Paste
  paste_data_images: true,
  smart_paste: true,
  // 文件处理
  file_picker_types: 'image media',
  object_resizing: true,
  resize_img_proportional: true,
  file_picker_callback: filePickerCallBack,
  // 图片处理
  image_caption: true,
  image_advtab: true,
  image_description: true,
  image_dimensions: true,
  image_title: true,
  image_uploadtab: true,
  images_upload_handler: imagesUploadHandler,

  // 事件处理：https://www.tiny.cloud/docs/tinymce/6/events/
  setup: editor => {
    editor.on('init', e => {
      editor.setContent('<p>hello world</p>')
    })

    editor.on('change', e => {
      const content = editor.getContent()
      const textContent = editor.getContent({ format: 'text' })
      const charCount = textContent.length
      const wordCount = textContent.split(/\s+/).filter(Boolean).length

      console.log('html:', content)
      console.log('text:', textContent)
      console.log('字符数:', charCount)
      console.log('字数:', wordCount)
    })
  }
})
