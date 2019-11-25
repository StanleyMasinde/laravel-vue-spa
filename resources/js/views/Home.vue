<template>
  <h1>Awesome 🤠🤠 You are logged in as {{ user.name }}. Please consider contributing to make this project better. 😊</h1>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style>
</style>