<script setup>
import { register } from "swiper/element/bundle";
import { ref } from "vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ReadButton from "../../../ui/button/common/CommonButton.vue";

import Explantion from "./Explantion.vue";
import { workData } from "./data.js";

const items = ref(workData.work);
const commonUrl = ref(workData.commonUrl);

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
      class="myswiper"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="item.id"
        class="work__carousel"
        :virtual-index="index"
      >
        <div class="work__image">
          <img :src="commonUrl + item.src" :alt="item.alt" />
        </div>
        <Explantion :title="item.title" :date="item.date" />
        <ReadButton
          :href="item.href"
          class-name="work__button"
          button-text="read code"
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
@use "./Work.scss";

// .story-visuals ::v-deep .swiper {
//   color: #234567;
// }

// // https://zenn.dev/kibe/articles/afd8162d5f6fe9
// .myswiper {
//   :deep(.swiper-pagination-bullet) {
//     background: #234567;
//   }
// }
// .myswiper :deep(.swiper) {
//   background: #234567;
// }
</style>
