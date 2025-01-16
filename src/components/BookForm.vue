<template>
    <p class="title">Добавить книгу</p>
    <p class="subtitle">Заполните все поля и добавьте книгу в список</p>
    <form @submit.prevent>
        <div class="form__wrap-item">
            <label
                class="label"
                for="title"
            >
                Название
            </label>
            <UiInput
                id="title"
                name="title"
                v-model="book.title"
                v-focus
                type="text"
                placeholder="Название произведения"
                class="input__form input__margin-bottom input__placeholder"
                :class="{ input__error: v$.title.$error }"
            >
            </UiInput>
            <p
                class="error__message"
                v-if="v$.title.$error"
            >
                {{ v$.title.$errors[0].$message }}
            </p>
        </div>
        <div class="form__wrap-item">
            <label
                class="label"
                for="author"
            >
                Автор
            </label>
            <UiInput
                id="author"
                name="author"
                v-model="book.author"
                type="text"
                placeholder="Имя и фамилия автора"
                class="input__form input__margin-bottom input__placeholder"
                :class="{ input__error: v$.author.$error }"
            >
            </UiInput>
            <p
                class="error__message"
                v-if="v$.author.$error"
            >
                {{ v$.author.$errors[0].$message }}
            </p>
        </div>
        <div class="form__wrap-item">
            <label
                class="label"
                for="publication_year"
                >Год</label
            >
            <UiInput
                id="publication_year"
                name="publication_year"
                v-model="book.publication_year"
                type="text"
                placeholder="Год выпуска"
                class="input__form input__margin-bottom input__placeholder"
                :class="{ input__error: v$.publication_year.$error }"
            >
            </UiInput>
            <p
                class="error__message"
                v-if="v$.publication_year.$error"
            >
                {{ v$.publication_year.$errors[0].$message }}
            </p>
        </div>
        <div class="form__wrap-item">
            <label
                class="label"
                for="genre"
                >Жанр</label
            >
            <UiInput
                id="genre"
                name="genre"
                v-model="book.genre"
                type="text"
                placeholder="Добавьте жанр произведения"
                class="input__form input__margin-bottom input__placeholder"
                :class="{ input__error: v$.genre.$error }"
            >
            </UiInput>
            <p
                class="error__message"
                v-if="v$.genre.$error"
            >
                {{ v$.genre.$errors[0].$message }}
            </p>
        </div>
        <UiCheckbox
            v-model="checked"
            label="Я согласен с условиями "
        ></UiCheckbox>
    </form>
    <UiButton
        @click="createBook"
        class="add modal"
    >
        <MyIconPlus></MyIconPlus>
        <p>Добавить</p>
    </UiButton>
</template>

<script setup>
    import { useVuelidate } from '@vuelidate/core';
    import { required } from '@vuelidate/validators';
    import { computed, defineEmits, reactive, ref, watch } from 'vue';
    import UiButton from './Ui/UiButton.vue';
    import UiCheckbox from './Ui/UiCheckbox.vue';
    import UiInput from './Ui/UiInput.vue';
    import MyIconPlus from './icon/MyIconPlus.vue';
    import { useNotification } from '@kyvg/vue3-notification';

    const { notify } = useNotification();

    let checked = ref(true);

    let book = reactive({ title: '', author: '', publication_year: '', genre: '' });
    const rules = computed(() => {
        return {
            title: { required },
            author: { required },
            publication_year: { required },
            genre: { required },
        };
    });
    const v$ = useVuelidate(rules, book);

    const emit = defineEmits({ create: 'create' });

    async function createBook() {
        const id = Date.now();
        const result = await v$.value.$validate();

        if (!result) {
            notify({
                id,
                type: 'error',
                title: 'Книга не добавлена',
                duration: 5000,
            });
            return;
        }

        if (!checked.value) {
            notify({
                id,
                type: 'error',
                title: 'Книга не добавлена',
                duration: 5000,
            });
            return;
        }

        book.id = Date.now();
        emit('create', book);
        notify({
            id,
            type: 'success',
            title: 'Добавление книги',
            duration: 4000,
        });
        book = {
            title: '',
            author: '',
            publication_year: '',
            genre: '',
        };
    }
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
    .form__wrap-item {
        position: relative;
        margin-bottom: 20px;
    }
    .label {
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        color: var(--text-title);
        margin-bottom: 8px;
    }
    .error__message {
        color: var(--error);
        font-size: 10px;
        font-weight: 400;
        line-height: 10px;
        position: absolute;
        bottom: -15px;
        left: 0;
    }
</style>
