<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app :dark="dark">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title" v-text="app_name">
          </v-list-item-title>
          <v-list-item-subtitle>
            awesome app
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          link
          to="/"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Welcome</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/login"
        >
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/register"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :dark="dark">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="app_name"></v-toolbar-title>

      <div class="flex-grow-1"></div>

      <div class="hidden-sm-and-down">
        <v-btn class="text-capitalize" text to="/">Welcome Page</v-btn>
        <v-btn class="text-capitalize" text to="/login">Login</v-btn>
        <v-btn class="text-capitalize" text to="/register">Register</v-btn>
      </div>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-progress-linear v-if="loading" :dark="dark" indeterminate></v-progress-linear>
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
  methods: {
    toggleTheme() {
      this.$store.commit("changetheme");
    }
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