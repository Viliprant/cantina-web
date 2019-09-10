<template>
  <div>
    <div class="container py-3">
      <h1>Liste des recettes</h1>
      <p>Voici les recettes de bons petits plats !</p>
      <SearchBarRecipe/>
      <div class="container-card">
        <RecipeCard class="m-3"/>
        <RecipeCard class="m-3"/>
        <RecipeCard class="m-3"/>
        <RecipeCard class="m-3"/>
        <RecipeCard class="m-3"/>
        <RecipeCard class="m-3"/>
        <RecipeCard class="m-3"/>
        <RecipeCard class="m-3"/>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard";
import SearchBarRecipe from "./SearchBarRecipe";

export default {
  name: "Home",
  components: {
    RecipeCard,
    SearchBarRecipe
  },
  data: function() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-card{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
