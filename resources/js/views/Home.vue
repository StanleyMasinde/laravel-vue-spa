<template>
  <div class="flex-center position-ref full-height">
    <div class="top-right links">
      <router-link exact-active-class="link-active" to="/">Home</router-link>
      <router-link exact-active-class="link-active" to="/login">Login</router-link>
      <router-link exact-active-class="link-active" to="/register">Register</router-link>
    </div>

    <div class="content">
      <div class="title m-b-md">Laravel Vue spa</div>
      <div class="links">
        <a href="https://laravel.com/docs">Laravel Docs</a>
        <a href="https://vuejs.org">Vue JS</a>
        <a href="https://router.vuejs.org">Vue Router</a>
        <a href="https://stannlee.github.io/vue-laravel-spa/">Docs</a>
        <a href="https://laravel-news.com">Laravel News</a>
        <a href="https://github.com/stannlee/vue-laravel-spa">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
      title: 'Laravel vue SPA',
      // override the parent template and just use the above title only
      titleTemplate: null
    }
};
</script>


<style >
html,
body {
  background-color: #fff;
  color: #636b6f;
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  height: 100vh;
  margin: 0;
}

.full-height {
  height: 100vh;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-ref {
  position: relative;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.content {
  text-align: center;
}

.title {
  font-size: 84px;
}

.links > a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}

.m-b-md {
  margin-bottom: 30px;
}
.link-active {
  color: teal !important;
  text-decoration: underline!important;
  font-weight: 900!important;
}
</style>