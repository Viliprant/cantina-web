import VueRouter from 'vue-router';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';

const routes = [
    { path: '/', component: Home },
    { path: '/AddRecipe', component: AddRecipe },
 ];
 
 const router = new VueRouter({
    routes
 });
 
 export default router