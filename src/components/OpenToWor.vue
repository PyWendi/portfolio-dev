<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<template>
    <span class="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-400 text-green-400 text-xs md:text-sm animate-pulse">
        <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
        {{ t('sections.header.open_to_work') }}
    </span>
</template>