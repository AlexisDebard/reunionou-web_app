<template>
    <div> 
        <Header/>
        <section class="section">
            <div class="box" v-if="evenement">
                <p class="title is-4">{{evenement.title}}<span class="tag"></span></p>
                <span class="tag">{{commentaires.length}} commentaire(s)</span>
                <p class="subtitle is-6">{{conversation.label}}</p>
                </div>
                <poster-message :conversation="conversation"/>
                <h5 class="title is-5 has-text-warning">Les commentaire</h5>
                <template v-for="commentaire in commentaires">
                    <message :commentaire="commentaire" :key="commentaire.id"/>
                </template>
                    </section>                         
    </div> 
</template>

<script>
import PosterUnCommentaire from "../components/PosterUnCommentaire.vue";
import Commentaire from "../components/Commentaire.vue";
export default {
  components: {
    PosterMessage,
    Message
  },
  data() {
    return {
      evenement: false,
      commentaire: [],
      members: this.$store.state.members
    };
  },
  mounted() {
    this.chargerConversation();
    //this.$bus.$on('charger-conversation', this.chargerConversation)
    this.$bus.$on('charger-messages', (data) => {
    this.chargerCommentaire();
    });
  },
  methods: {
      chargerConversation(){
    //let id = this.$route.params.idConversation;
      this.$api.get(`channels/${this.$route.params.id}`).then((response) => {
      this.conversation = response.data;
      this.chargerCommentaire();
    });
},
    chargerCommentaire(){
      this.$api.get(`channels/${this.conversation.id}/posts`).then((response) => {
      this.messages = response.data;
     });
    }
  }
};
</script>

<style>
</style>