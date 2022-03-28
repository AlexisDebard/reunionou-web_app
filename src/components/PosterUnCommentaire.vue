<template>
  <form class="box" @submit.prevent="poster">
    <div class="field">
      <div class="control">
        <input type="text" class="input" v-model="message">
      </div>
    </div>
    <div class="buttons">
      <button class="button">Poster un commentaire</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['evenement'],
  data() {
    return {
      message: '',
    };
  },
  methods: {
    poster() {
      this.$api.post(`event/${this.evenement.id}/post`, { 
          message: this.message,
          event_id: this.evenement.id,
          member_id: this.$store.state.member.id,
        })
        .then((response) => {
          this.$bus.$emit('charger-message', response.data)
          this.message = "";
        });
        }  
    },
};
</script>

<style>
</style>