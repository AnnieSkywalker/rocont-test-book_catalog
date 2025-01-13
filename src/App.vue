<script setup>
    import { RouterView } from 'vue-router';
    import Header from './components/Header.vue';
</script>

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
    </div>
</template>
