<template>
    <div>
        <div class="text-desktop">
            <h1>H1 Заголовок</h1>
            <p class="lead">Lead Название книги</p>
            <p class="p-bold">p bold Лейбл инпута</p>
            <p class="p">p Текст</p>
            <p class="note">note Подпись у форм и чекбокс</p>
        </div>
        <div>
            <UiCheckbox
                v-model="checked"
                label="Я согласен с условиями "
            ></UiCheckbox>
        </div>
    </div>
</template>

<script setup>
    import UiCheckbox from '../Ui/UiCheckbox.vue';
</script>

<style lang="css" scoped>
    .text-desktop {
        width: 505px;
        top: 228px;
        left: -2393px;
        gap: 0px;
        border-radius: 2px 0px 0px 0px;
        border: 1px 0px 0px 0px;
        opacity: 0px;
        background-color: var(--white);
    }

    h1 {
        font-size: 36px;
        font-weight: 600;
        line-height: 36px;
        color: var(--text-title);
        text-align: left;
    }
    .lead {
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        color: var(--text-title);
        text-align: left;
    }
    .p-bold {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: var(--text-title);
        text-align: left;
    }
    .p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--text);
        text-align: left;
    }
    .note {
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        color: var(--text);
        text-align: left;
    }
</style>
