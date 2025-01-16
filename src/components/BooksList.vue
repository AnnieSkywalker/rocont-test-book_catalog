<template>
    <section class="books">
        <div
            class="books__wrapper"
            v-if="books.length > 0"
        >
            <TransitionGroup name="books-list">
                <BooksItem
                    v-for="(book, index) in books"
                    :book="book"
                    :index="index"
                    :key="book.id"
                ></BooksItem>
            </TransitionGroup>
        </div>
        <h2
            v-else
            class="section-title"
        >
            По вашему запросу ничего не найдено
        </h2>
    </section>
</template>

<script setup>
    import { defineProps } from 'vue';
    import BooksItem from './BooksItem.vue';

    const { books } = defineProps({ books: { type: Array, required: true } });
</script>

<style lang="css" scoped>
    .books__wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .book-list-move,
    .book-list-enter-active,
    .book-list-leave-active {
        transition: all 0.4s ease;
    }

    .book-list-enter-from,
    .book-list-leave-to {
        opacity: 0;
        transform: translatex(130px);
    }
</style>
