<template>
  <div class="flex-center position-ref full-height">
    <div data-form-section class="content">
      <form @submit.prevent action="/register" method="post">
        <label>Email</label>
        <input class="app-input" v-model="email" type="text" name="email" />
        <label>Choose password</label>
        <input class="app-input" v-model="password" type="text" name="password" />

        <button data-sign>Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Login into your account",
    // override the parent template and just use the above title only
    titleTemplate: null
  },
  data() {
    return {
      email: null,
      password: null
    };
  }
};
</script>

<style>
</style>