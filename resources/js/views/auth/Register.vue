<template>
  <navigation-bar>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>

          <div class="card-body">
            <div
              v-for="(error, index) in errors"
              :key="index"
              class="alert alert-danger"
              role="alert"
            >
              <strong>{{ error[0] }}</strong>
            </div>
            <form @submit.prevent="register" id="registerForm" method="POST" action="register">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    name="name"
                    autofocus
                    autocomplete="family-name"
                  />

                  <span class="invalid-feedback" role="alert">
                    <strong></strong>
                  </span>
                </div>
              </div>

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
                    autocomplete="new-password"
                  />

                  <span class="invalid-feedback" role="alert">
                    <strong></strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password-confirm"
                  class="col-md-4 col-form-label text-md-right"
                >Confirm Password</label>

                <div class="col-md-6">
                  <input
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    name="password_confirmation"
                    required
                    autocomplete="new-password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
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
      errors: {}
    };
  },
  methods: {
    register() {
      this.$store.state.loading = true;
      const form = document.querySelector("#registerForm");
      const formData = new FormData(form);

      this.$http
        .post("/api/auth/register", formData)
        .then(res => {
          this.$store.state.token = localStorage.token = res.data;
          this.$store.commit("login", res.data);
        })
        .catch(err => {
          this.errors = err.response.data.errors;
        })
        .finally(() => {
          this.$store.state.loading = false;
        });
    }
  },
  mounted() {}
};
</script>

<style>
</style>