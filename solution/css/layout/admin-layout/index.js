function $(selector) {
  return document.querySelector(selector)
}

const closeSidebarEl = $('#close-sidebar')
const fixedSidebarEl = $('#fixed-sidebar')
const fixedNavbarEl = $('#fixed-navbar')
const hideSidebarEl = $('#hide-sidebar')
const hideNavbarEl = $('#hide-navbar')

/* 关闭 sidebar */
closeSidebarEl.addEventListener('click', function () {
  $('.l-sidebar').classList.toggle('is-expand')

  if ($('.l-navbar.is-fixed')) {
    if ([...$('.l-sidebar').classList].includes('is-expand')) {
      $('.l-navbar.is-fixed').style.width = `calc(100% - 208px)`
    } else {
      $('.l-navbar.is-fixed').style.width = `calc(100% - 48px)`
    }
  }
})

/* 固定 sidebar */
fixedSidebarEl.addEventListener('click', function () {
  $('.l-sidebar__inner').classList.toggle('is-fixed')
})

/* 固定 navbar */
fixedNavbarEl.addEventListener('click', function () {
  if (this.checked) {
    $('.l-navbar').classList.add('is-fixed')
    if ([...$('.l-sidebar').classList].includes('is-expand')) {
      $('.l-navbar').style.width = `calc(100% - 208px)`
    } else {
      $('.l-navbar').style.width = `calc(100% - 48px)`
    }
  } else {
    $('.l-navbar').classList.remove('is-fixed')
    $('.l-navbar').style.width = ''
  }
})

// /* 隐藏 sidebar */
// hideSidebarEl.addEventListener('click', function () {
//   $('.l-sidebar').classList.toggle('hide')
// })

// /* 隐藏 navbar */
// hideNavbarEl.addEventListener('click', function () {
//   $('.l-navbar').classList.toggle('hide')
// })
