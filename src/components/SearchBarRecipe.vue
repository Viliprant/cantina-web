<template>
  <div>
    <button
      class="btn btn-info mb-3"
      type="button"
      data-toggle="collapse"
      data-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
    >Afficher le filtre</button>
    <div class="collapse" id="collapseExample">
      <form class="py-3">
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
            />
          </div>

          <!-- Difficulté -->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="btn btn-outline-light" id="difficulte">Difficulté</span>
            </div>
            <select class="custom-select" aria-label="difficulte" aria-describedby="difficulte">
              <option selected>Tous</option>
              <option value="1">Padawan</option>
              <option value="2">Jedi</option>
              <option value="3">Maitre</option>
            </select>
          </div>

          <!-- Nombre de personne -->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="btn btn-outline-light" id>Nombre de personne</span>
            </div>
            <input type="text" class="form-control" placeholder="3" />
            <input type="text" class="form-control" placeholder="5" />
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
            />
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="button"
          class="btn btn-outline-light btn-lg btn-block"
        >Lancez la force de la recherche</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBarRecipe"
};
</script>

<style scoped>
.input-group-prepend .btn-outline-light:hover {
  background-color: inherit;
  color: white;
  border-color: white;
}
</style>