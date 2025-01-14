<template>
    <div>
        <button @click="showVisible">modal</button>
        <BooksList
            :books="books"
            @remove="removeBook"
        ></BooksList>

        <UiModal v-model:show="dialogVisible">
            <BookForm @create="createBook"></BookForm>
        </UiModal>
    </div>
</template>

<script setup>
    import BookForm from '../components/BookForm.vue';
    import BooksList from '../components/BooksList.vue';
    import UiModal from '../components/Ui/UiModal.vue';
    import { ref, reactive } from 'vue';

    let dialogVisible = ref(false);

    function showVisible() {
        dialogVisible.value = true;
    }
    function createBook(book) {
        console.log('createBook');
        console.log(book);
        // posts.value.push(book);
        dialogVisible.value = false;
    }

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
