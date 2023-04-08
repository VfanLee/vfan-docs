const ulTag = document.querySelector('ul')

// mock
let totalPages = 20
let page = 5

function element(totalPages, page) {
  let liTags = ''
  let beforePage = page - 1
  let afterPage = page + 1

  if (page > 1) {
    liTags += `<li class="btn prev" onClick="element(${totalPages}, ${
      page - 1
    })"><span><i class="fas fa-angle-left"></i> 上一页</span></li>`
  }

  if (page > 2) {
    liTags += `<li class="num" onClick="element(${totalPages}, 1)">1</li>`
    if (page > 3) {
      liTags += `<li class="dots">...</li>`
    }
  }

  if (page == totalPages) {
    beforePage = beforePage - 2
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1
  }

  if (page == 1) {
    afterPage = afterPage + 2
  } else if (page == 2) {
    afterPage = afterPage + 1
  }

  for (let pageLength = beforePage; pageLength <= afterPage; pageLength++) {
    if (pageLength < 1 || pageLength > totalPages) {
      continue
    }
    if (page == pageLength) {
      liTags += `<li class="num active" onClick="element(${totalPages}, ${pageLength})">${pageLength}</li>`
    } else {
      liTags += `<li class="num" onClick="element(${totalPages}, ${pageLength})">${pageLength}</li>`
    }
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTags += `<li class="dots">...</li>`
    }
    liTags += `<li class="num" onClick="element(${totalPages}, ${totalPages})">${totalPages}</li>`
  }

  if (page < totalPages) {
    liTags += `<li class="btn next" onClick="element(${totalPages}, ${
      page + 1
    })"><span>下一页 <i class="fas fa-angle-right"></i></span></li>`
  }

  ulTag.innerHTML = liTags
}

element(totalPages, page)
