<template>
  <div class="header">
    <div class="row">
      <div class="col-1-of-2">
        <n-link class="header__logo" to="/">
          <IconHome />
        </n-link>
        <div class="header__title">Funny Movies</div>
      </div>
      <div class="col-1-of-2">
        <div class="header__signin" v-if="isAuthenticated">
          <div class="header__signin--username">Welcome {{ username }}</div>
          <button
            class="btn btn--animated btn--share"
            @click.prevent="handleRedirectShare"
          >Share a movie</button>
          <button class="btn btn--animated btn--logout" @click.prevent="handleLogout">Logout</button>
        </div>

        <div class="header__anynomous" v-if="!isAuthenticated">
          <div class="signin__form">
            <div class="form">
              <div class="form__group">
                <input
                  type="text"
                  class="form__input"
                  placeholder="User name"
                  id="username"
                  v-model="loginForm.username"
                />
                <label for="username" class="form__label">User name</label>
              </div>
              <div class="form__group">
                <input
                  type="password"
                  class="form__input"
                  placeholder="password"
                  id="password"
                  v-model="loginForm.password"
                />
                <label for="password" class="form__label">Password</label>
              </div>
              <div class="form__group">
                <button class="btn btn__signin" @click.prevent="handleLoginReg('login')">Login</button>
              </div>
              <div class="form__group">
                <button class="btn btn__signin" @click.prevent="handleLoginReg('register')">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconHome from "~/assets/svg/icon-home.svg?inline";

import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Header",

  data() {
    return {
      isLoginMode: true,
      loginForm: {
        username: "",
        password: ""
      }
    };
  },

  components: {
    IconHome
  },

  computed: {
    ...mapGetters("auth", ["isAuthenticated", "username"]),
    ...mapState("auth", ["username"])
  },

  methods: {
    ...mapActions("auth", ["login", "logout", "register"]),

    /**
     * login or register here, depends on mode
     */
    handleLoginReg(_mode) {
      if (!this.loginForm.username || !this.loginForm.password) {
        this.$toast.error("Username or Password can not be null");
        return;
      }
      if (_mode == "login") {
        this.login(this.loginForm).then(res => {
          if (res.success) {
            this.$toast.success("Login success");
          } else {
            this.$toast.error("Login failed");
          }
        });
      } else if (_mode == "register") {
        this.register(this.loginForm).then(res => {
          if (res.success) {
            this.$toast.success("Register success");
          } else {
            this.$toast.error("Register failed");
          }
        });
      }
    },

    /**
     * do logout here
     */
    handleLogout() {
      this.logout().then(res => {
        this.$toast.success("Logout success");
        this.$router.push("/");
      });
    },

    /**
     * redirect to share page
     */
    handleRedirectShare() {
      window.location.href = "/share";
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/layout/_header.scss";
</style>
