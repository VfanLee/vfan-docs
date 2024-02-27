const cropperImage = document.querySelector('.cropper-image')
let cropper = null

// 参考文档：https://github.com/fengyuanchen/cropperjs/blob/main/README.md
const options = {
  viewMode: 0,
  dragMode: 'crop',
  initialAspectRatio: NaN,
  aspectRatio: 16 / 9, // 默认：NaN
  data: null,
  preview: '.preview-image',
  responsive: true,
  restore: true,
  checkCrossOrigin: true,
  checkOrientation: true,
  modal: true,
  guides: true,
  center: true,
  highlight: true,
  background: true,
  autoCrop: true,
  autoCropArea: 0.8,
  movable: true,
  rotatable: true,
  scalable: true,
  zoomable: true,
  zoomOnTouch: true,
  zoomOnWheel: true,
  wheelZoomRatio: 0.1,
  cropBoxMovable: true,
  cropBoxResizable: true,
  toggleDragModeOnDblclick: true,
  minContainerWidth: 200,
  minContainerHeight: 100,
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  ready: function (e) {
    console.log(e)
  },
  cropstart: function (e) {
    console.log(e)
  },
  cropmove: function (e) {
    console.log(e)
  },
  cropend: function (e) {
    console.log(e)
  },
  crop: function (e) {
    console.log(e)
  },
  zoom: function (e) {
    console.log(e)
  }
}

cropper = new Cropper(cropperImage, options)

document.querySelector('#cropped-canvas__modal').addEventListener('show.bs.modal', e => {
  const bodyEl = document.querySelector('#cropped-canvas__modal .modal-body')
  const canvas = cropper.getCroppedCanvas({ width: 320, height: 180 })
  bodyEl.innerHTML = ``
  bodyEl.appendChild(canvas)
})
