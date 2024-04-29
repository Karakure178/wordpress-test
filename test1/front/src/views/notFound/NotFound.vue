<script setup>
// 404ページの表示
// 存在しないパスを叩かれた場合に表示するページ
import Header from "./../../components/common/header/Header.vue";
</script>

<template>
  <main>
    <Header />
    <section class="notFound">
      <div class="notFound__inner">
        <div class="notFound__textContainer">
          <h1 class="notFound__title">
            お探しのページが見つかりませんでした。
          </h1>
          <p class="notFound__text">
            アクセスされたページは削除されたかURLが変更されたため表示できません。
          </p>
        </div>
        <div class="notFound__image">
          <span class="notFoundImage__caption">「静かな蔓」</span>
          <img src="/assets/image/common/404.png" alt="404" />
        </div>
      </div>
    </section>
    <!-- <Footer /> -->
  </main>
</template>

<style lang="scss" scoped>
@use "./../../assets/scss/configs/index" as *;

.notFound {
  background-color: #f3f3f3;
  @include L-XL {
    padding-top: 73px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @include S-M {
    padding-top: 43px;
    padding-bottom: 20px;
    padding-right: 15px;
    padding-left: 15px;
  }
}

.notFound__inner {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.notFound__textContainer {
  color: #102c57;
  text-align: center;

  @include L-XL {
    padding-top: 50px;
  }

  @include S-M {
    padding-top: 30px;
  }
}

.notFound__title {
  font-size: 24px;
  font-weight: bold;

  @include L-XL {
  }

  @include S-M {
  }
}

.notFound__text {
  font-size: 16px;

  @include L-XL {
    padding-top: 30px;
  }

  @include S-M {
    padding-top: 20px;
  }
}
.notFound__image {
  max-width: 500px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  img {
    box-shadow: 13px 15px 10px -10px #777777;
    width: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
}

.notFoundImage__caption {
  @include L-XL {
    padding-top: 30px;
  }

  @include S-M {
    padding-top: 20px;
  }
}
</style>
