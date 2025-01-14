<template>
    <div>
        <BooksList
            :books="books"
            @remove="removeBook"
        ></BooksList>
    </div>
</template>

<script setup>
    import BooksList from '../components/BooksList.vue';
    import { reactive } from 'vue';

    const books = reactive([
        {
            id: 1,
            title: 'ea molestias quasi exercitationem fdsffd',
            author: 'Ivanov Ivan',
            year: 1998,
            genre: 'horrors',
        },
        {
            id: 2,
            title: 'ea molestias quasi exercitationem fdsffd',
            author: 'Ivanov Ivan',
            year: 1998,
            genre: 'horrors',
        },
        {
            id: 3,
            title: 'ea molestias quasi exercitationem fdsffd',
            author: 'Ivanov Ivan',
            year: 1998,
            genre: 'horrors',
        },
    ]);
</script>

<style lang="css" scoped></style>
