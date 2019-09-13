<template>
  <div class="flex-center position-ref full-height">
    <div data-form-section class="content">
      <form @submit.prevent action="/register" method="post">
        <label>Name</label>
        <input class="app-input" v-model="name" type="text" name="name" />
        <label>Email</label>
        <input class="app-input" v-model="email" type="text" name="email" />
        <label>Choose password</label>
        <input class="app-input" v-model="password" type="text" name="password" />
        <label>Confirm Password</label>
        <input class="app-input" v-model="password_confirm" type="text" name="password_confirm" />

        <button data-sign>Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Create an account",
    // override the parent template and just use the above title only
    titleTemplate: null
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirm: null
    };
  }
};
</script>

<style lang="scss">
input {
  &.app-input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
}
div {
  &[data-form-section] {
    text-align: left!important;
    width: 40%!important;
  }
}
button {
  &[data-sign] {
    padding: 15px;
    background-color: teal;
    color: white;
    border: none;
    border-radius: 5px;
  }
}
</style>