<template>
    <header class="header">
        <div class="header__container">
            <div class="header__top">
                <MyLogo></MyLogo>
                <UiInput
                    :model-value="searchQuery"
                    @update:modelValue="setSearchQuery"
                    placeholder="Найти ту самую книгу"
                ></UiInput>
            </div>
            <div class="header__bottom">
                <span>книги в каталоге 4</span>
                <button>добавить книги</button>
            </div>
        </div>
    </header>
</template>
<script setup>
    import MyLogo from './icon/MyLogo.vue';
    import UiInput from './Ui/UiInput.vue';
</script>
<style lang="css">
    .header {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 110px;
        background-color: var(--background-color-header);
    }
    .header__container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 1024px;
        padding: 16px 40px;
    }
    .header__top {
        display: flex;
        flex-direction: row;
        gap: 25px;
    }
</style>
