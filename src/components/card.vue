<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Button from './button.vue';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
        <div class="flex pt-11">
            <Button class="w-64" variant="secondary-transparent">
                <div class="text-sm">
                    {{ t('more_details') }}
                </div>
            </Button>
            <Button class="w-20 ml-4" variant="secondary-transparent">
                <div class="text-[#292D32]">
                    <FontAwesomeIcon :icon=faBars class="" />
                </div>
            </Button>
        </div>
    </div>
</template>

<style>
.card-container {
    @apply flex flex-col shadow-md p-5;
    @apply w-80;
    @apply bg-white border border-solid border-gray-50;
    @apply border border-solid border-gray-100;
}
</style>

<i18n lang="yaml" locale="pt_BR">
    account_pj: Conta PJ
    more_details: Ver mais detalhes
</i18n>