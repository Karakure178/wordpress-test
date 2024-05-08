<script setup>
// import Footer from "./../../components/common/footer/Footer.vue";
import Header from "./../../components/common/header/Header.vue";
import Work from "./../../components/page/top/work/Work.vue";

import Article from "@/components/page/article-template/article/Article.vue";
import PageHeadline from "@/components/page/article-template/pageHeadline/PageHeadline.vue";
</script>

<template>
  <main>
    <Header />
    <PageHeadline headline="Work" />

    <Article headline="Work" />
    <!-- <Work /> -->
    <!-- <Footer /> -->
  </main>
</template>

<style lang="scss" scoped></style>
