<template>
  <main>
    <v-layout justify-center fill-height align-center mt-5>
      <v-flex xs12 md4>
        <v-alert
          type="warning"
          :value="warning"
        >Login failed</v-alert>
        <v-form>
          <v-text-field
            prepend-icon="mdi-email"
            name="email"
            label="Email"
            id="loginEmail"
            type="email"
            :loading="loading"
            v-model="email"
             v-validate="'required|email'"
            :error-messages="errors.collect('email')"
          ></v-text-field>
          <v-text-field
            name="password"
            label="Enter your password"
            min="8"
            :append-icon="showValue ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showValue = !showValue"
            value="Password"
            counter
            :type="showValue ? 'password' : 'text'"
            prepend-icon="mdi-textbox-password"
            :loading="loading"
            v-model="password"
            v-validate="'required'"
            :error-messages="errors.collect('password')"
          ></v-text-field>

          <v-btn @click="login" large :loading="loading" :dark="dark">Login</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: "Login into your account"
    // override the parent template and just use the above title only
  },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    login() {
      axios
        .post("login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          // the login was probaly correct
          location.replace('/')
        })
        .catch(err => {
          this.warning = true;
          setTimeout(() => {
            this.warning = false;
          }, 5000);
        });
    }
  },
  data() {
    return {
      email: null,
      password: null,
      showValue: true,
      warning: false,
      error_message: null
    };
  }
};
</script>

<style scoped>
main {
  height: 70vh !important;
}
</style>