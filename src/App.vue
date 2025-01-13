<script setup>
    import { RouterView } from 'vue-router';
</script>

<template>
    <div class="main-container">
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
