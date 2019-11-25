<template>
  <main>
    <v-layout justify-center fill-height align-center mt-5>
      <v-flex xs12 md5>
        <v-alert type="warning" :value="warning">Request Failed</v-alert>
        <v-form data-register-form>
          <v-text-field
            prepend-icon="mdi-email"
            name="name"
            label="Full name"
            id="registerName"
            type="text"
            :loading="loading"
            v-validate="'required'"
            :error-messages="errors.collect('name')"
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-account"
            name="email"
            label="Email"
            id="loginEmail"
            type="email"
            :loading="loading"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
          ></v-text-field>
          <v-text-field
            ref="password"
            name="password"
            label="Enter your password"
            min="8"
            :append-icon="showValue ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showValue = !showValue"
            counter
            :type="showValue ? 'password' : 'text'"
            prepend-icon="mdi-textbox-password"
            :loading="loading"
            v-validate="'required|min:8'"
            :error-messages="errors.collect('password')"
            v-model="password"
          ></v-text-field>

          <v-text-field
            name="password_confirmation"
            label="Confirm Password"
            min="8"
            :append-icon="showValue ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showValue = !showValue"
            counter
            :type="showValue ? 'password' : 'text'"
            prepend-icon="mdi-textbox-password"
            :loading="loading"
            v-validate="'required|confirmed:password'"
            :error-messages="errors.collect('password_confirmation')"
            data-vv-as="password confirmation"
            v-model="password_confirm"
          ></v-text-field>

          <v-btn @click="register" large :loading="loading" :dark="dark">Sign up</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: "Create an account"
    // override the parent template and just use the above title only
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirm: null,
      showValue: true,
      warning: false
    };
  },
  methods: {
    register() {
      const formData = new FormData(
        document.querySelector("[data-register-form]")
      );
      axios
        .post("/register", formData)
        .then(res => {
          location.replace("/");
        })
        .catch(err => {
          this.warning = true;
          setTimeout(() => {
            this.warning = false;
          }, 5000);
        });
    }
  },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style scoped>
main {
  height: 70vh !important;
}
</style>