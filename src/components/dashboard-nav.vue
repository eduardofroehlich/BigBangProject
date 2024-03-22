<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div class="grid grid-cols-4 text-white text-center items-center">
        <div class="bg-secondary nav-item">
            {{ t('dashboard')}}
        </div>
        <div class="nav-item">
            {{ t('payments')}}
        </div>
        <div class="nav-item">
            {{ t('invoices')}}
        </div>
        <div class="nav-item"> 
            {{ t('insights')}}
        </div>
    </div>
</template>

<style scoped>
.nav-item {
    @apply w-32 h-10 flex justify-center items-center;

    &:hover {
        @apply cursor-pointer border-secondary border-solid border-2;
    }
}
</style>


<i18n lang="yaml" locale="pt_BR">
    dashboard: Dashboard
    payments: Pagamentos
    invoices: Invoices
    insights: Insights
</i18n>