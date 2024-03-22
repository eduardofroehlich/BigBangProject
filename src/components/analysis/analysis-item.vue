<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export interface Props {
    variant?:
        | 'red'
        | 'purple'
        | 'pink'
    title?: string
    value?: string
    iconName?: string
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'red',
});

const classNames = computed(
    () =>
        `   ${props.variant}
        `,
);
const { t } = useI18n();
</script>

<template>
    <div>
        <div class="flex items-center justify-between py-3.5">
            <div class="flex items-center">
                <div class="rounded-sm w-8 h-8 flex justify-center items-center">
                    <VsxIcon :iconName="iconName" color="#292D32" :size="18" />
                </div>
                <div class="pl-2.5 text-sm">
                    {{ title }}
                </div>
            </div>
            <div>
                {{ t('percentage', { value }) }}
            </div>
        </div>
        <div>
            <div class="h-2 bg-gray-200 rounded-sm">
                <div class="h-full" :class="classNames" :style="{ width: `${value}%` }"></div>
            </div>
        </div>
    </div>
</template>

<style>
div.red {
    @apply bg-[#FF9D9D];
}
div.purple {
    @apply bg-[#AB9DFF];
}
div.pink {
    @apply bg-[#FF9DEF];
}

div.borderBottom {
    @apply border-b border-solid border-b-[#B3B3B3];
}
</style>