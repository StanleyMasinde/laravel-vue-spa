<template>
  <v-row justify="center" align="center" style="height: 75vh;">
    <v-col xs="10" md="6">
      <div class="text-center mb-6">
        <h1 class="text--secondary">Sign Up</h1>
      </div>
      <v-form>
        <v-text-field outlined label="Full Name"></v-text-field>
        <v-text-field outlined label="E-mail" type="email"></v-text-field>
        <v-text-field outlined label="Choose Password" type="password"></v-text-field>
        <v-text-field outlined label="Confirm Password" type="password"></v-text-field>
        <v-btn depressed large color="primary" rounded>Sign Up</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>