<template>
    <div class="container">
        <input
            id="myCheckbox"
            class="custom-checkbox"
            type="checkbox"
            :checked="modelValue"
            @change="toggleCheckbox"
        />
        <label
            for="myCheckbox"
            class="label"
        >
            {{ label }}
        </label>
        <a
            href="#"
            @click="addNotification"
            >Политики конфиденциальности</a
        >
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { useNotification } from '@kyvg/vue3-notification';

    const { notify } = useNotification();

    const { modelValue, label } = defineProps({
        modelValue: {
            type: Boolean,
            required: true,
        },
        label: { type: String },
    });

    const emit = defineEmits(['update:modelValue']);
    const toggleCheckbox = event => {
        emit('update:modelValue', event.target.checked);
    };
    function addNotification() {
        const id = Date.now();
        notify({
            id,
            type: 'success',
            title: `Переход на страницу "Политики конфиденциальности"`,
            duration: 2000,
        });
        return false;
    }
</script>

<style lang="css" scoped>
    .label,
    a {
        white-space: nowrap;
        font-size: 14px;
        color: var(--text);
        font-weight: 400;
        line-height: 10px;
    }
    a {
        margin-left: 3px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        margin-bottom: 16px;
    }
    @media screen and (max-width: 479px) {
        .container {
            gap: 10px;
        }
        a {
            margin-left: 32px;
        }
    }
    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-checkbox + label {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .custom-checkbox + label::before {
        content: '';
        display: inline-block;
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 2px solid var(--border-checkbox);
        border-radius: 3px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    .custom-checkbox:checked + label::before {
        background-color: var(--bc-checkbox-checked);
        border: 2px solid var(--border-checkbox-checked);
        background-image: url('../../images/checkbox-flag.svg');
    }
</style>
