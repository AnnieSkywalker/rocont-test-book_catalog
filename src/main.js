import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './style/style.css';
import store from './store';
import directives from './directives';
import Notifications from '@kyvg/vue3-notification';

const app = createApp(App);

directives.forEach(directive => app.directive(directive.name, directive));

app.use(Notifications).use(router).use(store).mount('#app');
