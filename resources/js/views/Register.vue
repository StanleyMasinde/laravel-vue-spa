<template>
  <main>
    <v-layout justify-center fill-height align-center mt-5>
      <v-flex xs12 md5>
        <v-alert
          type="warning"
          :value="warning"
        >Ooops This Function is not ready yet have to create your own</v-alert>
        <v-form>
          <v-text-field
            prepend-icon="mdi-email"
            name="name"
            label="Full name"
            id="registerName"
            type="text"
            :loading="loading"
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-account"
            name="email"
            label="Email"
            id="loginEmail"
            type="email"
            :loading="loading"
          ></v-text-field>
          <v-text-field
            name="password"
            label="Enter your password"
            min="8"
            :append-icon="showValue ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showValue = !showValue"
            counter
            :type="showValue ? 'password' : 'text'"
            prepend-icon="mdi-textbox-password"
            :loading="loading"
          ></v-text-field>

          <v-text-field
            name="password_confrim"
            label="Confirm Password"
            min="8"
            :append-icon="showValue ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showValue = !showValue"
            counter
            :type="showValue ? 'password' : 'text'"
            prepend-icon="mdi-textbox-password"
            :loading="loading"
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
    title: "Create an account",
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
      this.warning = true;
      setTimeout(() => {
        this.warning = false;
      }, 3000);
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