<template>
    <footer
        id="footer"
        class="footer"
    >
        <div class="footer__container">
            <p class="footer__copyright">© {{ date }} Book Catalog</p>
            <p class="footer__discription">
                "Это тестовое задание компании Rocont. Footer не входил в дизайн проект, используется как вспомогательный компонент"<br />
                <span
                    style="cursor: pointer"
                    @click="$router.push('/')"
                    >Book Catalog</span
                >
                <br />
                <span
                    style="cursor: pointer"
                    @click="$router.push('/privacy-policy')"
                    >Privacy Policy</span
                >
            </p>
        </div>
    </footer>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    const date = ref(0);

    function getDate() {
        let xmas = new Date();
        date.value = xmas.getFullYear();
    }

    onMounted(() => {
        getDate();
    });
</script>

<style lang="css" scoped>
    .footer {
        width: 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        background-color: var(--background-color-footer);
    }
    .footer__container {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1024px;
        padding: 16px 40px;
    }
    @media screen and (max-width: 767px) {
        .footer__container {
            max-width: 768px;
            padding: 16px 72px;
        }
    }
    @media screen and (max-width: 479px) {
        .footer__container {
            max-width: 768px;
            padding: 16px 28px;
        }
    }
    @media screen and (max-width: 319px) {
        .footer__container {
            max-width: 768px;
            padding: 16px 20px;
        }
    }
    .footer__copyright {
        margin: 0;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: var(--text-title);
    }
    @media screen and (max-width: 767px) {
        .footer__copyright {
            font-size: 14px;
            line-height: 17px;
        }
    }
    .footer__discription {
        margin: 0;
        padding-bottom: 30px;
        font-size: 12px;
        font-weight: 400;
        line-height: 150%;
        color: var(--text);
    }
</style>
