<template>
  <form @submit.prevent="addNewRecipe">
    <!-- Titre Button -->
    <div class="form-group">
      <label for="titre" class="h3">Titre*</label>
      <input
        type="text"
        class="form-control"
        id="titre"
        placeholder="Ma nouvelle recette intergalactique"
        v-model="dataRecipe.titre"
        @blur="$v.dataRecipe.titre.$touch()"
      />
      <span v-if="$v.dataRecipe.titre.$dirty && $v.dataRecipe.titre.$invalid">Il faut indiquer un titre pour pouvoir ajouter votre recette.</span>
    </div>
    <!-- Description Button -->
    <div class="form-group">
      <label for="description" class="h3">Description*</label>
      <input
        type="text"
        class="form-control"
        id="description"
        placeholder="Un plat d'une autre galaxie..."
        v-model="dataRecipe.description"
        @blur="$v.dataRecipe.description.$touch()"
      />
      <span v-if="$v.dataRecipe.description.$dirty && $v.dataRecipe.description.$invalid">Il faut indiquer une description pour pouvoir ajouter votre recette.</span>
    </div>

    <!-- Nombre de personnes Button -->
    <div class="form-group">
      <label for="nb_personnes" class="h3">Nombre de personnes*</label>
      <input type="number" class="form-control" id="nb_personnes" v-model="dataRecipe.nbPersonnes" @blur="$v.dataRecipe.nbPersonnes.$touch()"/>
      <span v-if="$v.dataRecipe.nbPersonnes.$dirty && $v.dataRecipe.nbPersonnes.$invalid">Il faut indiquer un nombre de personnes pour pouvoir ajouter votre recette.</span>
    </div>

    <!-- Difficulté Button -->
    <div class="form-group">
      <label for="difficulte" class="h3">Difficulté*</label>
      <select
        class="custom-select"
        aria-label="difficulte"
        aria-describedby="difficulte"
        v-model="dataRecipe.difficulte"
      >
        <option value="Padawan" selected>Padawan</option>
        <option value="Jedi">Jedi</option>
        <option value="Maitre">Maitre</option>
      </select>
    </div>

    <!-- Temps de préparation Button -->
    <div class="form-group">
      <label for="tps_preparation" class="h3">Temps de préparation*</label>
      <input
        type="number"
        class="form-control"
        id="tps_preparation"
        placeholder="30 (en minutes)"
        v-model="dataRecipe.tpsPreparation"
        @blur="$v.dataRecipe.tpsPreparation.$touch()"
      />
      <span v-if="$v.dataRecipe.tpsPreparation.$dirty && $v.dataRecipe.tpsPreparation.$invalid">Il faut indiquer un temps de préparation pour pouvoir ajouter votre recette.</span>
    </div>

    <!-- Ingrédients Button -->
    <div class="form-group">
      <label for="tps_preparation" class="h3">Ingrédients*</label>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Quantité"
          v-model="inputIngredient[0]"
          ref="ingredient1"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Nom de l'ingrédient"
          v-model="inputIngredient[1]"
        />
        <div class="input-group-append">
          <input class="input-group-text" type="button" value="Ajouter" @click="addIngredient" />
        </div>
      </div>
    </div>

    <!-- Ingrédients Liste -->
    <div class="mb-3">
      <div class="card" v-show="dataRecipe.ingredients.length >= 1">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item text-muted"
            v-for="(value, name) in dataRecipe.ingredients"
            :key="name"
          >
            <span>{{`${value[0]} ${value[1]}`}}</span>
            <input
              class="float-right btn btn-danger"
              value="X"
              type="button"
              @click="removeIngredient(name)"
            />
          </li>
        </ul>
      </div>
      <div class="card" v-show="dataRecipe.ingredients.length < 1">
        <div class="card-body text-dark text-center text-muted">
          <p>Il n'y pas encore d'ingrédients</p>
        </div>
      </div>
      <span v-if="$v.dataRecipe.ingredients.$dirty && $v.dataRecipe.ingredients.$invalid">Il faut un ingrédient au minimum pour pouvoir ajouter votre recette.</span>
    </div>

    <!-- Etapes Button -->
    <div class="form-group">
      <label for="tps_preparation" class="h3">Etapes*</label>
      <div class="input-group">
        <textarea
          class="form-control"
          placeholder="Demander de l'aide"
          v-model="inputEtape"
          ref="etape"
        ></textarea>
        <div class="input-group-append">
          <input class="input-group-text" type="button" value="Ajouter" @click="addEtape" />
        </div>
      </div>
    </div>

    <!-- Etapes Liste -->
    <div class="mb-3">
      <div class="card" v-show="dataRecipe.etapes.length >= 1">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item text-muted"
            v-for="(value, name) in dataRecipe.etapes"
            :key="name"
          >
            <span>{{`${name+1}) ${value}`}}</span>
            <input
              class="float-right btn btn-danger"
              value="X"
              type="button"
              @click="removeEtape(name)"
            />
          </li>
        </ul>
      </div>
      <div class="card" v-show="dataRecipe.etapes.length < 1">
        <div class="card-body text-dark text-center text-muted">
          <p>Il n'y pas encore d'étapes</p>
        </div>
      </div>
      <span v-if="$v.dataRecipe.etapes.$dirty && $v.dataRecipe.etapes.$invalid">Il faut une étape au minimum pour pouvoir ajouter votre recette.</span>
    </div>

    <!-- URL PHOTO -->
    <div class="form-group">
      <label for="urlPhoto" class="h3">Photo</label>
      <input
        type="text"
        class="form-control"
        id="urlPhoto"
        placeholder="http:// ou https://"
        v-model="dataRecipe.photo"
        @blur="$v.dataRecipe.photo.$touch()"
      />
      <span v-if="$v.dataRecipe.photo.$invalid">L'URL est invalide.</span>
    </div>

    <input
      type="submit"
      class="btn btn-outline-info btn-lg btn-block mr-2 mb-3 my-bg-white"
      value="Ajouter la recette"
    />
  </form>
</template>

<script>
import { required, numeric, url,minLength } from "vuelidate/lib/validators";

export default {
  name: "FormRecipe",
  props: {
    recipe: {
      type: Object
    }
  },
  data: function() {
    return {
      inputIngredient: [],
      inputEtape: "",
      dataRecipe: this.recipe
    };
  },
  methods: {
    addIngredient: function() {
      this.dataRecipe.ingredients.push(this.inputIngredient);
      this.inputIngredient = [];
      this.$refs.ingredient1.focus();
    },
    addEtape: function() {
      this.dataRecipe.etapes.push(this.inputEtape);
      this.inputEtape = "";
      this.$refs.etape.focus();
    },
    removeIngredient: function(index) {
      this.dataRecipe.ingredients.splice(index, 1);
    },
    removeEtape: function(index) {
      this.dataRecipe.etapes.splice(index, 1);
    },
    addNewRecipe: function() {
      if (this.$v.dataRecipe.$invalid) 
      {
        this.$toasted.error("Non validé");
        return this.$v.dataRecipe.$touch();
      }
      else{
        this.$toasted.success("Validé");
      }
    }
  },
  validations: {
    dataRecipe: {
      titre: { required },
      description: { required },
      nbPersonnes: { required, numeric },
      difficulte: { required },
      tpsPreparation: { required, numeric },
      ingredients: { required, minLength:minLength(1) },
      etapes: { required, minLength:minLength(1) },
      photo: { url }
    }
  }
};
</script>

<style scoped>
.my-bg-white {
  background-color: white;
}
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Parcourir";
}
</style>