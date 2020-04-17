<template>
  <div class="page-wrap layout-default">
    <TheHeader />

    <nuxt class="page-content" />
  </div>
</template>

<script>
import TheHeader from "~/components/layout/header/Header";

export default {
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/layout/_layout-default.scss";
</style>
