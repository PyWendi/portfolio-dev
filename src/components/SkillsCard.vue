<script lang="ts" setup>
import { type SkillsProps } from '@/types/types';

const {card_title} = defineProps<SkillsProps>()
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h2 class="text-center text-[17px] md:text-[25px] mb-4 text-green-400">{{ card_title }}</h2>
        <!-- All images -->
        <slot/>
    </div>

</template>

