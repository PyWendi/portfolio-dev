<script lang="ts" setup>
import type { OutsideLinkProps } from '@/types/types';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const {
    link, 
    is_link_to_copy, 
    tooltip_text
} = defineProps<OutsideLinkProps>()
const showNotification = ref(false)
const showTooltip = ref(false)

const copieToClipboard = async (url_link: string) => {
    showNotification.value = true
    await navigator.clipboard.writeText(url_link) // Copy the link into the clipboard

    setTimeout(() => {
        showNotification.value = false
    }, 3000)
}

const toggleTrueTooltip = () => {
    showTooltip.value = false

    setTimeout(() => {
        showTooltip.value = true
    }, 100);
}

const toggleFalseTooltip = () => {
    showTooltip.value = false
}

</script>

<template>
    <div class="relative cursor-target">
        <!-- Outside link -->
        <a v-if="!is_link_to_copy" :href="link" target="_blank"
        @mouseenter="toggleTrueTooltip" @mouseleave="toggleFalseTooltip">
            <slot/>
        </a>
        
        <!-- Link to clipboard -->
        <div v-else class="relative cursor-pointer" @click="copieToClipboard(link)">
            <div class="absolute w-[100px] top-[-30px] text-[10px] translate-x-[-35%] text-white px-3 py-1 rounded-md  bg-gray-700 duration-100"
            :class="{
                'opacity-0 translate-y-[10px]' : !showNotification,
                'opacity-100 translate-y-0' : showNotification
            }"
            >
                {{ t('common.link_copied') }}
            </div>

            <!-- SVG -->
            <div @mouseenter="toggleTrueTooltip" @mouseleave="toggleFalseTooltip">
                <slot/>
            </div>
        </div>

        <!-- Tooltip -->
        <div v-if="tooltip_text != null" class="absolute top-[30px] text-[10px] translate-x-[-35%] text-gray-700 px-3 py-1 rounded-md  bg-white duration-100"
        :class="{
            'opacity-0 translate-y-[-10px]': !showTooltip,
            'opacity-100 translate-y-0 ': showTooltip
        }"
        >
            {{ tooltip_text }}
        </div>
    </div>
</template>