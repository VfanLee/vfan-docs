// encodeURI & decodeURI
const encodeURISource = document.getElementById('encodeURI-source')
const encodeURIResult = document.getElementById('encodeURI-result')
const handleEncodeURI = () => {
  encodeURIResult.value = encodeURI(encodeURISource.value)
}

const decodeURISource = document.getElementById('decodeURI-source')
const decodeURIResult = document.getElementById('decodeURI-result')
const handleDecodeURI = () => {
  decodeURIResult.value = decodeURI(decodeURISource.value)
}

// encodeURIComponent & decodeURIComponent
const encodeURIComponentSource = document.getElementById('encodeURIComponent-source')
const encodeURIComponentResult = document.getElementById('encodeURIComponent-result')
const handleEncodeURIComponent = () => {
  encodeURIComponentResult.value = encodeURIComponent(encodeURIComponentSource.value)
}

const decodeURIComponentSource = document.getElementById('decodeURIComponent-source')
const decodeURIComponentResult = document.getElementById('decodeURIComponent-result')
const handleDecodeURIComponent = () => {
  decodeURIComponentResult.value = decodeURIComponent(decodeURIComponentSource.value)
}

// escape & unescape
const escapeSource = document.getElementById('escape-source')
const escapeResult = document.getElementById('escape-result')
const handleEscape = () => {
  escapeResult.value = escape(escapeSource.value)
}

const unescapeSource = document.getElementById('unescape-source')
const unescapeResult = document.getElementById('unescape-result')
const handleUnescape = () => {
  unescapeResult.value = unescape(unescapeSource.value)
}
