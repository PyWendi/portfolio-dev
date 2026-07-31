<script lang="ts" setup>
import ServiceCard from '@/components/ServiceCard.vue';
import SpotlightCard from '@/components/SpotlightCard.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<template>
    <div class="mt-8">
        <!-- Card list -->
        <div class="flex flex-wrap justify-center gap-8 mx-auto mb-8">
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[50%] gap-8 mx-auto"> -->
        
                <SpotlightCard class="custom-spotlight-card" spotlight-color="rgba(0, 229, 255, 0.7)">
                    <ServiceCard
                    img_url="../assets/img/service_web.png"
                    :service_title="t('sections.services.items.web.title')"
                    :service_description="t('sections.services.items.web.description')"
                    >
                        <img class="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                        src="../assets/img/service_web.png" :alt="t('sections.services.items.web.title')">
                    </ServiceCard>
                </SpotlightCard>
        
                <SpotlightCard class="custom-spotlight-card" spotlight-color="rgba(0, 229, 255, 0.7)">

                    <ServiceCard
                    img_url="../assets/img/service_back.png"
                    :service_title="t('sections.services.items.backend.title')"
                    :service_description="t('sections.services.items.backend.description')"
                    >
                        <img class="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                        src="../assets/img/service_back.png" :alt="t('sections.services.items.backend.title')">
                    </ServiceCard>
                </SpotlightCard>
        
                <SpotlightCard class="custom-spotlight-card" spotlight-color="rgba(0, 229, 255, 0.7)">

                    <ServiceCard
                    img_url="../assets/img/service_front.png"
                    :service_title="t('sections.services.items.frontend.title')"
                    :service_description="t('sections.services.items.frontend.description')"
                    >
                        <img class="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                        src="../assets/img/service_front.png" :alt="t('sections.services.items.frontend.title')">
                    </ServiceCard>
                </SpotlightCard>
            </div>

            <div class="flex flex-wrap justify-center gap-8 mx-auto">
                
                <SpotlightCard class="custom-spotlight-card" spotlight-color="rgba(0, 229, 255, 0.7)">

                    <ServiceCard
                    img_url="../assets/img/service_db.png"
                    :service_title="t('sections.services.items.database.title')"
                    :service_description="t('sections.services.items.database.description')"
                    >
                        <img class="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                        src="../assets/img/service_db.png" :alt="t('sections.services.items.database.title')">
                    </ServiceCard>
                </SpotlightCard>
        
                <SpotlightCard class="custom-spotlight-card" spotlight-color="rgba(0, 229, 255, 0.7)">

                    <ServiceCard
                    img_url="../assets/img/service_game.png"
                    :service_title="t('sections.services.items.game.title')"
                    :service_description="t('sections.services.items.game.description')"
                    >
                        <img class="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                        src="../assets/img/service_game.png" :alt="t('sections.services.items.game.title')">
                    </ServiceCard>
                </SpotlightCard>
        </div>
    </div>
</template>
