<template>
  <div class="flex-center position-ref full-height">
    <div class="top-right links">
      <router-link exact-active-class="link-active" to="/">Home</router-link>
      <router-link exact-active-class="link-active" to="/login">Login</router-link>
      <router-link exact-active-class="link-active" to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
      title: 'Create an account',
      // override the parent template and just use the above title only
      titleTemplate: null
    }
};
</script>

<style>
</style>