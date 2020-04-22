<template>
  <section>
    <div class="ytcard" v-for="(item, index) in videos" :key="index">
      <div class="row">
        <div class="col-1-of-2">
          <div class="ytcard__video">
            <youtube
              :video-id="item.link"
              :player-vars="playerVars"
              :width="'100%'"
              :height="'100%'"
              @playing="handleYtPlay"
              ref="youtube"
            ></youtube>
          </div>
        </div>
        <div class="col-1-of-2">
          <div class="ytcard__content">
            <div class="ytcard__content__title">Movie Title</div>
            <div class="ytcard__content__info">
              <div class="ytcard__content__info--author">Shared by: {{ item.username }}</div>
              <div class="ytcard__content__info--reaction">
                <span>22</span>
                <ion-icon name="heart"></ion-icon>
                <span>33</span>
                <ion-icon name="heart-dislike-outline"></ion-icon>
              </div>
            </div>
            <p class="paragraph">
              Evan You is talking about the state of Vue in 2017
              starting from the first commit in 2013 to becoming
              2nd most starred JavaScript framework on GitHub. In his speech,
              Evan explains his journey and describes plans for the future of Vue.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "YoutubeCard",
  data() {
    return {
      videoId: "lG0Ys-2d4MA",
      playerVars: {
        autoplay: 0
      }
    };
  },

  computed: {
    ...mapState("video", ["videos"])
  },

  methods: {
    handleYtPlay() {}
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/components/_card.scss";
</style>
