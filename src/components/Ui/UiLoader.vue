<template>
    <div class="loader book">
        <figure class="page"></figure>
        <figure class="page"></figure>
        <figure class="page"></figure>
    </div>
</template>

<style lang="css" scoped>
    .loader {
        margin: 5% auto 30px;
    }

    .book {
        border: 4px solid var(--loading);
        width: 60px;
        height: 45px;
        position: relative;
        perspective: 150px;
    }

    .page {
        display: block;
        width: 30px;
        height: 45px;
        border: 4px solid var(--loading);
        border-left: 1px solid var(--loading);
        margin: 0;
        position: absolute;
        right: -4px;
        top: -4px;
        overflow: hidden;
        background: var(--loading);
        transform-style: preserve-3d;
        -webkit-transform-origin: left center;
        transform-origin: left center;
    }

    .book .page:nth-child(1) {
        -webkit-animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.6s infinite;
        animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.6s infinite;
    }

    .book .page:nth-child(2) {
        -webkit-animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.45s infinite;
        animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.45s infinite;
    }

    .book .page:nth-child(3) {
        -webkit-animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.2s infinite;
        animation: pageTurn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.2s infinite;
    }

    @-webkit-keyframes pageTurn {
        0% {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
        }
        20% {
            background: var(--bg-loading);
        }
        40% {
            background: var(--bg-loading);
            -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
        }
        100% {
            background: var(--bg-loading);
            -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
        }
    }

    @keyframes pageTurn {
        0% {
            transform: rotateY(0deg);
        }
        20% {
            background: var(--bg-loading);
        }
        40% {
            background: var(--bg-loading);
            transform: rotateY(-180deg);
        }
        100% {
            background: var(--bg-loading);
            transform: rotateY(-180deg);
        }
    }
</style>
