<script setup>
import ArrowAnkerLink from "@/components/ui/arrowAnkerLink/ArrowAnkerLink.vue";
import SectionHeadline from "@/components/ui/sectionHeadline/SectionHeadline.vue";
const props = defineProps({
  headline: String,
});
</script>

<template>
  <article>
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
