import { createStore } from 'vuex';
import { catalogBooksModule } from './catalogBooksModule';

export default createStore({
    modules: {
        books: catalogBooksModule,
    },
});
