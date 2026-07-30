<!-- ServiceCard.vue -->
<script lang="ts" setup>
import type { ServiceCardProps } from '@/types/types';
import { defineProps } from 'vue';

const {
    img_url,
    service_title,
    service_description
} = defineProps<ServiceCardProps>()
</script>

<template>
    <div class="w-[300px] h-[350px]
    flex flex-col justify-center items-center
    border-2 border-green-400 rounded-md bg-[#4ade8020]/5
    ">
        <div class="mt-5 h-[150px]">
            <slot/>     
        </div>
        
        <!-- service title -->
        <h2 class="text-[20px] h-[60px] font-bold text-green-400 mb-4 flex items-center justify-center text-center">
            {{ service_title.toUpperCase() }}
        </h2>
        
        <!-- horizontal separator -->
        <div class="w-full border border-white mb-4"></div>
        
        <!-- service description -->
        <p class="text-center px-2 pb-2">
            {{ service_description }}
        </p>
    </div>
</template>