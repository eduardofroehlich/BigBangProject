<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AnalysisItem from './analysis-item.vue';
const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col">
        <div class="flex items-center pb-7">
            <VsxIcon iconName="Story" :size="24" color="#292D32" />
            <div class="pl-3.5 text-[#202027] text-xl">
                {{ t('general_analysis') }}
            </div>
            <div class="text-[#A3A3A3] text-sm pl-3.5">
                {{  t('last_days') }}
            </div>
            <div class="text-[#7986FE] text-sm pl-14 cursor-pointer">
                {{  t('see_all') }}
            </div>
        </div>
        <div class="border-y border-solid border-y-[#B3B3B3] flex justify-between p-4">
            <div>
                <div class="text-sm">
                    {{ t('earnings') }}
                </div>
                <div class="text-xl pt-1.5">
                    {{ t('currency', { value:'2.789,21' }) }}
                </div>
            </div>
            <div>
                <div class="text-sm">
                    {{ t('exits') }}
                </div>
                <div class="text-xl pt-1.5">
                    {{ t('currency', { value:'1.278,47' }) }}
                </div>
            </div>
        </div>
        <div class="pt-3.5">
            <AnalysisItem :title="t('purchases')" :value="'62'" variant="red" iconName="Bag" />
            <AnalysisItem :title="t('purchases')" :value="'14'" variant="purple" iconName="Barcode" />
            <AnalysisItem :title="t('purchases')" :value="'5'" variant="pink" iconName="TrendUp" />
        </div>
    </div>
</template>

<i18n lang="yaml" locale="pt_BR">
    general_analysis: Análise geral
    earnings: Ganhos
    exits: Saídas
    purchases: Compras
    slip: Boleto
    investments: Investimentos
</i18n>