<template>
  <div class="flex-center position-ref full-height">
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
    title: "Laravel vue SPA",
    // override the parent template and just use the above title only
    titleTemplate: null
  }
};
</script>


<style scoped>
html,
body {
  background-color: #fff !important;
  color: #636b6f !important;
  font-family: "Nunito", sans-serif !important;
  font-weight: 200 !important;
  height: 100vh !important;
  margin: 0 !important;
}

.full-height {
  height: 100vh !important;
}

.flex-center {
  align-items: center !important;
  display: flex !important;
  justify-content: center !important;
}

.position-ref {
  position: relative !important;
}

.top-right {
  position: absolute !important;
  right: 10px !important;
  top: 18px !important;
}

.content {
  text-align: center !important;
}

.title {
  font-size: 84px !important;
}

.links > a {
  color: #636b6f !important;
  padding: 0 25px !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  letter-spacing: 0.1rem !important;
  text-decoration: none !important;
  text-transform: uppercase !important;
}

.m-b-md {
  margin-bottom: 30px;
}
</style>