<script setup>
import { register } from "swiper/element/bundle";
import { ref } from "vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

import ReadButton from "../../../ui/button/common/CommonButton.vue";

import Explantion from "./Explantion.vue";
import { workData } from "./data.js";

const items = ref(workData.work);
const commonUrl = ref(workData.commonUrl);
</script>

<template>
  <section id="work" class="work">
    <div class="work__inner">
      <h2 class="work__heading">Work</h2>
      <swiper-container
        :pagination="{
          hideOnClick: false,
        }"
        :navigation="true"
        class="mySwiper"
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
  </section>
</template>

<style lang="scss" scoped>
@use "./Work.scss";
</style>
