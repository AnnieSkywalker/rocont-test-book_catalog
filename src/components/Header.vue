<template>
    <header class="header">
        <div class="header__container">
            <div class="header__top">
                <MyLogo></MyLogo>
                <UiInput
                    :model-value="searchQuery"
                    @update:modelValue="setSearchQuery"
                    :placeholder="'Найти ту самую книгу'"
                ></UiInput>
            </div>
            <div class="header__bottom">
                <p class="header__text">книги в каталоге <span class="header__quantity">3</span></p>
                <UiButton class="add">
                    <MyIconPlus></MyIconPlus>
                    <p>Добавить книгу</p>
                </UiButton>
            </div>
        </div>
    </header>
</template>
<script setup>
    import MyIconPlus from './icon/MyIconPlus.vue';
    import MyLogo from './icon/MyLogo.vue';
    import UiButton from './Ui/UiButton.vue';
    import UiInput from './Ui/UiInput.vue';
</script>
<style lang="css">
    .header {
        display: flex;
        flex-direction: column;
        width: 100%;
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
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 25px;
    }
    .header__bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .header__text {
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        color: var(--text-title);
    }
    .header__quantity {
        color: var(--text);
    }
</style>
