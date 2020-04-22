<template>
  <div class="container">
    <YtCard />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import YtCard from "~/components/page/home/YtCard.vue";

export default {
  name: "Home",

  components: {
    YtCard
  },

  methods: {
    ...mapActions("video", ["getVideos"])
  },

  mounted() {
    // get list videos when page loaded
    this.getVideos();
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/pages/_home.scss";
</style>