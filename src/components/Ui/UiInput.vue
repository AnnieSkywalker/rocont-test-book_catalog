<template>
    <input
        :value="modelValue"
        @input="updateInput"
        class="myInput"
        type="text"
        :placeholder="placeholder"
    />
</template>

<script setup>
    import { defineEmits, defineProps } from 'vue';

    const { modelValue } = defineProps(['modelValue', 'placeholder']);
    const emit = defineEmits(['update:modelValue']);

    const updateInput = event => {
        emit('update:modelValue', event.target.value);
    };
</script>

<style lang="css" scoped>
    .myInput {
        width: 100%;
        border: 1px solid var(--border-input-search);
        border-radius: 6px;
        padding: 10px 30px;
        background-color: var(--bc-input-search);
        box-sizing: border-box;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: var(--text);
        outline: none;
    }
    .myInput::placeholder {
        color: var(--text);
    }
    .myInput:focus {
        border: 1px solid var(--border-input-search-focus);
    }
</style>
