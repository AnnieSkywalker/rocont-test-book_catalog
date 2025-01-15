<template>
    <div>
        <BooksList
            v-if="!isBooksLoading"
            :books="searchedBook"
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

    const searchedBook = computed(() => store.getters['books/searchedBook']);

    const setBooks = payload => store.commit('books/setBooks', payload);
    const setModalVisible = payload => store.commit('books/setModalVisible', payload);

    function createBook(book) {
        books.value.push(book);
        setModalVisible(false);
    }

    // function removeBook(book) {
    //     return store.dispatch('Books/removeBook', book);
    // }
</script>

<style lang="css" scoped></style>
