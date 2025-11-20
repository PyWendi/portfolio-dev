<script setup lang="ts">
import { ref, type Ref, defineProps } from 'vue';
import { type SectionProps } from '@/types/types';

const props = defineProps<SectionProps>()

</script>


<template>
    <div class="my-[200px] krona-one-regular text-white"
    :class="{'px-8': !props.without_margin}">
        <!-- Section title -->
         <div class="flex items-center justify-center">
             <span class="px-12 border-b-4 pb-2 border-b-green-400 mb-8 sm:text-[20px] md:text-[30px] lg:text-[40px]">
                 {{ props.title }}
             </span>
         </div>

        <!-- Content -->
        <div>
            <slot />
        </div>
    </div>
</template>