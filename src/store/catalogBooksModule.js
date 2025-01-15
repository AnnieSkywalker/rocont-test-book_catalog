import axios from 'axios';

export const catalogBooksModule = {
    state: () => ({
        books: [],
        isBooksLoading: false,
        modalVisible: false,
        selectedSort: '',
        searchQuery: '',
        limit: 10,
    }),
    getters: {
        // sortedBook(state) {
        //     return [...state.posts].sort((post1, post2) => {
        //         return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
        //     });
        // },
        // sortedAndSearchedBook(state) {
        //     console.log(state);
        //     return getters.sortedPost.filter(post => {
        //         return post.title.toLowerCase().includes(state.searchQuery.toLowerCase());
        //     });
        // },
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
        // setSelectedSort(state, selectedSort) {
        //     state.selectedSort = selectedSort;
        // },
        // setSearchQuery(state, searchQuery) {
        //     state.searchQuery = searchQuery;
        // },
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
        // removePost(context, payload) {
        //     context.commit(
        //         'setPosts',
        //         context.state.posts.filter(p => p.id !== payload.id),
        //     );
        // },
    },
    namespaced: true,
};
