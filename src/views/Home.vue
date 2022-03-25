<template>
  <div>
      <Navigation />
    <h2>Home</h2>
    <p>
      Connecté en tant que <b>{{ $store.state.member.fullname }}</b>
    </p>
    <router-link class="button is-text" to="deconnexion">Se déconnecter</router-link>
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