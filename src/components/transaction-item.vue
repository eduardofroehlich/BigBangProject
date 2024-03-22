<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export interface Props {
    variant?:
        | 'yellow'
        | 'red'
        | 'green'
        | 'purple'
        | 'pink'
    title?: string
    value?: string
    borderBottom?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'yellow',
});

const classNames = computed(
    () =>
        `   ${props.variant}
        `,
);

const divBorder = computed(
    () =>
        `
            ${props.borderBottom ? 'borderBottom' : ''}
        `,
);
const { t } = useI18n();
</script>

<template>
    <div class="flex items-center justify-between border-t border-solid border-t-[#B3B3B3] py-3.5" :class="divBorder">
        <div class="flex items-center">
            <div class="rounded-sm w-8 h-8 flex justify-center items-center" :class="classNames">
                <VsxIcon iconName="Shop" color="#292D32" :size="17" />
            </div>
            <div class="pl-3">
                {{ title }}
            </div>
        </div>
        <div>
            {{ t('currency', { value }) }}
        </div>
    </div>
</template>

<style>
div.yellow {
    @apply bg-[#FDFF9D];
}
div.red {
    @apply bg-[#FF9D9D];
}
div.green {
    @apply bg-[#C8FF9D];
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