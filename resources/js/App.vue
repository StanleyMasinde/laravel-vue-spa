<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app :dark="dark">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">VLSPA</v-list-item-title>
          <v-list-item-subtitle>awesome app</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-if="auth == 'true'" link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Welcome</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="auth == 'true'" link to="/home">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Welcome</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="auth == 'false'" link to="/login">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="auth == 'false'" link to="/register">
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
      <v-toolbar-title>Makaazi</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <div class="hidden-sm-and-down">
        <v-btn v-if="auth == 'true'" class="text-capitalize" text to="/">Welcome Page</v-btn>
        <v-btn v-if="auth == 'true'" class="text-capitalize" text to="/home">Home</v-btn>
        <v-btn v-if="auth == 'false'" class="text-capitalize" text to="/login">Login</v-btn>
        <v-btn v-if="auth == 'false'" class="text-capitalize" text to="/register">Register</v-btn>
      </div>
      <v-btn :dark="dark" icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-menu
        v-if="auth == 'true'"
        offset-y
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn :dark="dark" icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ user.name }}</v-list-item-title>
                <v-list-item-subtitle>Your Awesome bio</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn @click="logout" class="red--text" icon>
                  <v-icon>mdi-logout</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action></v-list-item-action>
              <v-list-item-title>About Me</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-content app>
      <v-container fluid>
        <!-- <v-skeleton-loader v-if="loading" class="mx-auto" max-width="300" type="card"></v-skeleton-loader> -->
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Welcome",
    // all titles will be injected into this template
    titleTemplate: "%s | Makaazi",
    meta: [{ name: "theme-color", content: "#424242" }]
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleTheme() {
      this.$store.commit("changetheme");
    },
    logout() {
      axios.post("/logout").then(() => {
        location.replace("/");
      });
    }
  },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
    loading() {
      return this.$store.state.loading;
    },
    auth() {
      return this.$store.state.auth;
    },
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    axios.get("user-info").then(res => {
      this.$store.commit("updateuser", res.data);
    });
  }
};
</script>

<style>
</style>