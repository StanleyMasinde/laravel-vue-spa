<template>
  <div class="flex-center position-ref full-height">
    <div class="code">404</div>

    <div class="message" style="padding: 10px;">Page not found  or Broken link <router-link to="/">Go Home</router-link></div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Page Not Found"
  }
};
</script>
<style>
html,
body {
  background-color: #fff;
  color: #636b6f;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
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

.code {
  border-right: 2px solid;
  font-size: 26px;
  padding: 0 15px 0 15px;
  text-align: center;
}

.message {
  font-size: 18px;
  text-align: center;
}
</style>