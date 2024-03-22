<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div class="grid grid-cols-4 text-white text-center h-10 items-center">
        <div class="bg-secondary w-32">
            {{ t('dashboard')}}
        </div>
        <div class="w-32">
            {{ t('payments')}}
        </div>
        <div class="w-32">
            {{ t('invoices')}}
        </div>
        <div class="w-32"> 
            {{ t('insights')}}
        </div>
    </div>
</template>

<i18n lang="yaml" locale="pt_BR">
    dashboard: Dashboard
    payments: Pagamentos
    invoices: Invoices
    insights: Insights
</i18n>