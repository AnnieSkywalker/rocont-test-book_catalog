<template>
    <div
        class="myModal"
        v-if="modalVisible"
        @click.stop="hideModal"
    >
        <div
            @click.stop
            class="myModalContent"
        >
            <slot></slot>
            <MyIconClose
                class="MyIconClose"
                @click="hideModal"
            ></MyIconClose>
        </div>
    </div>
</template>
<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import MyIconClose from '../icon/MyIconClose.vue';

    const store = useStore();

    const modalVisible = computed(() => store.state.books.modalVisible);
    const setModalVisible = payload => store.commit('books/setModalVisible', payload);

    const hideModal = () => {
        setModalVisible(false);
    };
</script>

<style lang="css" scoped>
    .myModal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.1);
    }
    .myModalContent {
        position: relative;
        padding: 32px;
        background-color: var(--background-color);
        border-radius: 16px;
        max-width: 464px;
    }
    @media screen and (max-width: 479px) {
        .myModalContent {
            width: 100%;
            height: -webkit-fill-available;
            max-width: none;
            min-width: none;
            border-radius: 0;
            padding: 28px;
        }
    }
    @media screen and (max-width: 319px) {
        .myModalContent {
            padding: 20px;
        }
    }
    .MyIconClose {
        position: absolute;
        top: 38px;
        right: 38px;
        cursor: pointer;
    }
    @media screen and (max-width: 479px) {
        .MyIconClose {
            top: 16px;
            right: 16px;
        }
    }
</style>
