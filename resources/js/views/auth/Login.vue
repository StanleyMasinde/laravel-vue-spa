<template>
  <div class="container">
    <div class="row justify-content-center align-content-center almost-full-height">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>

          <div class="card-body">
            <form @submit.prevent="login" id="loginForm" method="POST" action="/login" novalidate>
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    :class="errors.email ? 'is-invalid': ''"
                    name="email"
                    value
                    required
                    autocomplete="email"
                    autofocus
                  />

                  <div class="invalid-feedback">{{ errors.email ? errors.email[0]: '' }}</div>
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    :class="errors.password ? 'is-invalid': ''"
                    name="password"
                    required
                    autocomplete="current-password"
                  />

                  <div class="invalid-feedback">{{ errors.password ? errors.password[0]: '' }}</div>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-6 offset-md-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember" />

                    <label class="form-check-label" for="remember">Remember Me</label>
                  </div>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>

                  <router-link class="btn btn-link" to="/password/reset">Forgot Your Password?</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Login"
  },
  data() {
    return {
      errors: {},
      message: null,
      attempts: 0
    };
  },
  methods: {
    login() {
      this.$store.state.loading = true;
      const form = document.querySelector("#loginForm");
      const formData = new FormData(form);

      axios
        .post("/login", formData)
        .then(res => {
          this.$store.commit("login", res);
        })
        .catch(err => (this.errors = err.response.data.errors))
        .finally(() => (this.$store.state.loading = false));
    }
  },
  created() {
    axios
      .get("/airlock/csrf-cookie")
      .then(() => {})
      .catch(err => console.error(`Something went wrong: ${err}`));
  }
};
</script>

<style>
</style>