import axios from 'axios';

export const catalogBooksModule = {
    state: () => ({
        books: [],
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
        // setSelectedSort(state, selectedSort) {
        //     state.selectedSort = selectedSort;
        // },
        // setSearchQuery(state, searchQuery) {
        //     state.searchQuery = searchQuery;
        // },
    },
    actions: {
        async booksFetch(context) {
            console.log(context);
            try {
                let response = await axios.get('https://www.freetestapi.com/api/v1/books?limit=5');
                console.log(response);
                context.commit('setBooks', response.data);
            } catch (e) {
                console.log(e);
            } finally {
                console.log('finally');
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
