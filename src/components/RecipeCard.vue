<template>
  <div class="card card-size">
    <img class="card-img-top" :src="detailsRecipe.photo || DEFAULT_PHOTO" :alt="'photo de ' + detailsRecipe.titre" />
    <div class="card-body">
      <h5 class="card-title">{{detailsRecipe.titre}}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-muted">Nombre : <span class="font-weight-bold">{{detailsRecipe.personnes | formatNbPersonne}}</span></li>
      <li class="list-group-item text-muted">Difficulté : <span class="font-weight-bold">{{detailsRecipe.niveau}}</span></li>
      <li class="list-group-item text-muted">Temps de préparation : <span class="font-weight-bold">{{detailsRecipe.tempsPreparation | formatTpsPreparation}}</span></li>
    </ul>
    <div class="card-body">
      <a href="#" class="btn btn-outline-info mr-2">Modifier</a>
      <a href="#" class="btn btn-outline-danger">Supprimer</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    dataRecipe : {
      type : Object,
      required: true
    }
  },
  data: function(){
    return{
      detailsRecipe : this.dataRecipe
    }
  },
  filters: {
    formatNbPersonne: function(value){
      if(value > 1)
      {
        return `${value} personnes`
      }
      else{
        return `${value} personne`
      }
    },
    formatTpsPreparation: function(value){
      if(value/60 >= 1)
      {
        return `${Math.trunc(value/60)}h${value%60}min`;
      }
      else{
        return `${value%60}min`;
      }
    }
  },
  computed: {
    DEFAULT_PHOTO: function(){
      return require('../assets/default-image-recipe-Miam.jpg');
    }
  }
};
</script>

<style scoped>
.card-size{
  width: 21rem;
}
</style>