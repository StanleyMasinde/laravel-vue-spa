<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer v-model="drawer" app :dark="dark">
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app :dark="dark">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="app_name"></v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    app_name() {
      return this.$store.state.app_name;
    },
    dark() {
      return this.$store.state.dark;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  mounted() {}
};
</script>

<style>
</style>