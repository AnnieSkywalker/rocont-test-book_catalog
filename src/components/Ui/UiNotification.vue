<template>
    <notifications position="bottom center">
        <template #body="props">
            <div
                class="my-notification"
                :class="props.item.type"
            >
                <MyIconDocClose
                    class="icon-note"
                    v-if="props.item.type == 'error'"
                ></MyIconDocClose>
                <MyIconCheck
                    class="icon-note"
                    v-else-if="props.item.type == 'success'"
                ></MyIconCheck>
                <MyIconRemove
                    class="icon-note"
                    v-else-if="props.item.type == 'delete'"
                ></MyIconRemove>
                <p class="my-notification-title">
                    {{ props.item.title }}
                </p>
                <MyIconCloseNote @click="props.close"></MyIconCloseNote>
            </div>
        </template>
    </notifications>
</template>

<script setup>
    import MyIconCheck from '../icon/MyIconCheck.vue';
    import MyIconCloseNote from '../icon/MyIconCloseNote.vue';
    import MyIconDocClose from '../icon/MyIconDocClose.vue';
    import MyIconRemove from '../icon/MyIconRemove.vue';
</script>

<style lang="css">
    .vue-notification-group {
        width: auto !important;
        margin: 0 0 16px;
        box-sizing: border-box;
    }
    @media screen and (max-width: 479px) {
        .vue-notification-group {
            width: 100% !important;
            left: 0 !important;
            margin: 0 0 65px;
            padding: 0 16px;
        }
    }
    @media screen and (max-width: 319px) {
        .vue-notification-group {
            padding: 0 7px;
        }
    }
    .my-notification {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin: 0 0 8px;
        padding: 12px 16px;
        border-radius: 8px;
    }
    .my-notification-title {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--text-notification);
    }
    .my-notification.success,
    .my-notification.delete {
        background-color: var(--notification-success);
    }

    .my-notification.error {
        background-color: var(--notification-error);
    }
</style>
