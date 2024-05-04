<script setup>
const props = defineProps({
  headline: String,
});
</script>

<template>
  <h2 class="sectionHeadline">
    {{ props.headline }}
  </h2>
</template>

<style lang="scss" scoped>
@use "./../../../assets/scss/configs/index" as *;
.sectionHeadline {
  font-weight: 700;
  border-bottom: #252252 1px solid;

  @include L-XL {
    font-size: 24px;
    line-height: 38px;
  }

  @include S-M {
    font-size: 21px;
    line-height: 35px;
  }
}
</style>
