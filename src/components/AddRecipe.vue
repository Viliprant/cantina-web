<template>
  <div class="container text-white pt-3">
    <h1 class="pb-3">Ajouter une recette</h1>
    <FormRecipe/>
  </div>
</template>

<script>
import FormRecipe from "./FormRecipe.vue"
export default {
  name: "AddRecipe",
  components: {
    FormRecipe
  }
};
</script>

<style scoped>
</style>