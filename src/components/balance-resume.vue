<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useI18n } from 'vue-i18n';
import { faBolt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Button from './button.vue';
const { t } = useI18n();
</script>

<template>
    <div class="px-36 pt-16">
        <div class="text-white text-xl">
            {{ t('total_balance') }}
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <span class="text-white text-4xl" >
                    {{ t('currency', { value:'304,78' }) }}
                </span>
                <div class="pl-4">
                    <VsxIcon iconName="Flash" :size="24" color="#FFF500" />
                </div>
                <span class="text-white text-sm font-normal pl-2" >
                    {{ t('yielding', { value: 124 }) }}
                </span>
            </div>
            <div class="flex">
                <Button class="mr-5">
                    <div class="flex items-center w-52 mx-6">
                        <div class="text-white pr-10">
                            <VsxIcon iconName="Send2" :size="22" color="#FFFFFF" type="linear" />
                        </div>
                        <div class="text-sm">
                            {{ t('send_money') }}
                        </div>
                    </div>
                </Button>
                <Button>
                    <div class="flex items-center mx-6">
                        <div class="text-white">
                            <VsxIcon iconName="Add" :size="22" color="#FFFFFF" type="linear" />
                        </div>
                    </div>
                </Button>
            </div>
        </div>
    </div>
</template>

<i18n lang="yaml" locale="pt_BR">
    total_balance: Saldo total
    balance_value: "304,78"
    yielding: "rendendo {value}%"
    send_money: Enviar dinheiro
</i18n>