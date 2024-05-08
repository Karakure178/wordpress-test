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
      <div class="pageHedeline__img">
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="/assets/image/common/404.png"
          />
          <img
            src="/assets/image/common/404.png"
            alt="ページヘッドラインの画像"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./../../../../assets/scss/configs/index" as *;
.pageHeadline {
  position: relative;
  transition: transform 0.3s;
  @include L-XL {
    height: 430px; //暫定措置
    margin-top: 86px; // header分
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
    background-color: #d9d9d9;
  }

  &::before {
    // 以下リニアmapじゃないとうまく動かない
    right: map(100vw, 769, 1440, 88, 228);
    @include L-XL {
      width: 162px;
      // clip-pathを使って三角形を作ってる
      // 参考：https://qiita.com/degudegu2510/items/09f34d4b218c9df6bb57
      //clip-path: polygon(-10% 0%, 0 0, 100% 100%, -10% 100%);
      clip-path: polygon(-10% 0, 100% 0, 0 100%, -10% 100%);
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
  color: #252525;

  @include L-XL {
    padding-top: 170px;
    font-size: 60px;
  }

  @include S-M {
    font-size: 26px;
  }
}

.pageHedeline__img {
  position: absolute;
  right: 0;

  @include L-XL {
    bottom: -59px; // 次セクションでmargin-top設定すること
    max-width: 320px;
    clip-path: polygon(0 100%, 38% 0, 100% 0, 100% 100%);
  }
  img {
    width: 100%;
  }
}
</style>
