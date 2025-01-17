<template>
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g class="icon-base__g">
            <path
                d="M3 6H21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10 11V17"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M14 11V17"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
    </svg>
</template>
<style>
    .icon-note .icon-base__g path {
        stroke: var(--white-color);
    }
    svg.icon-note:hover .icon-base__g path {
        stroke: var(--white-color);
    }
    svg.icon-note:active .icon-base__g path {
        stroke: var(--white-color);
    }
    svg {
        cursor: pointer;
    }
    .icon-base__g path {
        stroke: var(--icon-remove);
    }
    svg:hover .icon-base__g path {
        stroke: var(--icon-remove-hover);
    }
    svg:active .icon-base__g path {
        stroke: var(--icon-remove-hover);
    }
</style>
