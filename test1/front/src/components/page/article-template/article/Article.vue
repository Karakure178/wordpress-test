<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";

import ArrowAnkerLink from "@/components/ui/arrowAnkerLink/ArrowAnkerLink.vue";
import ErrorDisplay from "@/components/ui/errorDisplay/ErrorDisplay.vue";
import SectionHeadline from "@/components/ui/sectionHeadline/SectionHeadline.vue";

const props = defineProps({
  headline: String,
});

// axiosを使ってwordpressのAPIからデータを取得する
// データが取れたかどうかを待つ必要がある
let is404 = ref(0);
onMounted(() => {
  const response = axios.get("http://localhost:8000/wp-json/wp/v2/posts");
  // const response = axios.get("http://localhost:8001/wp-json/wp/v2/posts");
  console.log(response);
  response
    .then((res) => {
      is404.value = 1;
      console.log(res);
    })
    .catch((error) => {
      // サーバーからの応答が遅すぎる場合は404の画面を出すために切り分け
      console.log("サーバーが立ち上がっていません");
      is404.value = -1;
    });
});

// もし表示されなかったら関数実行する等であればここに書く
// たとえば表示されなくてリダイレクトする場合とか
watch(is404, (newVal) => {
  console.log("hello", is404.value);
});
</script>

<template>
  <div v-if="is404 === 0">loading...</div>
  <article v-else-if="is404 === 1">
    <section class="article">
      <div class="article__inner">
        <SectionHeadline :headline="props.headline" />
        <ArrowAnkerLink
          href="#work"
          anker-text="今回はNext.jsと連携をさせてみましたが、Nuxt.jsだったり別のFWとも同様の構成で連携することができます！"
        />
      </div>
    </section>
  </article>
  <ErrorDisplay v-else />
</template>

<style lang="scss" scoped>
@use "./../../../../assets/scss/configs/index" as *;
.article {
  @include L-XL {
    padding-top: 73px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @include S-M {
    padding-top: 43px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
  }
}

.article__inner {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
</style>
