<template>
  <v-row justify="center" align="center" style="height: 75vh;">
    <v-col xs="10" md="6">
      <div class="text-center mb-6">
        <h1 class="text--secondary">Reset Password</h1>
      </div>
      <v-form>
        <v-text-field outlined label="E-mail" type="email"></v-text-field>
        <v-btn depressed large color="primary" rounded>Send Link</v-btn>
        <v-btn text class="text-capitalize" to="/login">Login</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>