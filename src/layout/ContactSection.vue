<script lang="ts" setup>
import OutsideLink from '@/components/OutsideLink.vue';
import sunflowerImg from "../assets/img/sunflower.png";
import ScrollFloat from '@/components/ScrollFloat.vue';
import { useI18n } from 'vue-i18n';
import OpenToWork from '@/components/OpenToWor.vue';

const { t } = useI18n()
</script>

<template>
    <div>

        <div class="px-8">
            <!-- Big text -->
           
                <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start">
                    <!-- Version mobile/tablette (avec animation) -->
                    <div class="hidden sm:block">
                        <ScrollFloat
                            :animation-duration="2"
                            ease="back.inOut(2)"
                            scroll-start="center bottom+=50%"
                            scroll-end="bottom bottom-=40%"
                            textClassName="text-[30px] sm:text-[40px] text-green-400 uppercase"
                            :stagger="0.03"
                        >{{ t('sections.contact.get_in_touch') }}
                        </ScrollFloat>
                    </div>

                    <!-- Version desktop (sans animation) -->
                    <div class="sm:hidden text-[25px] lg:text-[70px] xl:text-[90px] text-green-400 uppercase font-semibold">
                        {{ t('sections.contact.get_in_touch') }}
                    </div>


                    <OpenToWork class="ml-4 mt-4 sm:mt-0"/>
                    <!-- <span class="hidden sm:block ml-8 md:ml-16 w-[50px] md:w-[100px] border-2 md:border-4 border-green-400 bg-green-400"></span> -->
                </div>
            
    
            <!-- Contact text -->
            <p class="w-full md:w-1/2 text-justify text-[13px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px] mt-[20px]">
                {{ t('sections.contact.p1') }}
            </p>
    
            <!-- usefull contact -->
            <div class="mt-[40px] flex flex-col gap-3">
                <!-- Mail -->
                <div class="flex items-center gap-4 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="w-[17px] md:w-[20px] lg:w-[25px] xl:w-[30px] text-white lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                    <p class="text-[10px] md:text-[14px] lg:text-[17px]">rakotondranaivogilbert21@gmail.com</p>
                </div>
                <!-- Phone -->
                <div class="flex items-center gap-4 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="w-[17px] md:w-[20px] lg:w-[25px] xl:w-[30px] text-white lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                    <p class="text-[10px] md:text-[14px] lg:text-[17px]">+261 34 79 424 28 (WhatsApp)</p>
                </div>
            </div>
    
            <!-- Outside links -->
            <!-- Links -->
            <div class="flex items-center justify-center mt-[60px]">
                <span class="hidden md:block mr-8 w-[70px] border-2 border-white bg-white"></span>
                <ul class=" bottom-0 flex gap-2 md:gap-6 items-center justify-center  pl-8 md:pl-0">
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
                        link="https://zodiak21.itch.io"
                        :tooltip_text="t('sections.header.links.itch_tooltip')">
                            <img 
                            class="w-[20px] md:w-[70%] lg:w-[70%] xl:w-[85%]"
                            src="../assets/img/itch_io.svg" alt="Itch svg">
                        </OutsideLink>
                    </li>
                </ul>
                <span class="hidden md:block ml-8 w-[70px] border-2 border-white bg-white"></span>
            </div>

        </div>

        <!-- Footer -->
        <div class="mt-[50px] py-[40px] bg-[#0A181D] flex items-center justify-center">
            <img class="hidden md:block w-[40px] lg:w-[60px]" :src="sunflowerImg" alt="Sunflower">
            <div class="text-[10px] text-center md:text-[12px] lg:text-[15px] px-4">{{ t('sections.footer.credits') }}</div>
            <img class="hidden md:block w-[40px] lg:w-[60px]" :src="sunflowerImg" alt="Sunflower">
        </div>

    </div>
</template>