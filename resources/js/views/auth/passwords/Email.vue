<template>
  <navigation-bar>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Reset Password</div>
            <div class="card-body">
              <div v-if="emailSent" class="alert alert-success" role="alert">Reset status</div>

              <form
                id="resetRequest"
                @submit.prevent="resetPassword"
                method="POST"
                action="/password/email"
              >
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                  <div class="col-md-6">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      required
                      autocomplete="email"
                      autofocus
                      name="email"
                    />

                    <span class="invalid-feedback" role="alert">
                      <strong></strong>
                    </span>
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">Send Password Reset Link</button>
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
      emailSent: false
    };
  },
  computed: {
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    resetPassword() {
      this.$store.state.loading = true;
      const form = document.querySelector("#resetRequest");
      const formData = new FormData(form);
      this.$http
        .post("/api/password/reset", formData)
        .then(res => {
          console.log(res.response.data);
        })
        .catch(err => {
          console.error(err);
        })
        .finally((this.$store.state.loading = false));
    }
  }
};
</script>

<style>
</style>