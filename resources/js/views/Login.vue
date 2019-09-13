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
            label="Email"
            id="loginEmail"
            type="email"
            :loading="loading"
          ></v-text-field>
          <v-text-field
            name="name"
            label="Enter your password"
            min="8"
            :append-icon="showValue ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showValue = !showValue"
            value="Password"
            counter
            :type="showValue ? 'password' : 'text'"
            prepend-icon="mdi-textbox-password"
            :loading="loading"
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
    title: "Login into your account",
    // override the parent template and just use the above title only
    titleTemplate: null
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
      this.warning = true;
      setTimeout(() => {
        this.warning = false;
      }, 3000);
    }
  },
  data() {
    return {
      email: null,
      password: null,
      showValue: true,
      warning: false
    };
  }
};
</script>

<style scoped>
main {
  height: 70vh !important;
}
</style>