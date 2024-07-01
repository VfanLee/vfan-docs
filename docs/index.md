---
# https://vitepress.dev/zh/reference/default-theme-home-page
layout: home

hero:
  name: Vfan Docs
  text: 以前端为主的开发笔记
  tagline: 个人定制化
  actions:
    - theme: brand
      text: Let's Go!
      link: /web/
    - theme: alt
      text: GitHub
      link: https://github.com/VfanLee/vfan-docs
  image:
    src: /vitepress-logo-large.webp
    alt: VitePress

features:
  - title: 快速、高效、便捷 🚀
    details: 好记性不如烂笔头。坚持记录，方便日后快速查阅。
  - title: 个人定制化 👨‍💻
    details: 手册千千万，适合自己的才是最好的！
  - title: 准时下班 🫡
    details: "睡觉! 😴"
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
