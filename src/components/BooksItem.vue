<template>
    <section class="book">
        <div class="book__content">
            <p class="book__title">{{ book.title }}</p>
            <div class="book__wrap">
                <p class="book__author">{{ book.author }}</p>
                <p class="book__year">{{ book.publication_year }}</p>
                <p
                    v-if="Array.isArray(book.genre)"
                    class="book__genre"
                    v-for="genre in book.genre"
                >
                    {{ genre }}
                </p>
                <p
                    class="book__genre"
                    v-else
                >
                    {{ book.genre }}
                </p>
            </div>
        </div>
        <div class="book__btn">
            <MyIconRemove @click="removeBook(book)"></MyIconRemove>
        </div>
    </section>
</template>

<script setup>
    import { computed, defineProps } from 'vue';
    import MyIconRemove from './icon/MyIconRemove.vue';
    import { useNotification } from '@kyvg/vue3-notification';
    import { useStore } from 'vuex';

    const { notify } = useNotification();
    const store = useStore();

    const books = computed(() => store.state.books.books);
    const setModalVisible = payload => store.commit('books/setModalVisible', payload);

    const { book, index } = defineProps({
        book: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    });
    function removeBook(book) {
        const id = Date.now();
        notify({
            id,
            type: 'delete',
            title: 'Книга удалена',
            duration: 2000,
        });
        return store.dispatch('books/removeBook', book);
    }
</script>

<style lang="css" scoped>
    .book {
        width: 100%;
        padding: 16px;
        display: flex;
        flex-direction: row;
        gap: 8px;
        border-radius: 16px;
        box-sizing: border-box;
        background-color: var(--bg-book-item);
    }

    .book-enter {
        transform: translateX(-350px);
    }

    .book-enter-active {
        transform: translateX(0px);
        transition: all 500ms ease-in;
    }

    .book-exit {
        opacity: 1;
    }

    .book-exit-active {
        transform: translateX(-350px);
        transition: all 500ms ease-in;
    }

    .book__body {
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        word-break: break-word;
    }
    .book__content {
        display: flex;
        gap: 9px;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .book__wrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
    }

    .book__title {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
        color: var(--text-title);
        word-break: break-word;
    }
    .book__author,
    .book__genre,
    .book__year {
        color: var(--text);
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
    }
    .book__btn {
        display: flex;
        gap: 10px;
    }
</style>
