<template>
  <div class="header">
    <div class="row">
      <div class="col-1-of-2">
        <div class="header__left">
          <div class="header__logo">Logo</div>
          <div class="header__title">Funny movies</div>
        </div>
      </div>
      <div class="col-2-of-2">
        <div class="header__right">
          <div class="header__right--signed">
            <div class="header__right--username">someone@gmail.com</div>
            <div class="btn btn--share">Share a movie</div>
            <button class="btn btn--logout">Logout</button>
          </div>
          <div class="header__right--anynomous">
            <div class="signin__form">
              <div class="form">
                <input type="text" class="form__input" placeholder="email" />
                <input type="text" class="form__input" placeholder="password" />
                <button class="btn btn__signin">Login/Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
@import "~/assets/scss/layout/_header.scss";
</style>
