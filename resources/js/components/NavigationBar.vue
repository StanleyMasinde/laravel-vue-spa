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

                <form id="logout-form" action="/logout" method="POST" style="display: none;"></form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="py-4">
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