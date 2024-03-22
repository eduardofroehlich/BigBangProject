<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import TransactionItem from './transaction-item.vue';
const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col">
        <div class="flex items-center">
            <VsxIcon iconName="Box2" :size="24" color="#292D32" />
            <div class="pl-3.5 text-[#202027] text-xl">
                {{ t('recent_transactions') }}
            </div>
            <div class="text-[#A3A3A3] text-sm pl-3.5">
                {{  t('last_days') }}
            </div>
            <div class="text-[#7986FE] text-sm pl-14 cursor-pointer">
                {{  t('see_all') }}
            </div>
        </div>
        <div class="pt-7 pb-60">
            <TransactionItem :title="t('mercadinho')" :value="'10,98'" variant="yellow" />
            <TransactionItem :title="t('tenda')" :value="'26,38'"  variant="red"/>
            <TransactionItem :title="t('farmacia')" :value="'43,17'"  variant="green" />
            <TransactionItem :title="t('academia')" :value="'62,12'"  variant="purple" />
            <TransactionItem :title="t('shop_online')" :value="'135,24'" :borderBottom="true" variant="pink" />
        </div>
    </div>
</template>

<i18n lang="yaml" locale="pt_BR">
    recent_transactions: Transações recentes
    mercadinho: Mercadinho da Cidade
    tenda: Tenda Nostra
    farmacia: Fármacia Um
    academia: Academia Body
    shop_online: ShopOnline
</i18n>