<template>
  <div class="container py-3">
    <h1 class="text-white">Liste des recettes</h1>
    <p class="text-white">Voici les recettes pour de bons petits plats !</p>
    <SearchBarRecipe @useFilter="applyFilter" />
    <div class="container-card">
      <RecipeCard
        class="m-3"
        v-for="recipe in listRecipesFiltered"
        :key="recipe.id"
        :dataRecipe="recipe"
        @clickToRemove="removeRecipe"
      />
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
      listRecipes: [],
      listRecipesFiltered: []
    };
  },
  created: function() {
    data
      .getAllRecipes()
      .then(res => {
        this.listRecipes = res.data;
        this.listRecipesFiltered = res.data;
      })
      .catch(error => {
        this.$toasted.error(error.message);
      });
  },
  methods: {
    applyFilter: function(paramsFilter) {
      this.listRecipesFiltered = this.listRecipes.filter(myRecipe => {
        let difficulte = "";
        if (paramsFilter.difficulte.toLowerCase() !== "toutes") {
          difficulte = paramsFilter.difficulte.toLowerCase();
        }
        //Titre
        if (
          !myRecipe.titre
            .toLowerCase()
            .includes(paramsFilter.titre.toLowerCase().trim())
        ) {
          return false;
        }
        //Difficulté
        if (!myRecipe.niveau.toLowerCase().includes(difficulte)) {
          return false;
        }
        //Temps de préparation
        if (
          myRecipe.tempsPreparation > paramsFilter.tpsPreparation &&
          paramsFilter.tpsPreparation != ""
        ) {
          return false;
        }
        //Nombre de personne minimum
        if (
          myRecipe.personnes < paramsFilter.nbPersonnes[0] &&
          paramsFilter.nbPersonnes[0] !== ""
        ) {
          return false;
        }
        //Nombre de personne maximum
        if (
          myRecipe.personnes > paramsFilter.nbPersonnes[1] &&
          paramsFilter.nbPersonnes[1] !== ""
        ) {
          return false;
        }

        return true;
      });
    },
    removeRecipe: function(idRecipe) {
      if (confirm("Etes-vous sûr de vouloir supprimer la recette ?")) {
        data
          .removeRecipe(idRecipe)
          .then(() => {
            this.removeFromList(idRecipe);
            this.$toasted.success("La recette a été supprimée.");
          })
          .catch(() => {
            this.$toasted.error("La recette n'a pas pu être supprimée.");
          });
      }
    },
    removeFromList: function(idRecipe) {
      for (let keyRecipe in this.listRecipes) {
        if (this.listRecipes[keyRecipe].id === idRecipe) {
          this.listRecipes.splice(keyRecipe, 1);
        }
      }
    }
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
