<template>
  <div class="container text-white pt-3">
    <h1 class="pb-3">Editer une recette</h1>
    <p> Les champs accompagnés du symbole * sont obligatoires.</p>
    <FormRecipe :recipe="this.recipeToEdit" @successValidation="updateRecipe" v-show="!this.erreur"/>
  </div>
</template>

<script>
import FormRecipe from "./FormRecipe.vue";
import data from "../utilities/data.js"

export default {
  name: "EditRecipe",
  components: {
    FormRecipe
  },
  data: function(){
    return{
      recipeToEdit: {},
      erreur: false
    }
  },
  created: function() {
    data.getOneRecipe(this.$route.params.id).then(res => {
      this.recipeToEdit = res.data;
      this.$toasted.success('Chargement de la recette accompli !');
    }).catch((error)=>{
        this.erreur = true;
      this.$toasted.error(error.message);
    });
  },
  methods: {
      updateRecipe: function(recipeToSend){
          data.updateRecipe(recipeToSend)
        .then(()=>{
          this.$toasted.success("La recette a été transmise au serveur.");
          this.$router.push({ path: '/' })
        })
        .catch((error)=>{
          this.$toasted.error(error.message);
        })
      }
  }
};
</script>

<style>

</style>