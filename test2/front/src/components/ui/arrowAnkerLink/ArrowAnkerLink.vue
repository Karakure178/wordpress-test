<script setup>
const props = defineProps({
  href: String,
  ankerText: String,
});
</script>

<template>
  <a class="arrowAnkerLink" :href="props.href">
    {{ props.ankerText }}
    <span class="arrowAnkerLink__deco"></span>
  </a>
</template>

<style lang="scss" scoped>
@use "./../../../assets/scss/configs/index" as *;
.arrowAnkerLink {
  display: block;
  position: relative;
  color: #4793af;
  font-weight: 400;
  transition: opacity 0.3s;
  opacity: 1;

  @include L-XL {
    font-size: 16px;
  }

  @include S-M {
    font-size: 12px;
  }

  @include hover-and-active {
    opacity: 0.8;
    text-decoration: underline;
  }
}

.arrowAnkerLink__deco {
  background-image: url("/assets/image/common/slanting-arrow.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 15px;
  height: 15px;
  display: inline-block;
}
</style>
