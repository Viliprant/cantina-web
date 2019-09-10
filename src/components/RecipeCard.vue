<template>
  <div class="card card-size">
    <img class="card-img-top" src="../assets/default-image-recipe-Miam.jpg" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Titre de la recette</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-muted">Nombre de personne : 2</li>
      <li class="list-group-item text-muted">Difficulté : Jedi</li>
      <li class="list-group-item text-muted">Temps de préparation : 15min</li>
    </ul>
    <div class="card-body">
      <a href="#" class="btn btn-outline-info mr-2">Modifier</a>
      <a href="#" class="btn btn-outline-danger">Supprimer</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard"
};
</script>

<style scoped>
.card-size{
  width: 15rem;
}
</style>