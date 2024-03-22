<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useI18n } from 'vue-i18n';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const { t } = useI18n();
</script>

<template>
    <div class="pl-36 pt-16">
        <div class="text-white text-xl">
            {{ t('total_balance') }}
        </div>
        <div class="flex items-center">
            <span class="text-white text-4xl" >
                {{ t('currency', { value:'304,78' }) }}
            </span>
            <FontAwesomeIcon :icon=faBolt class="text-yellow-300 text-2xl px-4" />
            <span class="text-white text-sm font-normal" >
                {{ t('yielding', { value: 124 }) }}
            </span>
        </div>
    </div>
</template>

<i18n lang="yaml" locale="pt_BR">
    total_balance: Saldo total
    balance_value: "304,78"
    yielding: "rendendo {value}%"
</i18n>