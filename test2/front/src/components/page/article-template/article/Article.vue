<script setup>
import axios from "axios";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";

import { onMounted, ref, watch, nextTick } from "vue";

import ArrowAnkerLink from "@/components/ui/arrowAnkerLink/ArrowAnkerLink.vue";
import ErrorDisplay from "@/components/ui/errorDisplay/ErrorDisplay.vue";
import SectionHeadline from "@/components/ui/sectionHeadline/SectionHeadline.vue";

const props = defineProps({
  headline: String,
});

// axiosを使ってwordpressのAPIからデータを取得する
// データが取れたかどうかを待つ必要がある
let is404 = ref(0);

// wordpressのAPIから取得したデータ(記事周り)を格納する
let page = ref(null);
onMounted(() => {
  //const response = axios.get("/posts");
  const response = axios.get("http://localhost:8000/wp-json/wp/v2/posts/8");
  console.log(response);
  response
    .then((res) => {
      is404.value = 1;
      console.log(res);
      page.value = res.data;
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
  if (is404.value === 1) {
    codeHighLight();
  }
});

// コードハイライト系
// 確実にDOMが描画された後に実行するためにnextTickを使う
// nextTickを使う関係上、async functionを使う必要がある
// 参考：https://zenn.dev/kazu1/articles/8e02c3aa3269b9
async function codeHighLight() {
  await nextTick();
  const codes = document.querySelectorAll("code");
  console.log(codes);
  codes.forEach((code) => {
    hljs.highlightElement(code);
  });
}
</script>

<template>
  <div v-if="is404 === 0">loading...</div>
  <article v-else-if="is404 === 1">
    <section class="article">
      <div class="article__inner">
        <SectionHeadline :headline="props.headline" />
        <div class="article__container" v-html="page.content.rendered"></div>
        <ArrowAnkerLink href="#work" anker-text="WORKS" />
        <pre>
          <code class="javascript">
            function test() {
              console.log("hello");
            }
          </code>
        </pre>
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

.article__container {
  .wp-block-ub-tabbed-content-block {
    @include L-XL {
    }

    @include S-M {
    }
  }
}
</style>
