<script lang="ts" setup>
import { type ProjectCardProps } from '../types/types';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const {
    project_title,
    post,
    description,
    tecnhos,
    with_source,
    source_url,
    with_preview,
    preview_url,
} = defineProps<ProjectCardProps>()


</script>

<template>
    <!-- xl:w-[550px] -->
    <div class="w-full  flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
        <!-- Image -->
        <div class="w-full lg:w-1/2 flex items-center bg-[#21482F] p-4 custom-border-left">
            <slot/>
        </div>
        
        <!-- Content -->
         <div class="relative lg:w-1/2  bg-[#0C2C18] p-8 custom-border-right">
            <!-- Title -->
            <div class="flex items-center justify-start">
                <h1 class="text-[20px] xl:text-[30px] text-green-400">{{ project_title }}</h1>
                <span class="hidden md:block ml-10 w-[70px] border-2 border-green-400 bg-green-400"></span>
            </div>

            <!-- Post -->
            <p class="text-[15px] xl:text-[20px] text-[#15784E]">{{ post }}</p>

            <!-- Project description -->
            <p class="text-[13px] xl:text-[15px] text-justify mt-[20px]">
                {{ description }}
            </p>

            <!-- Technos -->
            <div class="mt-[20px] flex flex-wrap items-center gap-4">
                <!-- techno container -->
                <div v-for="tech in tecnhos"
                class="text-[10px] xl:text-[13px] px-[10px] md:px-[25px] py-1 bg-[#0F6E46] rounded-full">
                    {{ tech }}
                </div>
            </div>

            <div class="flex items-center gap-4 mt-[30px]">
                <!-- Source -->
                <a :href="source_url" target="_blank"
                v-if="with_source"
                class="cursor-pointer cursor-target flex items-center justify-center gap-2 px-[10px] py-1 bg-[#fff] rounded-full
                duration-100 hover:shadow-[0px_0px_10px_#b0b0b0]">
                    <img class="w-[20px] xl:w-[25px]" 
                    src="../assets/img/logo/github.svg" alt="Github icon">
                    <p class="text-black text-[13px] xl:text-[17px]">{{ t('sections.projects.source') }}</p>
                </a>
    
                <!-- Preview -->
                <a :href="preview_url" target="_blank"
                v-if="with_preview"
                class="cursor-pointer cursor-target flex items-center justify-center gap-2 px-[10px] py-1 bg-[#fff] rounded-full
                duration-100 hover:shadow-[0px_0px_10px_#b0b0b0]">
                    <img class="w-[18px] xl:w-[25px]" 
                    src="../assets/img/logo/preview.svg" alt="Github icon">
                    <p class="text-black text-[13px] xl:text-[17px]">{{ t('sections.projects.preview') }}</p>
                </a>

            </div>    
         </div>
    </div>
</template>

<style>
.custom-border-left{
    border-top-left-radius: 20px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 0px;
}
.custom-border-right{
    border-top-left-radius: 0px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 20px;
}

@media (max-width: 1024px) {
    .custom-border-left{
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    .custom-border-right{
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
}
</style>