<template>
  <div class="flex-center position-ref full-height">
    <div class="top-right links">
      <!-- if the user is logged in -->
      <router-link v-if="isLoggedIn" to="/home">Home</router-link>
      <!-- if the user is not logged in -->
      <router-link to="/login">Login</router-link>

      <!-- @if (Route::has('register')) -->
      <router-link to="/register">Register</router-link>
      <!-- @endif -->
      <!-- @endauth -->
    </div>
    <!-- @endif -->
    <div class="content">
      <div class="title m-b-md">Laravel</div>

      <div class="links">
        <a href="https://laravel.com/docs">Docs</a>
        <a href="https://laracasts.com">Laracasts</a>
        <a href="https://laravel-news.com">News</a>
        <a href="https://blog.laravel.com">Blog</a>
        <a href="https://nova.laravel.com">Nova</a>
        <a href="https://forge.laravel.com">Forge</a>
        <a href="https://vapor.laravel.com">Vapor</a>
        <a href="https://github.com/laravel/laravel">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.auth;
    }
  },
  mounted() {}
};
</script>

<!-- Styles -->
        <style scoped>
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

.links > a,
.link {
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
</style>