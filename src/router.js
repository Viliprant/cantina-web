import VueRouter from 'vue-router';
import Home from './components/Home';
import Onglet_1 from './components/Onglet_1';
import Onglet_2 from './components/Onglet_2';
import Onglet_3 from './components/Onglet_3';

const routes = [
    { path: '/', component: Home },
    { path: '/Onglet_1', component: Onglet_1 },
    { path: '/Onglet_2', component: Onglet_2 },
    { path: '/Onglet_3', component: Onglet_3 }
 ];
 
 const router = new VueRouter({
    routes
 });
 
 export default router