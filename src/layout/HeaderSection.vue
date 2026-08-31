<script setup lang="ts">
import OutsideLink from '@/components/OutsideLink.vue';
import ShinyText from '@/components/ShinyText.vue';
import OpenToWork from '@/components/OpenToWor.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

</script>

<template>
    <div class="relative krona-one-regular text-white mt-[120px] px-8 pb-16 sm:pb-20 md:pb-20 lg:pb-20 xl:pb-0">
        <div class="absolute  bg-[#49bb73db] rounded-full blur-[180px]
         xl:w-[700px] xl:h-[700px] xl:top-8 xl:left-[58%]
         lg:w-[500px] lg:h-[500px] lg:top-0 lg:left-[55%]
         md:w-[300px] md:h-[300px] md:top-16 md:left-[55%]
         sm:w-[500px] sm:h-[500px] sm:top-4 sm:left-[15%]
         xs:w-[550px] xs:h-[550px] xs:top-4 xs:left-[17%]
         w-[350px] h-[350px] top-[-70px] left-[-20%]
         ">rakotondranaivogilbert21@gmail.com
        </div>

        <div class="flex flex-col-reverse md:flex-row items-center justify-between pb-6">
            <!-- Text -->
            <div class="text-white">

                <div class="text-[17px] sm:text-[30px] md:text-[27px] lg:text-[30px]">
                    {{ t('sections.header.salutation') }}
                </div>

                <div class="text-[45px] sm:text-[50px] md:text-[50px] lg:text-[60px] xl:text-[90px]">
                    {{ t('sections.header.intro_prefix') }} <span class="border-b-4 border-green-400">Anderson</span>
                </div>

                <div class="my-2 text-green-400 text-[27px] sm:text-[35px] md:text-[35px] lg:text-[40px] xl:text-[50px]">
                    <ShinyText
                        :text="t('sections.header.role')"
                        :speed="2"
                        :delay="0"
                        color="#4ade80"
                        shine-color="#ffffff"
                        :spread="120"
                        direction="left"
                        :yoyo="false"
                        :pause-on-hover="false"
                    />
                </div>

                <div class="text-[17px] sm:text-[17px] md:text-[20px] lg:text-[30px] xl:text-[40px] whitespace-pre-line">
                    {{ t('sections.header.quote') }}
                </div>

            </div>


            <!-- Illustration -->
            <img 
            class="mb-16 md:mb-0  w-[80%] md:w-[40%] relative mr-0 md:mr-10 
            
            border-4 md:border-8 rounded-full p-[15px] md:p-[40px] border-dashed border-green-400 "
            src="../assets/img/illustration.png" :alt="t('sections.header.illustration_alt')">
            <!-- bg-[#49bb7369] -->
        </div>

        <!-- Links -->
        <ul class="w-[70%] sm:w-[90%] absolute bottom-0 flex gap-2 md:gap-6 items-center justify-center md:justify-start pl-8 md:pl-0">
            <!-- Linkedin -->
            <li>
                <OutsideLink 
                link="https://www.linkedin.com/in/joyaux-wendi-anderson-rakotondranaivo-gilbert-b7b466361/" 
                :tooltip_text="t('sections.header.links.linkedin_tooltip')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="lucide lucide-linkedin-icon lucide-linkedin w-[15px] md:w-[17px] lg:w-[20px] xl:w-[24px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </OutsideLink>
            </li>
            <!-- Github -->
            <li>
                <OutsideLink
                link="https://github.com/PyWendi"
                :tooltip_text="t('sections.header.links.github_tooltip')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="lucide lucide-github-icon lucide-github w-[15px] md:w-[17px] lg:w-[20px] xl:w-[24px]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </OutsideLink>
            </li>
            <!-- Email -->
            <li>
                <OutsideLink
                link="rakotondranaivogilbert21@gmail.com"
                :tooltip_text="t('sections.header.links.email_tooltip')"
                :is_link_to_copy="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="lucide lucide-mail-icon lucide-mail w-[15px] md:w-[17px] lg:w-[20px] xl:w-[24px]"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                </OutsideLink>
            </li>
            <!-- Facebook -->
            <li>
                <OutsideLink
                link="https://www.facebook.com/PyWendi21"
                :tooltip_text="t('sections.header.links.facebook_tooltip')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="lucide lucide-facebook-icon lucide-facebook w-[15px] md:w-[17px] lg:w-[20px] xl:w-[24px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </OutsideLink>
            </li>
            <!-- Discord -->
            <li>
                <OutsideLink
                link="https://discord.com/users/972090595881390150"
                :tooltip_text="t('sections.header.links.discord_tooltip')">
                    <img 
                    class="w-[20px] md:w-[70%] lg:w-[70%] xl:w-[80%]"
                    src="../assets/img/Discord.svg" alt="Discord svg">
                </OutsideLink>
            </li>
            <!-- Itch.io -->
            <li>
                <OutsideLink
                link="https://zodiak21.itch.io/"
                :tooltip_text="t('sections.header.links.itch_tooltip')">
                    <img 
                    class="w-[20px] md:w-[70%] lg:w-[70%] xl:w-[85%]"
                    src="../assets/img/itch_io.svg" alt="Itch svg">
                </OutsideLink>
            </li>
        </ul>
    </div>

</template>

