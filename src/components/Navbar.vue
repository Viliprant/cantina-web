<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-brand align-middle"><img src="../assets/cantina-logo.png"/><span class="align-middle px-2">Cantina</span></div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item align-middle">
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li class="nav-item align-middle">
            <router-link to="/AddRecipe" class="nav-link">Ajouter une recette</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
  .navbar a.router-link-exact-active {
    color: #17a2b8 !important;
    font-weight: bold !important;
  }
</style>