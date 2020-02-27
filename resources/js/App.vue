<template>
  <v-app>
    <v-navigation-drawer temporary v-model="mainDrawer.show" :mini-variant="mainDrawer.mini" app>
      <v-list>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>

        <v-list-item to="/login">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>

        <v-list-item to="/register">
          <v-list-item-icon>
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-btn class="d-none d-sm-flex" icon @click.prevent="$store.commit('miniDrawer')">
        <v-icon>{{ mainDrawer.mini ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.prevent="$store.commit('changeDrawer')"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $store.state.appName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
    <v-bottom-navigation app color="primary" grow>
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn to="/about">
        <span>About</span>
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>

      <v-btn to="/login">
        <span>Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>

      <v-btn to="/register">
        <span>Register</span>
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  computed: {
    mainDrawer() {
      return this.$store.state.mainDrawer;
    }
  }
};
</script>

<style>
</style>