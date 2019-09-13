<template>
  <div class="container text-light mt-3">
    <div v-if="myRecipe.titre !== undefined">
      <h1>Recette : {{myRecipe.titre}}</h1>
      <p>Vous avez donc choisi de préparer le plat "Dustcrepe". Remontez vos manches et c'est parti pour de la gastronomie spaciale digne de Star Wars !</p>
      <p
        class="font-italic"
      >Note : Nous ne nous portons pas garant pour tous maux de ventre et/ou indigestions.</p>

      <!-- Résumé des infos de la liste -->
      <div class="card mb-3 text-dark mt-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="myRecipe.photo || DEFAULT_PHOTO" class="card-img maclasse" alt />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">{{myRecipe.titre}}</h2>
              <p class="card-text">{{myRecipe.description}}</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-muted">
                  Nombre :
                  <span class="font-weight-bold">{{myRecipe.personnes | formatNbPersonne}}</span>
                </li>
                <li class="list-group-item text-muted">
                  Difficulté :
                  <span class="font-weight-bold">{{myRecipe.niveau}}</span>
                </li>
                <li class="list-group-item text-muted">
                  Temps de préparation :
                  <span
                    class="font-weight-bold"
                  >{{myRecipe.tempsPreparation | formatTpsPreparation}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- liste des ingrédients -->
      <div>
        <h2 class="card-title pt-3">Ingrédients :</h2>
        <div class="card">
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item text-muted"
                v-for="(value, name) in myRecipe.ingredients"
                :key="name"
              >{{value[0] + ' ' + value[1]}}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Etapes -->
      <div>
        <h2 class="card-title pt-3">Etapes :</h2>
        <div class="card">
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item text-muted"
                v-for="(value, name) in myRecipe.etapes"
                :key="name"
              >{{`${name+1}) ${value}`}}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card mt-3">
        <div class="card-footer text-center">
          <router-link :to="`/recette/edit/${myRecipe.id}`" class="btn btn-outline-info btn-lg btn-block mr-2">Modifier</router-link>
          <a href="#" class="btn btn-outline-danger btn-lg btn-block" @click.prevent="removeRecipe(myRecipe.id)">Supprimer</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../utilities/data";

export default {
  name: "MoreInformationsRecipe",
  data: function() {
    return {
      myRecipe: {}
    };
  },
  filters: {
    formatNbPersonne: function(value) {
      if (value > 1) {
        return `${value} personnes`;
      } else {
        return `${value} personne`;
      }
    },
    formatTpsPreparation: function(value) {
      if (value / 60 >= 1) {
        if (value % 60 == 0) {
          return `${Math.trunc(value / 60)}h`;
        }
        return `${Math.trunc(value / 60)}h${value % 60}min`;
      } else {
        return `${value % 60}min`;
      }
    }
  },
  created: function() {
    data.getOneRecipe(this.$route.params.id).then(res => {
      this.myRecipe = res.data;
    }).catch((error)=>{
      this.$toasted.error(error.message);
    });
  },
  computed: {
    DEFAULT_PHOTO: function() {
      // require sinon il ne trouve pas la photo
      return require("../assets/default-image-recipe-Miam.jpg");
    }
  },
  methods: {
    removeRecipe: function(idRecipe){
      data.removeRecipe(idRecipe)
        .then(()=>{
          this.$router.push({ path: '/' })
        })
        .catch(()=>{
          this.$toasted.error("La recette n'a pas pu être supprimé.");
        })
    }
  }
};
</script>

<style scoped>
.maclasse {
  height: 350px;
}
</style>