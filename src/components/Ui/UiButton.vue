<template>
    <button class="myBtn"><slot></slot></button>
</template>

<style lang="css" scoped>
    .myBtn {
        width: fit-content;
        color: var(--button-text);
        box-sizing: border-box;
        border: 1px solid var(--border-button);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        border-radius: 8px;
    }

    .myBtn:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    .myBtn:active {
        opacity: 0.9;
    }

    .myBtn.add {
        background-color: var(--bc-button);
        border: 1px solid var(--border-button);
    }
    @media screen and (max-width: 479px) {
        .myBtn.add {
            position: fixed;
            bottom: 16px;
            left: 16px;
            right: 16px;
            width: auto;
            padding: 10px 12px;
        }
    }
    @media screen and (max-width: 319px) {
        .myBtn.add {
            bottom: 8px;
            left: 8px;
            right: 8px;
        }
    }
    .myBtn.add.modal {
        margin-left: auto;
        width: 114px;
        height: 41px;
        gap: 7px;
        padding: 10px 12px;
    }
    @media screen and (max-width: 479px) {
        .myBtn.add.modal {
            position: static;
            width: 100%;
            height: auto;
        }
    }
    .myBtn.remove {
        background-color: var(--bc-button-remove);
        border: 1px solid var(--border-button-remove);
    }

    .myBtn,
    p {
        white-space: nowrap;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }

    .myBtn.add.modal,
    p {
        font-size: 14px;
        line-height: 21px;
    }
</style>
