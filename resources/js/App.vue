<template>
  <main>
    <loader v-if="loading"></loader>
    <router-view />
  </main>
</template>

<script>
export default {
  data() {
    return {
      loading: this.$store.state.loading
    }
  }, mounted() {
    //
  }
};
</script>

<style>
</style>