<template>
    <header class="header">
        <div class="header__container">
            <div class="header__top">
                <MyLogo></MyLogo>
                <div class="header__input-wrap">
                    <MyIconSearch class="myIconSearch"></MyIconSearch>
                    <UiInput
                        :model-value="searchQuery"
                        @update:modelValue="setSearchQuery"
                        :placeholder="'Найти ту самую книгу'"
                    ></UiInput>
                </div>
            </div>
            <div class="header__bottom">
                <p
                    class="header__text"
                    @click="$router.push('/')"
                >
                    книги в каталоге <span class="header__quantity">{{ books.length }}</span>
                </p>
                <UiButton
                    class="add"
                    @click="showVisible"
                >
                    <MyIconPlus></MyIconPlus>
                    <p>Добавить книгу</p>
                </UiButton>
            </div>
        </div>
    </header>
</template>
<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import MyIconPlus from './icon/MyIconPlus.vue';
    import MyIconSearch from './icon/MyIconSearch.vue';
    import MyLogo from './icon/MyLogo.vue';
    import UiButton from './Ui/UiButton.vue';
    import UiInput from './Ui/UiInput.vue';

    const store = useStore();

    const books = computed(() => store.state.books.books);
    const searchQuery = computed(() => store.state.books.searchQuery);

    const setModalVisible = payload => store.commit('books/setModalVisible', payload);
    const setSearchQuery = payload => store.commit('books/setSearchQuery', payload);

    function showVisible() {
        setModalVisible(true);
    }
</script>
<style lang="css" scoped>
    .header {
        display: flex;
        justify-content: center;
        background-color: var(--background-color-header);
    }
    .header__container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 1024px;
        padding: 16px 40px;
    }
    @media screen and (max-width: 767px) {
        .header__container {
            max-width: 768px;
            padding: 16px 72px;
        }
    }
    @media screen and (max-width: 479px) {
        .header__container {
            max-width: 768px;
            padding: 16px 28px;
        }
    }
    @media screen and (max-width: 319px) {
        .header__container {
            max-width: 768px;
            padding: 16px 20px;
        }
    }

    .header__top {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 25px;
    }
    .header__input-wrap {
        width: 100%;
        position: relative;
    }
    .header__bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .header__text {
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        color: var(--text-title);
    }
    .header__text:hover {
        opacity: 0.8;
    }
    .header__quantity {
        color: var(--text);
    }
    .myIconSearch {
        position: absolute;
        top: 11px;
        left: 10px;
    }
</style>
