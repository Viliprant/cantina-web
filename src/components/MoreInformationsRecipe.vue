<template>
  <div class="container text-light mt-3">
    <h1>Recette : Dustcrepe</h1>
    <p>Vous avez donc choisi de préparer le plat "Dustcrepe". Remontez vos manches et c'est parti pour de la gastronomie spaciale digne de Star Wars !</p>
    <p
      class="font-italic"
    >Note : Nous ne nous portons pas garant pour tous maux de ventre et/ou indigestions.</p>

    <!-- Résumé des infos de la liste -->
    <div class="card mb-3 text-dark mt-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="http://localhost:9000/images/dustcrepe.jpg" class="card-img maclasse" alt />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">Dustcrepe</h2>
            <p class="card-text">Croustillant menthe, feta et concombre</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-muted">
                Nombre :
                <span class="font-weight-bold">test</span>
              </li>
              <li class="list-group-item text-muted">
                Difficulté :
                <span class="font-weight-bold">test</span>
              </li>
              <li class="list-group-item text-muted">
                Temps de préparation :
                <span class="font-weight-bold">test</span>
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
            <li class="list-group-item text-muted">patate</li>
            <li class="list-group-item text-muted">patate</li>
            <li class="list-group-item text-muted">patate</li>
            <li class="list-group-item text-muted">patate</li>
            <li class="list-group-item text-muted">patate</li>
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
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quos. Cum inventore sint sequi. Esse saepe temporibus molestias nemo hic delectus laboriosam nihil sapiente maxime, quo nobis? Harum, ducimus corrupti?</li>
            <li
              class="list-group-item text-muted"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quos. Cum inventore sint sequi. Esse saepe temporibus molestias nemo hic delectus laboriosam nihil sapiente maxime, quo nobis? Harum, ducimus corrupti?</li>
            <li
              class="list-group-item text-muted"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quos. Cum inventore sint sequi. Esse saepe temporibus molestias nemo hic delectus laboriosam nihil sapiente maxime, quo nobis? Harum, ducimus corrupti?</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-footer text-center">
        <a href="#" class="btn btn-outline-info mr-2">Modifier</a>
        <a href="#" class="btn btn-outline-danger">Supprimer</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MoreInformationsRecipe"
};
</script>

<style scoped>
.maclasse {
  height: 350px;
}
</style>