import VueRouter from 'vue-router';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import MoreInformationsRecipe from './components/MoreInformationsRecipe.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/AddRecipe', component: AddRecipe },
    { path: '/recette/:id', component: MoreInformationsRecipe }
 ];
 
 const router = new VueRouter({
    routes
 });
 
 export default router