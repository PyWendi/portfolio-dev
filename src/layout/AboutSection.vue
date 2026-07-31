<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<template>
    <div class="relative">
        <div class="absolute bg-[#49bb73db] rounded-full blur-[150px] z-[-10]
         xl:w-[400px] xl:h-[400px] xl:top-[-300px] xl:left-[-15%]
         lg:w-[400px] lg:h-[400px] lg:top-[-250px] lg:left-[-25%]
         md:w-[300px] md:h-[300px] md:top-[-200px] md:left-[-25%]
         sm:w-[300px] sm:h-[300px] sm:top-[-100px] sm:left-[-25%]
         xs:w-[300px] xs:h-[300px] xs:top-[-100px] xs:left-[-25%]
         w-[250px] h-[250px] top-[-100px] left-[-17%]
         ">
        </div>

        <div class="absolute  bg-[#40bd6e7d] rounded-full blur-[130px] z-[-10]
         xl:w-[450px] xl:h-[450px] xl:top-[450px] xl:left-[80%]
         lg:w-[300px] lg:h-[300px] lg:top-[450px] lg:left-[80%]
         md:w-[200px] md:h-[200px] md:top-[550px] md:left-[80%]
         sm:w-[300px] sm:h-[300px] sm:top-[600px] sm:left-[80%]
         xs:w-[300px] xs:h-[300px] xs:top-[500px] xs:left-[80%]
         w-[250px] h-[250px] top-[600px] left-[85%]
         ">
        </div>

        <div class=" my-12 flex flex-col-reverse md:flex-row px-8 lg:px-0
        items-center justify-center gap-16">
            <!-- Text about me -->
            <div class="w-full md:w-[60%] text-[15px] md:text-[16px] lg:text-[20px] text-justify">
                {{ t('sections.about.p1') }} <br> <br>
                {{ t('sections.about.p2') }} <br> <br>
                {{ t('sections.about.p3') }}
            </div>
    
            <!-- Image -->
            <img 
            class="w-[50%] md:[22%] lg:w-[20%]" 
            src="../assets/img/about_img.png" :alt="t('sections.about.img_alt')">
        </div>

        <!-- Image decoration -->
        <div>
            <img 
            src="../assets/img/low_wave.svg" :alt="t('sections.about.decoration_alt')">
        </div>

    </div>
</template>