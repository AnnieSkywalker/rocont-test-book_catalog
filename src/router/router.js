import CatalogBookPage from '../pages/CatalogBookPage.vue';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage.vue';
import { createRouter, createMemoryHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: CatalogBookPage,
    },
    {
        path: '/privacy-policy',
        component: PrivacyPolicyPage,
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
