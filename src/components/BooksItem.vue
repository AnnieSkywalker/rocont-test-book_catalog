<template>
    <section class="book">
        <div class="book__content">
            <p class="book__title">{{ book.title }}</p>
            <div class="book__wrap">
                <p class="book__author">{{ book.author }}</p>
                <p class="book__year">{{ book.publication_year }}</p>
                <p
                    class="book__genre"
                    v-for="genre in book.genre"
                >
                    {{ genre }}
                </p>
            </div>
        </div>
        <div class="book__btn">
            <MyIconEdit></MyIconEdit>
        </div>
    </section>
</template>

<script setup>
    import { defineProps } from 'vue';
    import MyIconEdit from './icon/MyIconEdit.vue';

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
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
        gap: 16px;
    }

    .book__title {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
        color: var(--text-title);
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
