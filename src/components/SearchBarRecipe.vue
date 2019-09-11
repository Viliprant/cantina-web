<template>
  <div>
    <button
      class="btn btn-info mb-3"
      type="button"
      data-toggle="collapse"
      data-target="#collapse"
      aria-expanded="false"
      aria-controls="collapse"
    >Afficher le filtre</button>
    <div class="collapse" id="collapse">
      <form class="py-3" @submit.prevent="onSearch">
        <div class="form-group">
          <!-- Titre -->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="btn btn-outline-light" id="titre">Titre</span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Midi-chlorien"
              aria-label="titre"
              aria-describedby="titre"
              v-model="parametersSearch.titre"
            />
          </div>

          <!-- Difficulté -->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="btn btn-outline-light" id="difficulte">Difficulté</span>
            </div>
            <select
              class="custom-select"
              aria-label="difficulte"
              aria-describedby="difficulte"
              v-model="parametersSearch.difficulte"
            >
              <option value="Tous" selected>Tous</option>
              <option value="Padawan">Padawan</option>
              <option value="Jedi">Jedi</option>
              <option value="Maitre">Maitre</option>
            </select>
          </div>

          <!-- Nombre de personne -->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="btn btn-outline-light" id>Nombre de personne</span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="3"
              v-model="parametersSearch.nbPersonnes[0]"
            />
            <input
              type="text"
              class="form-control"
              placeholder="5"
              v-model="parametersSearch.nbPersonnes[1]"
            />
          </div>

          <!-- Temps de préparation -->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="btn btn-outline-light" id="temps_de_preparation">Temps de préparation</span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Veuillez saisir une durée (en minutes)"
              aria-label="temps_de_preparation"
              aria-describedby="temps_de_preparation"
              v-model="parametersSearch.tpsPreparation"
            />
          </div>
        </div>

        <!-- Submit Button -->
        <input
          type="submit"
          class="btn btn-outline-light btn-lg btn-block"
          value="Lancez la force de la recherche"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBarRecipe",
  data: function() {
    return {
      parametersSearch: {
        titre: "",
        difficulte: "Tous",
        tpsPreparation: "",
        nbPersonnes: ["",""]
      }
    };
  },
  methods: {
    onSearch: function() {
      if (this.verifyParameters()) {
        this.$emit("useFilter", this.parametersSearch); // Envoi l'objet 'parametersSearch' vers le parent via l'événement personnalisé 'useFilter'
      }
    },
    verifyParameters: function() {
      let validation = true;
      if (
        (Number.isNaN(parseInt(this.parametersSearch.nbPersonnes[0])) &&
          this.parametersSearch.nbPersonnes[0] !== "") ||
        (Number.isNaN(parseInt(this.parametersSearch.nbPersonnes[1])) &&
          this.parametersSearch.nbPersonnes[1] !== "")
      ) {
        this.$toasted.error(
          "La valeur pour le nombre de personne est incorrecte, veuillez rentrer un nombre entier positif."
        );
        validation = false;
      }
      if (
        Number.isNaN(parseInt(this.parametersSearch.tpsPreparation)) &&
        this.parametersSearch.tpsPreparation !== ""
      ) {
        this.$toasted.error(
          "La valeur pour le temps de préparation est incorrecte, veuillez rentrer un nombre entier positif."
        );
        validation = false;
      }
      return validation;
    }
  }
};
</script>

<style scoped>
.input-group-prepend .btn-outline-light:hover {
  background-color: inherit;
  color: white;
  border-color: white;
}
</style>