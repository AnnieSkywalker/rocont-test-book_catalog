<template>
    <div>
        <BooksList
            v-if="!isBooksLoading"
            :books="books"
            @remove="removeBook"
        ></BooksList>
        <UiLoader v-else></UiLoader>

        <UiModal>
            <BookForm @create="createBook"></BookForm>
        </UiModal>
    </div>
</template>

<script setup>
    import BookForm from '../components/BookForm.vue';
    import BooksList from '../components/BooksList.vue';
    import UiModal from '../components/Ui/UiModal.vue';
    import UiLoader from '../components/Ui/UiLoader.vue';
    import { computed, onMounted, ref, reactive } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const booksFetch = () => store.dispatch('books/booksFetch');
    onMounted(() => booksFetch());

    const books = computed(() => store.state.books.books);
    const isBooksLoading = computed(() => store.state.books.isBooksLoading);

    // const selectedSort = computed(() => store.state.books.selectedSort);
    // const searchQuery = computed(() => store.state.books.searchQuery);

    // const sortedBook = computed(() => store.getters['books/sortedBook']);
    // const sortedAndSearchedBook = computed(() => store.getters['books/sortedAndSearchedBook']);

    const setBooks = payload => store.commit('books/setBooks', payload);

    // const setSearchQuery = payload => store.commit('books/setSearchQuery', payload);
    // const setSelectedSort = payload => store.commit('books/setSelectedSort', payload);

    // function createBook(book) {
    //     console.log('createBook');
    //     console.log(book);
    //     // posts.value.push(book);
    //     dialogVisible.value = false;
    // }

    // function removeBook(book) {
    //     return store.dispatch('Books/removeBook', book);
    // }
</script>

<style lang="css" scoped></style>
