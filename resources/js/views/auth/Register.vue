<template>
  <div class="container">
    <div class="row justify-content-center align-content-center almost-full-height">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>

          <div class="card-body">
            <form
              @submit.prevent="register"
              id="registerForm"
              method="POST"
              action="register"
              novalidate
            >
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    :class="errors.name ? 'is-invalid' : ''"
                    name="name"
                    autofocus
                    autocomplete="family-name"
                  />

                  <div class="invalid-feedback">{{ errors.name ? errors.name[0] : ''}}</div>
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    :class="errors.email ? 'is-invalid' : ''"
                    name="email"
                    value
                    required
                    autocomplete="email"
                  />

                  <div class="invalid-feedback">{{ errors.email ? errors.email[0] : ''}}</div>
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    :class="errors.password ? 'is-invalid' : ''"
                    class="form-control"
                    name="password"
                    required
                    autocomplete="new-password"
                  />

                  <div class="invalid-feedback">{{ errors.password ? errors.password[0] : ''}}</div>
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
                    :class="errors.password_confirmation ? 'is-invalid' : ''"
                    name="password_confirmation"
                    required
                    autocomplete="new-password"
                  />
                </div>

                <div
                  class="invalid-feedback"
                >{{ errors.password_confirmation ? errors.password_confirmation[0] : ''}}</div>
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
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Register"
  },
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

      axios
        .post("/register", formData)
        .then(res => {
          this.$store.commit("login", res);
        })
        .catch(err => (this.errors = err.response.data.errors));
    }
  },
  mounted() {}
};
</script>

<style>
</style>