# css 宽度自适应

## max-content

宽度等于内容的最大宽度。

<Demo>
  <div class="container">
    <div class="item">
      Lorem ipsum dolor sit amet consectetur adipisicing
    </div>
    <div class="item max-content">
      Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing
    </div>
  </div>
</Demo>

## min-content

宽度等于内容的最小宽度。

<Demo>
  <div class="container">
    <div class="item">
      Lorem ipsum dolor sit amet consectetur adipisicing
    </div>
    <div class="item min-content">
      Lorem ipsum dolor sit amet consectetur adipisicing
    </div>
  </div>
</Demo>

## fit-content

根据实际内容进行伸缩，但不超过容器宽度。

<Demo>
  <div class="container">
    <div class="item">
      Lorem ipsum dolor sit amet consectetur adipisicing
    </div>
    <div class="item fit-content">
      Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing
    </div>
    <div class="item fit-content">
      Lorem ipsum
    </div>
  </div>
</Demo>

<style lang="scss" scoped>
.container {
  padding: 16px;
  background: #2A9D8F;
  width: 240px;
}
.item {
  background: #E9C46A;
  & + & {
    margin-top: 8px;
  }
}
.max-content {
  width: max-content;
}
.min-content {
  width: min-content;
}
.fit-content {
  width: fit-content;
}
</style>
