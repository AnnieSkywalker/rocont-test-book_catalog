<template>
    <form @submit.prevent>
        <UiInput
            v-model="book.title"
            v-focus
            type="text"
            placeholder="название"
            class="input__margin-bottom"
        >
        </UiInput>
        <UiInput
            v-model="book.author"
            type="text"
            placeholder="название"
            class="input__margin-bottom"
        >
        </UiInput>
        <UiInput
            v-model="book.title"
            v-focus
            type="text"
            placeholder="название"
            class="input__margin-bottom"
        >
        </UiInput>
        <UiInput
            v-model="book.title"
            v-focus
            type="text"
            placeholder="название"
            class="input__margin-bottom"
        >
        </UiInput>
        <UiCheckbox
            v-model="checked"
            label="Я согласен с условиями "
        ></UiCheckbox>

        <UiButton
            @click="createBook"
            class="add"
        >
            <MyIconPlus></MyIconPlus>
            <p>Добавить книгу</p>
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
    .input__margin-bottom {
        margin-bottom: 20px;
    }

    .myBtn {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
        box-sizing: border-box;
        border: 1px solid var(--border-color);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 20px;
        gap: 10px;
        cursor: pointer;
        height: 50px;
        min-width: 150px;
        flex: none;
        flex-grow: 1;
    }

    .myBtn.add {
        padding: 0;
        max-width: 875px;
        min-width: 150px;
        height: 50px;
        border: 2px solid var(--primary);
        border-radius: 2px;
        cursor: pointer;
    }
</style>
