<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Card from './card.vue';

const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col">
        <div class="flex items-center">
            <div class="pb-7 text-white text-xl flex">
                <div class="pr-6">
                    <VsxIcon iconName="Bubble" color="#FF4F4F" size="24" />
                </div>
                {{  t('statistics_dashboard') }}
            </div>
            <div class="pb-7 text-[#A3A3A3] text-sm pl-4">
                {{  t('last_days') }}
            </div>
        </div>
        
        <div class="flex gap-10">
            <Card :title="t('account_pj')" :value="'39,882'" />
            <Card :title="t('receipts')" :value="'765,88'" />
            <Card :title="t('profit')" :value="'15,887'" />
        </div>
    </div>
</template>

<i18n lang="yaml" locale="pt_BR">
    account_pj: Conta PJ
    receipts: Recebimentos
    profit: Lucro
    statistics_dashboard: Painel de estatísticas
    last_days: últimos 7 dias
</i18n>