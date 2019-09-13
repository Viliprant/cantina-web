import VueRouter from 'vue-router';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import MoreInformationsRecipe from './components/MoreInformationsRecipe.vue';
import EditRecipe from './components/EditRecipe.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/AddRecipe', component: AddRecipe },
    { path: '/recette/:id', component: MoreInformationsRecipe },
    { path: '/recette/edit/:id', component: EditRecipe }
 ];
 
 const router = new VueRouter({
    routes
 });
 
 export default router