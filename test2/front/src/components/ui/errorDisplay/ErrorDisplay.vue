<script setup>
// 404ページの表示
</script>

<template>
  <section class="errorDisplay">
    <div class="errorDisplay__inner">
      <div class="errorDisplay__textContainer">
        <h1 class="errorDisplay__title">404</h1>
        <p class="errorDisplay__text">お探しのページが見つかりませんでした。</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./../../../assets/scss/configs/index" as *;
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

.errorDisplay__inner {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.errorDisplay__textContainer {
  color: #102c57;
  text-align: center;
  border: #102c57 solid 1px;
  border-radius: 8px;

  @include L-XL {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @include S-M {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.errorDisplay__title {
  margin-bottom: 20px;
  font-weight: bold;

  @include L-XL {
    font-size: 100px;
  }

  @include S-M {
    font-size: 60px;
  }
}

.errorDisplay__text {
  line-height: 1.5;

  @include L-XL {
    font-size: 30px;
  }

  @include S-M {
    font-size: 20px;
  }
}
</style>
