<template>
  <navigation-bar>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Login</div>

            <div class="card-body">
              <div v-if="error" class="alert alert-danger" role="alert">
                <strong>{{ message }}</strong>
              </div>
              <form @submit.prevent="login" id="loginForm" method="POST" action="/login">
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                  <div class="col-md-6">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      value
                      required
                      autocomplete="email"
                      autofocus
                    />

                    <span class="invalid-feedback" role="alert">
                      <strong></strong>
                    </span>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                  <div class="col-md-6">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      required
                      autocomplete="current-password"
                    />

                    <span class="invalid-feedback" role="alert">
                      <strong></strong>
                    </span>
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
  </navigation-bar>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      message: null,
      attempts: 0
    };
  },
  methods: {
    login() {
      const form = document.querySelector("#loginForm");
      const formData = new FormData(form);

      this.$http
        .post("/api/auth/login", formData)
        .then(res => {
          this.$store.state.token = localStorage.token = res.data;
          this.$store.commit("login", res.data);
        })
        .catch(err => {
          this.message = err.response.data.message;
          this.error = true;
        })
        .finally(() => {
          setTimeout(() => {
            this.error = false;
          }, 3000);
        });
    }
  }
};
</script>

<style>
</style>