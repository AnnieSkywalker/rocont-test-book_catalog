<template>
    <div class="myInput__wrapper">
        <MyIconSearch class="myIconSearch"></MyIconSearch>
        <input
            :value="modelValue"
            @input="updateInput"
            class="myInput"
            type="text"
        />
    </div>
</template>

<script setup>
    import { defineEmits, defineProps } from 'vue';
    import MyIconSearch from '../icon/MyIconSearch.vue';

    const { modelValue } = defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);

    const updateInput = event => {
        emit('update:modelValue', event.target.value);
    };
</script>

<style lang="css" scoped>
    .myInput__wrapper {
        position: relative;
    }
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
    .myIconSearch {
        position: absolute;
        top: 11px;
        left: 10px;
    }
</style>
