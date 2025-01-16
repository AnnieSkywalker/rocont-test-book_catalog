<template>
    <div class="catalog">
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
    import { computed, onMounted } from 'vue';
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

<style lang="css" scoped>
    .catalog {
        padding: 16px 40px;
        width: 100%;
        max-width: 1024px;
    }
    @media screen and (max-width: 767px) {
        .catalog {
            max-width: 768px;
            padding: 16px 72px;
        }
    }
    @media screen and (max-width: 479px) {
        .catalog {
            max-width: 768px;
            padding: 16px 28px;
        }
    }
    @media screen and (max-width: 319px) {
        .catalog {
            max-width: 768px;
            padding: 16px 20px;
        }
    }
</style>
