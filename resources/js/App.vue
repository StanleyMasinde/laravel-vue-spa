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
      loading: false
    }
  }
};
</script>

<style>
</style>