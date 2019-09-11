<template>
  <form>
      <!-- Titre -->
      <div class="form-group">
        <label for="titre" class="h3">Titre</label>
        <input
          type="text"
          class="form-control"
          id="titre"
          placeholder="Ma nouvelle recette"
        />
      </div>
      <!-- Description -->
      <div class="form-group">
        <label for="description" class="h3">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          placeholder="Un plat d'une autre galaxie..."
        />
      </div>

      <!-- Nombre de personnes -->
      <div class="form-group">
        <label for="nb_personnes" class="h3">Nombre de personnes</label>
        <input
          type="number"
          class="form-control"
          id="nb_personnes"
        />
      </div>

      <!-- Difficulté -->
      <div class="form-group">
        <label for="difficulte" class="h3">Difficulté</label>
        <select
              class="custom-select"
              aria-label="difficulte"
              aria-describedby="difficulte"
            >
              <option value="Padawan" selected>Padawan</option>
              <option value="Jedi">Jedi</option>
              <option value="Maitre">Maitre</option>
            </select>
      </div>

      <!-- Temps de préparation -->
      <div class="form-group">
        <label for="tps_preparation" class="h3">Temps de préparation</label>
        <input
          type="number"
          class="form-control"
          id="tps_preparation"
          placeholder="30 (en minutes)"
        />
      </div>

      <!-- Ingrédients -->
      <div class="form-group">
        <label for="tps_preparation" class="h3">Ingrédients</label>
        <input
          type="number"
          class="form-control"
          id="tps_preparation"
        />
      </div>

      <!-- Etapes -->
      <div class="form-group">
        <label for="tps_preparation" class="h3">Etapes</label>
        <input
          type="number"
          class="form-control"
          id="tps_preparation"
        />
      </div>


    </form>
</template>

<script>
export default {
    name: 'FormRecipe'
}
</script>

<style>

</style>