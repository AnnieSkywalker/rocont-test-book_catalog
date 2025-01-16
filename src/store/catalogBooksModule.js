import axios from 'axios';

export const catalogBooksModule = {
    state: () => ({
        books: [],
        isBooksLoading: false,
        modalVisible: false,
        searchQuery: '',
        limit: 10,
    }),
    getters: {
        searchedBook(state) {
            return [...state.books].filter(book => {
                return book.title.toLowerCase().includes(state.searchQuery.toLowerCase());
            });
        },
    },
    mutations: {
        setBooks(state, books) {
            state.books = books;
        },
        setModalVisible(state, modalVisible) {
            state.modalVisible = modalVisible;
        },
        setLoading(state, bool) {
            state.isBooksLoading = bool;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async booksFetch(context) {
            try {
                context.commit('setLoading', true);
                let response = await axios.get('https://www.freetestapi.com/api/v1/books?limit=5');
                context.commit('setBooks', response.data);
            } catch (e) {
                console.log(e);
            } finally {
                context.commit('setLoading', false);
            }
        },
        removeBook(context, payload) {
            context.commit(
                'setBooks',
                context.state.books.filter(p => p.id !== payload.id),
            );
        },
    },
    namespaced: true,
};
