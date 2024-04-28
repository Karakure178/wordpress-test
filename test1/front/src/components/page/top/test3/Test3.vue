<script setup>
import { register } from "swiper/element/bundle";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Explantion from "../test3/Explantion.vue";

register();

// Swiperのインスタンスが返ってくる
const onSwiper = (swiper) => {
  console.log("swiper", swiper);
};

// スライド位置が変更された時に呼ばれる
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<template>
  <swiper-container
    :pagination="{
      hideOnClick: false,
      renderBullet: (index, className) => {
        return `<span class='${className} workPagination'>${index + 0}</span>`;
      },
    }"
    class="meSwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper-container>
  <Explantion />
</template>

<style lang="scss" scoped>
@use "./Work.scss";

.meSwiper {
  padding-top: 50px;

  &::part(pagination) {
    background-color: red;
  }
}

.work__explantion {
  background-color: aqua;
  :deep(.workExplantion__title) {
    color: red;
  }
}
.workExplantion__title {
  color: red;
}
</style>
