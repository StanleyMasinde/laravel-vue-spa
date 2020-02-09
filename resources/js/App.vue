<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <router-link class="navbar-brand text-muted" to="/">My spa</router-link>
      <ul class="navbar-nav ml-auto mt-2 pr-5 mt-lg-0">
        <li class="nav-item active" v-if="!auth">
          <router-link class="nav-link text-muted link" to="/login">Login</router-link>
        </li>
        <li class="nav-item active" v-if="!auth">
          <router-link class="nav-link text-muted link" to="/register">Register</router-link>
        </li>
        <li class="nav-item dropdown active" v-if="auth">
          <a
            class="nav-link link dropdown-toggle text-muted"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >{{ user.name }}</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/home">Home</router-link>
            <a @click.prevent="logout" class="dropdown-item" href="#">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: "Welcome",
    titleTemplate: "%s | My spa",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  },
  computed: {
    auth() {
      return this.$store.getters.auth;
    },
    user() {
      return this.$store.state.user;
    }
  },
  beforeCreate() {
    if (localStorage.token !== "") {
      axios
        .get("/api/user")
        .then((res) => {
          this.$store.commit("sessionAvailable", res.data);
        })
        .catch(() => {
          this.$store.commit("noSession");
        });
    } else {
      this.$store.commit("noSession");
    }
  }
};
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>