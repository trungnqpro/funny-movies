<template>
  <div class="page-404">
    <h1>Page not found!</h1>
  </div>
</template>

<script>
export default {
  layout: "empty",

  props: ["error"],

  mounted() {
    console.log("[error] 404 mounted");
  }
};
</script>

<style lang="scss" scoped>
.page-404 {
  padding: 2rem;
}
</style>

