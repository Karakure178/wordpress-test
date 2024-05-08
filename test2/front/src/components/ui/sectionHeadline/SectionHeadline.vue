<script setup>
const props = defineProps({
  headline: String,
  date: String,
});
</script>

<template>
  <h2 class="sectionHeadline">
    {{ props.headline }}
  </h2>
  <time class="sectionHeadline__date" :datetime="props.date">{{
    props.date
  }}</time>
</template>

<style lang="scss" scoped>
@use "./../../../assets/scss/configs/index" as *;
.sectionHeadline {
  font-weight: 700;

  @include L-XL {
    font-size: 44px;
    line-height: 60px;
  }

  @include S-M {
    font-size: 18px;
    line-height: 24px;
  }
}

.sectionHeadline__date {
  color: #828282;
  display: block;
  @include L-XL {
    padding-top: 24px;
    font-size: 24px;
  }

  @include S-M {
    padding-top: 11px;
    font-size: 12px;
  }
}
</style>
