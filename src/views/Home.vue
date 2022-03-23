<template>
  <div>
      <Navigation />
    <h2>Home</h2>
    <p>
      Connecté en tant que <b>{{ $store.state.member.fullname }}</b>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$api.get("users").then((response) => {
      this.users = response.data;
      console.log(this.users)
    });
  },
};

</script>