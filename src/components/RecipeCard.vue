<template>
  <div class="card card-size">
    <img class="card-img-top" :src="detailsRecipe.photo || DEFAULT_PHOTO" :alt="'photo de ' + detailsRecipe.titre" />
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="`/recette/${detailsRecipe.id}`">{{detailsRecipe.titre}}</router-link>
      </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-muted">Nombre : <span class="font-weight-bold">{{detailsRecipe.personnes | formatNbPersonne}}</span></li>
      <li class="list-group-item text-muted">Difficulté : <span class="font-weight-bold">{{detailsRecipe.niveau}}</span></li>
      <li class="list-group-item text-muted">Temps de préparation : <span class="font-weight-bold">{{detailsRecipe.tempsPreparation | formatTpsPreparation}}</span></li>
    </ul>
    <div class="card-footer text-center">
      <router-link :to="`/recette/edit/${detailsRecipe.id}`" class="btn btn-outline-info mr-2">Modifier</router-link>
      <a href="#" class="btn btn-outline-danger" @click.prevent="clickToRemove">Supprimer</a>
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
        if(value%60 == 0){
          return `${Math.trunc(value/60)}h`;
        }
        return `${Math.trunc(value/60)}h${value%60}min`;
      }
      else{
        return `${value%60}min`;
      }
    }
  },
  computed: {
    DEFAULT_PHOTO: function(){
      // require sinon il ne trouve pas la photo
      return require('../assets/default-image-recipe-Miam.jpg');
    }
  },
  methods: {
    clickToRemove : function(){
      this.$emit("clickToRemove", this.detailsRecipe.id);
    }
  }
};
</script>

<style scoped>
.card-size{
  width: 21rem;
}
.card-title a{
  color: #d42e48;
}
.card-title a:hover{
  color: #d42e48;
}
</style>