<template>
    <form @submit.prevent>
        <p class="title">Добавить книгу</p>
        <p class="subtitle">Заполните все поля и добавьте книгу в список</p>
        <label
            class="label"
            for="title"
            >Название</label
        >
        <UiInput
            id="title"
            v-model="book.title"
            v-focus
            type="text"
            placeholder="Название произведения"
            class="input__form input__margin-bottom input__placeholder"
        >
        </UiInput>
        <label
            class="label"
            for="author"
            >Автор</label
        >
        <UiInput
            id="author"
            v-model="book.author"
            type="text"
            placeholder="Имя и фамилия автора"
            class="input__form input__margin-bottom input__placeholder"
        >
        </UiInput>
        <label
            class="label"
            for="year"
            >Год</label
        >
        <UiInput
            id="year"
            v-model="book.year"
            v-focus
            type="text"
            placeholder="Год выпуска"
            class="input__form input__margin-bottom input__placeholder"
        >
        </UiInput>
        <label
            class="label"
            for="genre"
            >Жанр</label
        >
        <UiInput
            id="genre"
            v-model="book.genre"
            v-focus
            type="text"
            placeholder="Добавьте жанр произведения"
            class="input__form input__margin-bottom input__placeholder"
        >
        </UiInput>
        <UiCheckbox
            v-model="checked"
            label="Я согласен с условиями "
        ></UiCheckbox>

        <UiButton
            @click="createBook"
            class="add modal"
        >
            <MyIconPlus></MyIconPlus>
            <p>Добавить</p>
        </UiButton>
    </form>
</template>

<script setup>
    import { defineEmits, reactive } from 'vue';
    import UiButton from './Ui/UiButton.vue';
    import UiCheckbox from './Ui/UiCheckbox.vue';
    import UiInput from './Ui/UiInput.vue';
    import MyIconPlus from './icon/MyIconPlus.vue';

    const emit = defineEmits({ create: 'create' });
    let book = reactive({ title: '', body: '' });

    const createBook = () => {
        book.id = Date.now();
        emit('create', book);
        book = {
            title: '',
            body: '',
        };
    };
</script>

<style lang="css" scoped>
    .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        color: var(--text-title);
        margin-bottom: 8px;
    }
    .subtitle {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: var(--text);
        margin-bottom: 16px;
    }

    .label {
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        color: var(--text-title);
        margin-bottom: 8px;
    }
</style>
