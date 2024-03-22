<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

</script>

<template>
    <div class="card-container">
        <div class="text-sm">
            {{ t('account_pj') }}
        </div>
        <div class="text-2xl pt-6">
            {{ t('currency', {value: '39,882'}) }}
        </div>
    </div>
</template>

<style>
.card-container {
    @apply flex flex-col items-stretch p-5;
    @apply w-80 rounded-lg;
    @apply bg-white border border-solid border-gray-50;
    @apply border border-solid border-gray-100;
}
</style>

<i18n lang="yaml" locale="pt_BR">
    account_pj: Conta PJ
</i18n>