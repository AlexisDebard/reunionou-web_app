<template>
<div>
  <Header />
  <section class="section">
    <template v-for="evenement in evenements">
      <Conversation :key="commentaire.id" :commentaire="commentaire" />
    </template>
  </section>
  </div>
</template>

<script>
import Connexion from './Connexion.vue';
import Evenement from "../components/Evenement.vue";
import PosterUnCommentaire from '../components/PosterUnCommentaire.vue';
//import Header from "../components/Header.vue";
export default {
  components : {
    //Header,
    Conversation,
    PosterMessage,
    Connexion
  },
  data() {
    return {
      evenements : []
    };
  },
  mounted() {
    this.$api
    .get("events")
    .then((response) => {
      this.evenements = response.data;
    });
  },
};
</script>;

<style>
</style>