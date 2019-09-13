<template>
  <form @submit.prevent="formValidated">
    <!-- Titre Button -->
    <div class="form-group">
      <label for="titre" class="h3">Titre*</label>
      <input
        type="text"
        class="form-control"
        id="titre"
        placeholder="Ma nouvelle recette intergalactique"
        v-model="recipe.titre"
        @blur="$v.recipe.titre.$touch()"
      />
      <span
        v-if="$v.recipe.titre.$dirty && $v.recipe.titre.$invalid"
      >Il faut indiquer un titre pour pouvoir ajouter votre recette.</span>
    </div>
    <!-- Description Button -->
    <div class="form-group">
      <label for="description" class="h3">Description*</label>
      <input
        type="text"
        class="form-control"
        id="description"
        placeholder="Un plat d'une autre galaxie..."
        v-model="recipe.description"
        @blur="$v.recipe.description.$touch()"
      />
      <span
        v-if="$v.recipe.description.$dirty && $v.recipe.description.$invalid"
      >Il faut indiquer une description pour pouvoir ajouter votre recette.</span>
    </div>

    <!-- Nombre de personnes Button -->
    <div class="form-group">
      <label for="nb_personnes" class="h3">Nombre de personnes*</label>
      <input
        type="number"
        class="form-control"
        id="nb_personnes"
        v-model.number="recipe.personnes"
        @blur="$v.recipe.personnes.$touch()"
      />
      <span
        v-if="$v.recipe.personnes.$dirty && $v.recipe.personnes.$invalid"
      >Il faut indiquer un nombre de personnes pour pouvoir ajouter votre recette.</span>
    </div>

    <!-- Difficulté Button -->
    <div class="form-group">
      <label for="difficulte" class="h3">Difficulté*</label>
      <select
        class="custom-select"
        aria-label="difficulte"
        aria-describedby="difficulte"
        v-model="recipe.niveau"
      >
        <option value="padawan" selected>Padawan</option>
        <option value="jedi">Jedi</option>
        <option value="maitre">Maitre</option>
      </select>
    </div>

    <!-- Temps de préparation Button -->
    <div class="form-group">
      <label for="temps_preparation" class="h3">Temps de préparation*</label>
      <input
        type="number"
        class="form-control"
        id="temps_preparation"
        placeholder="30 (en minutes)"
        v-model.number="recipe.tempsPreparation"
        @blur="$v.recipe.tempsPreparation.$touch()"
      />
      <span
        v-if="$v.recipe.tempsPreparation.$dirty && $v.recipe.tempsPreparation.$invalid"
      >Il faut indiquer un temps de préparation pour pouvoir ajouter votre recette.</span>
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
      <div class="card" v-show="recipe.ingredients && recipe.ingredients.length >= 1">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item text-muted"
            v-for="(value, name) in recipe.ingredients"
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
      <div class="card" v-show="recipe.ingredients && recipe.ingredients.length < 1">
        <div class="card-body text-dark text-center text-muted">
          <p>Il n'y pas encore d'ingrédients</p>
        </div>
      </div>
      <span
        v-if="$v.recipe.ingredients.$dirty && $v.recipe.ingredients.$invalid"
      >Il faut un ingrédient au minimum pour pouvoir ajouter votre recette.</span>
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
      <div class="card" v-show="recipe.etapes && recipe.etapes.length >= 1">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-muted" v-for="(value, name) in recipe.etapes" :key="name">
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
      <div class="card" v-show="recipe.etapes &&recipe.etapes.length < 1">
        <div class="card-body text-dark text-center text-muted">
          <p>Il n'y pas encore d'étapes</p>
        </div>
      </div>
      <span
        v-if="$v.recipe.etapes.$dirty && $v.recipe.etapes.$invalid"
      >Il faut une étape au minimum pour pouvoir ajouter votre recette.</span>
    </div>

    <!-- URL PHOTO -->
    <div class="form-group">
      <label for="urlPhoto" class="h3">Photo</label>
      <input
        type="text"
        class="form-control"
        id="urlPhoto"
        placeholder="http:// ou https://"
        v-model="recipe.photo"
        @blur="$v.recipe.photo.$touch()"
      />
      <span v-if="$v.recipe.photo.$invalid">L'URL est invalide.</span>
    </div>

    <input
      v-if="!recipe.id"
      type="submit"
      class="btn btn-outline-info btn-lg btn-block mr-2 mb-3 my-bg-white"
      value="Ajouter la recette"
    />
    <input
      v-if="recipe.id"
      type="submit"
      class="btn btn-outline-info btn-lg btn-block mr-2 mb-3 my-bg-white"
      value="Editer la recette"
    />
  </form>
</template>

<script>
import { required, numeric, minLength} from "vuelidate/lib/validators";

export default {
  name: "FormRecipe",
  props: {
    recipe: {
      type: Object,
      default: function() {
        return {
          titre: "",
          description: "",
          personnes: null,
          niveau: "padawan",
          tempsPreparation: null,
          ingredients: [],
          etapes: [],
          photo: ""
        };
      }
    }
  },
  data: function() {
    return {
      inputIngredient: [],
      inputEtape: ""
    };
  },
  methods: {
    addIngredient: function() {
      this.recipe.ingredients.push(this.inputIngredient);
      this.inputIngredient = [];
      this.$refs.ingredient1.focus();
    },
    addEtape: function() {
      this.recipe.etapes.push(this.inputEtape);
      this.inputEtape = "";
      this.$refs.etape.focus();
    },
    removeIngredient: function(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    removeEtape: function(index) {
      this.recipe.etapes.splice(index, 1);
    },
    formValidated: function() {
      if (this.$v.recipe.$invalid) {
        this.$toasted.error("Le formulaire est incorrect");
        return this.$v.recipe.$touch();
      } else {
        this.$toasted.success("Le formulaire est correcte");
        this.$emit("successValidation", this.recipe);
      }
    }
  },
  validations: {
    recipe: {
      titre: { required },
      description: { required },
      personnes: { required, numeric },
      niveau: { required },
      tempsPreparation: { required, numeric },
      ingredients: { required, minLength: minLength(1) },
      etapes: { required, minLength: minLength(1) },
      photo: {
        verifyUrl : function() {
          if(this.recipe.photo)
          {
            return this.recipe.photo.startsWith('http://') || this.recipe.photo.startsWith('https://');
          }
          return true;
        }
      }
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