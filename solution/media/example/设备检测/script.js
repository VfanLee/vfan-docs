;(() => {
  loadCamera()

  function initDevices() {
    const cameras = []
    const microphones = []
    const speakers = []

    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        console.log(devices);
        devices.forEach(d => {
          if (d.deviceId === 'communications') {
            return
          }

          if (d.kind === 'videoinput') {
            cameras.push(d)
          } else if (d.kind === 'audioinput') {
            microphones.push(d)
          } else if (d.kind === 'audiooutput') {
            speakers.push(d)
          }
        })

        renderElement(cameras, microphones, speakers)
      })
      .catch(err => {
        throw err
      })
  }

  function renderElement(cameras, microphones, speakers) {
    const cameraSelect = document.createElement('select')
    cameras.forEach(x => {
      const option = document.createElement('option')
      option.value = x.deviceId
      option.label = x.label
      cameraSelect.append(option)
    })
    cameraSelect.addEventListener('change', e => {
      console.log(e)
    })
    document.querySelector('.item.camera .box').prepend(cameraSelect)

    const microphoneSelect = document.createElement('select')
    microphones.forEach(x => {
      const option = document.createElement('option')
      option.value = x.deviceId
      option.label = x.label
      microphoneSelect.append(option)
    })
    microphoneSelect.addEventListener('change', e => {
      console.log(e)
    })
    document.querySelector('.item.microphone .box').append(microphoneSelect)

    const speakerSelect = document.createElement('select')
    speakers.forEach(x => {
      const option = document.createElement('option')
      option.value = x.deviceId
      option.label = x.label
      speakerSelect.append(option)
    })
    speakerSelect.addEventListener('change', e => {
      debugger
    })
    document.querySelector('.item.speaker .box').append(speakerSelect)
  }

  function loadCamera() {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(stream => {
        const video = document.createElement('video')
        video.muted = true
        video.srcObject = stream
        video.addEventListener('loadedmetadata', e => {
          video.play()
        })
        document.querySelector('.item.camera .box').append(video)
        initDevices()
      })
      .catch(err => {
        throw err
      })
  }
})()
