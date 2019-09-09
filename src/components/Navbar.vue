<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Squelette APP</a>
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
          <li class="nav-item">
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Onglet_1" class="nav-link">Onglet 1</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Onglet_2" class="nav-link">Onglet 2</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Onglet_3" class="nav-link">Onglet 3</router-link>
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
    color: #128953 !important;
    font-weight: bold !important;
  }
</style>