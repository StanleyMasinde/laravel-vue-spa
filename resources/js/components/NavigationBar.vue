<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <router-link class="navbar-brand" to="/">Laravel</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav mr-auto"></ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->
            <li v-if="!isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li v-if="!isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item dropdown">
              <router-link
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ user.name }}
                <span class="caret"></span>
              </router-link>

              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" to="#" @click.prevent="logout">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="py-4">
      <div v-if="error" class="alert alert-info" role="alert">
        <strong>Oops 😢 something went wrong please try refreshing the page</strong>
      </div>
      <!-- Loader  -->
      <div class="text-center" v-if="loading">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <!-- Application components will be injected here -->
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.auth;
    },
    user() {
      return this.$store.state.user;
    },
    error() {
     return this.$store.state.error;
    },
    loading() {
     return this.$store.state.loading;
    }
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  },
  mounted() {}
};
</script>

<style>
</style>