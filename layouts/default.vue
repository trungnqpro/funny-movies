<template>
  <div class="layout-default">
    <TheHeader />

    <nuxt />
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
