<script setup>
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

const images = [
  "src/assets/image/parts/work/test1.jpg",
  "src/assets/image/parts/work/test2.jpg",
  "src/assets/image/parts/work/test3.jpg",
  "src/assets/image/parts/work/test4.jpg",
];

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
  <div class="story-visuals">
    <swiper-container
      :pagination="{
        hideOnClick: false,
      }"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide
        v-for="(image, index) in images"
        :key="`slide-${index}`"
        :virtual-index="index"
      >
        <img :src="image" class="swiper__img" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
@use "./Intro.scss";
</style>
