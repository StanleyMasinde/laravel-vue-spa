<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand text-muted" to="/">My spa</router-link>
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link class="nav-link text-muted link" to="/login">Login</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link text-muted link" to="/register">Register</router-link>
        </li>
      </ul>
    </nav>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: "Welcome",
    titleTemplate: "%s | My spa",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  }
};
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>