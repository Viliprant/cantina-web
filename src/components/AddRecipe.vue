<template>
  <div class="container text-white pt-3">
    <h1 class="pb-3">Ajouter une recette</h1>
    <p> Les champs accompagnés du symbole * sont obligatoires.</p>
    <FormRecipe @successValidation="sendRecipe"/>
  </div>
</template>

<script>
import FormRecipe from "./FormRecipe.vue";
import data from "../utilities/data.js"

export default {
  name: "AddRecipe",
  components: {
    FormRecipe
  },
  data: function(){
    return{
      recipe:{
        titre: '',
        description: '',
        personnes: null,
        niveau: 'padawan',
        tempsPreparation: null,
        ingredients: [],
        etapes: [],
        photo: ''
      }
    }
  },
  methods:{
    sendRecipe: function(recipeToSend){
      data.sendRecipe(recipeToSend)
        .then(()=>{
          this.$toasted.success("La recette a été transmise au serveur.");
        })
        .catch((error)=>{
          this.$toasted.error(error.message);
        })
    }
  }
};
</script>

<style scoped>
</style>