<template>
  <form>
    <!-- Titre Button -->
    <div class="form-group">
      <label for="titre" class="h3">Titre</label>
      <input
        type="text"
        class="form-control"
        id="titre"
        placeholder="Ma nouvelle recette intergalactique"
        v-model="dataRecipe.titre"
      />
    </div>
    <!-- Description Button -->
    <div class="form-group">
      <label for="description" class="h3">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        placeholder="Un plat d'une autre galaxie..."
        v-model="dataRecipe.description"
      />
    </div>

    <!-- Nombre de personnes Button -->
    <div class="form-group">
      <label for="nb_personnes" class="h3">Nombre de personnes</label>
      <input type="number" class="form-control" id="nb_personnes" v-model="dataRecipe.nbPersonnes"/>
    </div>

    <!-- Difficulté Button -->
    <div class="form-group">
      <label for="difficulte" class="h3">Difficulté</label>
      <select class="custom-select" aria-label="difficulte" aria-describedby="difficulte" v-model="dataRecipe.difficulte">
        <option value="Padawan" selected>Padawan</option>
        <option value="Jedi">Jedi</option>
        <option value="Maitre">Maitre</option>
      </select>
    </div>

    <!-- Temps de préparation Button -->
    <div class="form-group">
      <label for="tps_preparation" class="h3">Temps de préparation</label>
      <input type="number" class="form-control" id="tps_preparation" placeholder="30 (en minutes)" v-model="dataRecipe.tpsPreparation"/>
    </div>

    <!-- Ingrédients Button -->
    <div class="form-group">
      <label for="tps_preparation" class="h3">Ingrédients</label>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Quantité" v-model="inputIngredient[0]"/>
        <input type="text" class="form-control" placeholder="Nom de l'ingrédient" v-model="inputIngredient[1]"/>
        <div class="input-group-append">
          <input class="input-group-text" type="button" value="Ajouter" />
        </div>
      </div>
    </div>

    <!-- Ingrédients Liste -->
    <div class="mb-3">
      <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-muted"><span>Coucou</span><input class="float-right btn btn-danger" value="X" type="button"/></li>
              <li class="list-group-item text-muted"><span>Coucou</span><input class="float-right btn btn-danger" value="X" type="button"/></li>
              <li class="list-group-item text-muted"><span>Coucou</span><input class="float-right btn btn-danger" value="X" type="button"/></li>
            </ul>
          </div>
    </div>

    <!-- Etapes Button -->
    <div class="form-group">
      <label for="tps_preparation" class="h3">Etapes</label>
      <div class="input-group">
        <textarea class="form-control" placeholder="Demander de l'aide" v-model="inputEtape"></textarea>
        <div class="input-group-append">
          <input class="input-group-text" type="button" value="Ajouter" />
        </div>
      </div>
    </div>

    <!-- Etapes Liste -->
    <div class="mb-3">
      <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-muted"><span>Coucou</span><input class="float-right btn btn-danger" value="X" type="button"/></li>
              <li class="list-group-item text-muted"><span>Coucou</span><input class="float-right btn btn-danger" value="X" type="button"/></li>
              <li class="list-group-item text-muted"><span>Coucou</span><input class="float-right btn btn-danger" value="X" type="button"/></li>
            </ul>
          </div>
    </div>


      <input type="submit" class="btn btn-outline-info btn-lg btn-block mr-2 mb-3 my-bg-white" value="Ajouter la recette"/>
  </form>
</template>

<script>
export default {
  name: "FormRecipe",
  props:{
    recipe: {
      type: Object
    }
  },
  data: function(){
    return{
      inputIngredient:[],
      inputEtape: "",
      dataRecipe: this.recipe
    }
  },
};
</script>

<style scoped>
.my-bg-white{
  background-color: white;
}
</style>