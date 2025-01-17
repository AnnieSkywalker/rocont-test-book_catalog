import CatalogBookPage from '../pages/CatalogBookPage.vue';
import { createRouter, createMemoryHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: CatalogBookPage,
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
