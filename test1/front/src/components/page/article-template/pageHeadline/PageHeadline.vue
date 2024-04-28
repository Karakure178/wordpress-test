<script setup>
const props = defineProps({
  headline: String,
});

// ページ読み込んですでに表示領域に入っていたらアニメーションを適用
// intersection observerを使ってる
</script>

<template>
  <section class="pageHeadline">
    <div class="pageHeadline__inner">
      <h1 class="pageHeadline__title">
        {{ props.headline }}
      </h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./../../../../assets/scss/configs/index" as *;
.pageHeadline {
  position: relative;
  transition: transform 0.3s;
  @include L-XL {
    height: 262px; //暫定措置
    margin-top: 86px; // header分
    padding-top: 73px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @include S-M {
    margin-top: 48px;
    padding-top: 43px;
    padding-bottom: 20px;
  }

  &::after,
  &::before {
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    top: 0;
    z-index: -1;
    background-color: $baseColor;
  }

  &::before {
    //right: calc(400px - 83px);
    right: map(100vw, 769, 1500, 167, 317);
    @include L-XL {
      width: 83px;
      // clip-pathを使って三角形を作ってる
      // 参考：https://qiita.com/degudegu2510/items/09f34d4b218c9df6bb57
      clip-path: polygon(0% 0, 100% 100%, 0 100%);
    }
  }

  &::after {
    width: 100%;

    @include L-XL {
      // 1500=400px
      right: map(100vw, 769, 1500, 250, 400);
    }
  }

  &.js-hidden {
    transform: translateX(-100%);
  }
}

.pageHeadline__inner {
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
}

.pageHeadline__title {
  font-weight: 700;
  color: #f5f5f5;

  @include L-XL {
    font-size: 40px;
  }

  @include S-M {
    font-size: 26px;
  }
}
</style>
