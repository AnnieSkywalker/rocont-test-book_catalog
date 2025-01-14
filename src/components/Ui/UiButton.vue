<template>
    <button class="myBtn"><slot></slot></button>
</template>

<style lang="css" scoped>
    .myBtn {
        color: var(--button-text);
        box-sizing: border-box;
        border: 1px solid var(--border-button);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        flex: none;
        flex-grow: 1;
        padding: 12px 16px;
        border-radius: 8px;
    }

    .myBtn:hover {
        opacity: 0.8;
    }

    .myBtn.add {
        background-color: var(--bc-button);
        border: 1px solid var(--border-button);
    }

    .myBtn.remove {
        background-color: var(--bc-button-remove);
        border: 1px solid var(--border-button-remove);
    }

    .myBtn,
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }

    /* .myBtn.open {
        color: var(--primary);
        border: 1px solid var(--primary);
        background: none;
        border-radius: 8px;
    } */
</style>
