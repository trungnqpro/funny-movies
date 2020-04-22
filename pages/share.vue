<template>
  <div class="share-movie">
    <p class="heading-primary">Share Funny Movies</p>
    <div class="form">
      <div class="form__group">
        <label for="link" class="form__label2">Youtube URL:</label>
        <input
          type="text"
          class="form__input"
          placeholder="Youtube Link"
          id="link"
          v-model="shareForm.link"
          ref="youtube"
        />
      </div>

      <div class="form__group--button">
        <button class="btn btn__share" @click.prevent="handleShare">Share</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { getIdFromUrl } from "vue-youtube";

export default {
  name: "Share",

  // prevent non-logged user can access to this page
  middleware: "authenticated",

  data() {
    return {
      shareForm: {
        link: ""
      }
    };
  },

  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },

  methods: {
    ...mapActions("video", ["share"]),

    handleShare() {
      // check user is authenticated incase of user do logout in this page
      if (!this.isAuthenticated) {
        this.$toast.error("You need to login to share videos");
        return;
      }

      // check entered info
      if (!this.shareForm.link) {
        this.$toast.error("Link to share can not be null");
        return;
      }

      // share video
      const videoId = this.$youtube.getIdFromUrl(this.shareForm.link);

      // check entered info
      if (!videoId) {
        this.$toast.error("The link you share is invalid");
        return;
      }

      this.share({ link: videoId }).then(res => {
        if (res.success) {
          this.$toast.success("Share video success");
        } else {
          this.$toast.error("Share video failed");
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/pages/_share.scss";
</style>