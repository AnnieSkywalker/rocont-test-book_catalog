import CatalogBookPage from '../pages/CatalogBookPage.vue';
import UiPage from '../pages/UiPages.vue';
import { createRouter, createMemoryHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: CatalogBookPage,
    },
    {
        path: '/ui',
        component: UiPage,
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
