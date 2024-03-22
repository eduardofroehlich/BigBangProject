<script setup lang="ts">
import { useI18n } from 'vue-i18n';

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
            <div class="text-[#7986FE] text-sm pl-14">
                {{  t('see_all') }}
            </div>
        </div>

    </div>
</template>

<i18n lang="yaml" locale="pt_BR">
    recent_transactions: Transações recentes
</i18n>