<script lang="ts" setup>
import SkillsCard from '@/components/SkillsCard.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<template>
    <div>
        <!-- Main images on computer -->
        <!-- <div class="hidden md:block">
            <div class="w-full flex items-center justify-center">
                <img src="../assets/img/all_skills.png" 
                
                alt="Skills illustration">
            </div>
        </div> -->

        <!-- Images on mobile device -->
        <!-- <div class="block md:hidden"> -->
        <div class="block ">
            <!-- language -->
            <div class="flex flex-col items-center justify-center w-full gap-10">
                <SkillsCard :card_title="t('sections.skills.categories.languages')">
                    <img class="w-full sm:w-[75%] cursor-target"
                    src="../assets/img/logo/language.png" 
                    :alt="t('sections.skills.alts.languages')">
                </SkillsCard>

                <SkillsCard :card_title="t('sections.skills.categories.frontend')">
                    <img class="w-full sm:w-[75%] cursor-target"
                    src="../assets/img/logo/frontend.png" 
                    :alt="t('sections.skills.alts.frontend')">
                </SkillsCard>

                <SkillsCard :card_title="t('sections.skills.categories.backend')">
                    <img class="w-full sm:w-[75%] cursor-target"
                    src="../assets/img/logo/backend.png" 
                    :alt="t('sections.skills.alts.backend')">
                </SkillsCard>

                <SkillsCard :card_title="t('sections.skills.categories.tools')">
                    <img class="w-full sm:w-[75%] cursor-target"
                    src="../assets/img/logo/tools.png" 
                    :alt="t('sections.skills.alts.tools')">
                </SkillsCard>

                <SkillsCard :card_title="t('sections.skills.categories.game_dev')">
                    <img class="w-full sm:w-[75%] cursor-target"
                    src="../assets/img/logo/other.png" 
                    :alt="t('sections.skills.alts.game_dev')">
                </SkillsCard>
                
            </div>


        </div>
    </div>
</template>