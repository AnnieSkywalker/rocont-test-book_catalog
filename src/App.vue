<template>
    <div class="main-container">
        <Header></Header>
        <main
            id="main"
            class="content"
        >
            <div class="app">
                <RouterView></RouterView>
            </div>
        </main>
        <UiNotification></UiNotification>
    </div>
</template>

<script setup>
    import { RouterView } from 'vue-router';
    import Header from './components/Header.vue';
    import UiNotification from './components/Ui/UiNotification.vue';
</script>

<style lang="css">
    .app {
        display: flex;
        justify-content: center;
    }
</style>
