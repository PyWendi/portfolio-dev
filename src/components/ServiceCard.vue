<!-- ServiceCard.vue -->
<script lang="ts" setup>
import type { ServiceCardProps } from '@/types/types';

const {
    img_url,
    service_title,
    service_description
} = defineProps<ServiceCardProps>()
</script>

<template>
    <div class="w-[270px] w-[300px] h-[270px] md:h-[350px]
    flex flex-col justify-center items-center
    border-2 border-green-400 rounded-md bg-[#4ade8020]
    ">
        <div class="mt-5 h-[80px] md:h-[150px]">
            <!-- Illustration -->
            <slot/>     
        </div>
        
        <!-- service title -->
        <h2 class=" px-4 md:px-0 text-[14px] md:text-[20px] h-[60px] font-bold text-green-400 mb-2 md:mb-4 flex items-center justify-center text-center">
            {{ service_title.toUpperCase() }}
        </h2>
        
        <!-- horizontal separator -->
        <div class="w-full border border-white mb-2 md:mb-4"></div>
        
        <!-- service description -->
        <p class="text-[11px] md:text-[16px] text-center px-2 pb-0 md:pb-2">
            {{ service_description }}
        </p>
    </div>
</template>