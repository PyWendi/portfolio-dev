<script lang="ts" setup>
import SkillsCard from '@/components/SkillsCard.vue';

</script>

<template>
    <div>
        <!-- Main images on computer -->
        <div class="hidden md:block">
            <div class="w-full flex items-center justify-center">
                <img src="../assets/img/all_skills.png" 
                
                alt="Skills illustration">
            </div>
        </div>

        <!-- Images on mobile device -->
        <div class="block md:hidden">
            <!-- language -->
            <div class="flex flex-col w-full gap-10">
                <SkillsCard card_title="Programing languages">
                    <img class="w-full"
                    src="../assets/img/logo/language.png" 
                    alt="Programing language">
                </SkillsCard>

                <SkillsCard card_title="Front-ends">
                    <img class="w-full"
                    src="../assets/img/logo/frontend.png" 
                    alt="Frontend frameworks">
                </SkillsCard>

                <SkillsCard card_title="Back-ends">
                    <img class="w-full"
                    src="../assets/img/logo/backend.png" 
                    alt="Backend frameworks">
                </SkillsCard>

                <SkillsCard card_title="Tools, Game dev and other">
                    <img class="w-full"
                    src="../assets/img/logo/tools.png" 
                    alt="Tools Game Dev and other">
                </SkillsCard>
                
            </div>


        </div>
    </div>
</template>