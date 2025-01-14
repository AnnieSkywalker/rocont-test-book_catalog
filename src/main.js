import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './style/style.css';
import store from './store';
import directives from './directives';

const app = createApp(App);

directives.forEach(directive => app.directive(directive.name, directive));

app.use(router).use(store).mount('#app');
