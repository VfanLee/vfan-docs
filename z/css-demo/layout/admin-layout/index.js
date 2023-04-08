const closeSidebarEl = document.querySelector("#close-sidebar");
const fixedSidebarEl = document.querySelector("#fixed-sidebar");
const fixedNavbarEl = document.querySelector("#fixed-navbar");
const hideSidebarEl = document.querySelector("#hide-sidebar");
const hideNavbarEl = document.querySelector("#hide-navbar");

/* 关闭 sidebar */
closeSidebarEl.addEventListener("click", function () {
  // 获取 css 变量值
  console.log(
    getComputedStyle(document.querySelector(":root")).getPropertyValue(
      "--sidebarWidth",
    ),
  );

  // 修改 css 变量值
  if (this.checked) {
    document.querySelector(":root").style.setProperty("--sidebarWidth", "48px");
  } else {
    document
      .querySelector(":root")
      .style.setProperty("--sidebarWidth", "208px");
  }
});

/* 固定 sidebar */
fixedSidebarEl.addEventListener("click", function () {
  document.querySelector(".sidebar__wrap").classList.toggle("sidebar--fixed");
});

/* 固定 navbar */
fixedNavbarEl.addEventListener("click", function () {
  document
    .querySelector(".navbar__container")
    .classList.toggle("navbar--fixed");
});

/* 隐藏 sidebar */
hideSidebarEl.addEventListener("click", function () {
  document.querySelector(".sidebar__container").classList.toggle("hide");
});

/* 隐藏 navbar */
hideNavbarEl.addEventListener("click", function () {
  document.querySelector(".navbar__container").classList.toggle("hide");
});
