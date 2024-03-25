import { useRef } from 'react'
import './App.scss'

const fileList = [
  {
    name: 'mp3',
    type: 'audio',
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
  },
  {
    name: 'mp4',
    type: 'video',
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  },
  {
    name: 'png',
    type: 'picture',
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg'
  },
  {
    name: 'pdf',
    type: 'pdf',
    url: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'
  }
]

function App() {
  const fileViewInnerRef = useRef(null)

  const handleFileClick = ({ type, url }) => {
    switch (type) {
      case 'audio':
        viewAudio(url)
        break
      case 'video':
        viewVideo(url)
        break
      case 'picture':
        viewPicture(url)
        break
      case 'pdf':
        viewPdf(url)
        break
    }
  }

  function viewAudio(url) {
    const fileViewInner = fileViewInnerRef.current
    fileViewInner.innerHTML = `
    <audio controls>
      <source src="${url}" type="audio/mp3" />
    </audio>`
  }

  function viewVideo(url) {
    const fileViewInner = fileViewInnerRef.current
    fileViewInner.innerHTML = `
    <video controls>
      <source src="${url}" type="video/mp4" />
    </video>`
  }

  function viewPicture(url) {
    const fileViewInner = fileViewInnerRef.current
    fileViewInner.innerHTML = `
    <picture>
      <img src="${url}" alt="view image" />
    </picture>`
  }

  function viewPdf(url) {
    const fileViewInner = fileViewInnerRef.current
    url = '//' + location.host + '/vendors/pdfjs/web/viewer.html?file=' + url
    fileViewInner.innerHTML = `<iframe width="100%" height="120%" src="${url}" loading="lazy"></iframe>`
  }

  return (
    <>
      <div className="f-container">
        <ul className="f-list">
          {fileList.map((f, i) => (
            <li className="f-item" key={i} onClick={() => handleFileClick(f)}>
              {f.name}
            </li>
          ))}
        </ul>
        <div className="f-view">
          <div className="f-view__inner" ref={fileViewInnerRef}></div>
        </div>
      </div>
    </>
  )
}

export default App
