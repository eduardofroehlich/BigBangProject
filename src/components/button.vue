<script setup lang="ts">
</script>

<template>
    <button class="primary" type="button">
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

</style>
