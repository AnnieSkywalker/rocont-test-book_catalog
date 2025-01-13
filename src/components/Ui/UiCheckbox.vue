<template>
    <div class="container">
        <input
            id="myCheckbox"
            class="custom-checkbox"
            type="checkbox"
            :checked="isChecked"
            :value="value"
            @change="updateInput"
        />
        <label
            for="myCheckbox"
            class="label"
        >
            {{ label }}
        </label>
        <a href="#">Политики конфиденциальности</a>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const { value, modelValue, label, trueValue, falseValue } = defineProps({
        value: {
            type: String,
            required: true,
        },
        modelValue: { default: '' },
        label: { type: String },
        trueValue: { default: true },
        falseValue: { default: false },
    });

    const emit = defineEmits(['update:modelValue']);
    const toggleCheckbox = event => {
        emit('update:modelValue', event.target.checked);
    };
</script>

<style lang="css" scoped>
    .label,
    a {
        font-size: 10px;
        color: var(--text);
        font-weight: 400;
        line-height: 10px;
    }
    a {
        margin-left: 3px;
    }
    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
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
        width: 12px;
        height: 12px;
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
