<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Card from './card.vue';

const { t } = useI18n();
</script>

<template>
    <div class="flex gap-10">
        <Card :title="t('account_pj')" :value="'39,882'" />
        <Card :title="t('receipts')" :value="'765,88'" />
        <Card :title="t('profit')" :value="'15,887'" />
    </div>
</template>

<i18n lang="yaml" locale="pt_BR">
    account_pj: Conta PJ
    receipts: Recebimentos
    profit: Lucro
</i18n>