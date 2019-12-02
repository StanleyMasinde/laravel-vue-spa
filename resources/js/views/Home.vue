<template>
  <navigation-bar>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Dashboard</div>

            <div class="card-body">You are logged in!</div>
          </div>
        </div>
      </div>
    </div>
  </navigation-bar>
</template>

<script>
export default {
  methods: {
    getUser() {
      this.$http
        .get("/api/user")
        .then(user => {
          this.$store.state.user = user.data;
        })
        .catch();
    }
  },
  created() {
    this.getUser();
  },
  mounted() {}
};
</script>

<style>
</style>