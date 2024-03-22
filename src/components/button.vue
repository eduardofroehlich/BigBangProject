<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
    variant?:
        | 'primary'
        | 'secondary-transparent'
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
});

const classNames = computed(
    () =>
        `   ${props.variant}
        `,
);
</script>

<template>
    <button :class="classNames" type="button">
        <slot></slot>
    </button>
</template>

<style>
:host {
    @apply inline-block;
}

button {
    @apply w-full cursor-pointer py-1;

    &:disabled {
        @apply cursor-not-allowed;
    }
}
button.primary {
    @apply bg-button text-white;
}

button.secondary-transparent {
    @apply bg-transparent text-[#686868];
    @apply border-solid border border-[#747474];
}

</style>
