<template>
  <div class="container text-white pt-3">
    <h1 class="pb-3">Ajouter une recette</h1>
    <FormRecipe :recipe="Recipe"/>
  </div>
</template>

<script>
import FormRecipe from "./FormRecipe.vue"
export default {
  name: "AddRecipe",
  components: {
    FormRecipe
  },
  data: function(){
    return{
      Recipe:{
        titre: '',
        description: '',
        nbPersonnes: '',
        difficulte: 'Padawan',
        tpsPreparation: '',
        ingredients: [],
        etapes: [],
        photo: ''
      }
    }
  }
};
</script>

<style scoped>
</style>