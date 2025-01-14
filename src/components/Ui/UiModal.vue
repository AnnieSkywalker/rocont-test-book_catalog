<template>
    <div
        class="myModal"
        v-if="show"
        @click.stop="hideModal"
    >
        <div
            @click.stop
            class="myModalContent"
        >
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
    import { defineEmits, defineProps } from 'vue';

    const { show } = defineProps({
        show: {
            type: Boolean,
            default: false,
        },
    });
    const emit = defineEmits(['update:show']);

    const hideModal = () => {
        emit('update:show', false);
    };
</script>

<style scoped>
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
        padding: 32px;
        background-color: var(--background-color);
        border-radius: 16px;
        max-width: 464px;
        min-width: 250px;
    }
</style>
