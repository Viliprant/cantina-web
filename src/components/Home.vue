<template>
  <div class="container py-3">
    <h1 class="text-white">Liste des recettes</h1>
    <p class="text-white">Voici les recettes pour de bons petits plats !</p>
    <SearchBarRecipe />
    <div class="container-card">
      <RecipeCard class="m-3" v-for="recipe in listRecipes" :key="recipe.id" :dataRecipe="recipe"/>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard";
import SearchBarRecipe from "./SearchBarRecipe";

import data from "../utilities/data";

export default {
  name: "Home",
  components: {
    RecipeCard,
    SearchBarRecipe
  },
  data: function() {
    return {
      listRecipes: []
    };
  },
  created: function() {
    data.getAllRecipes().then(res => {
      this.listRecipes = res.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
