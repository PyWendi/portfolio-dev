<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AnimatedList from '@/components/AnimatedList.vue';

const { t } = useI18n()

const timelineData = computed(() => [
  { 
    date: t('sections.experiences.timeline.pilote_cloud_winedger.date'), 
    title: t('sections.experiences.timeline.pilote_cloud_winedger.title'), 
    content: t('sections.experiences.timeline.pilote_cloud_winedger.content') 
  },
  { 
    date: t('sections.experiences.timeline.no_code_hackathon.date'), 
    title: t('sections.experiences.timeline.no_code_hackathon.title'), 
    content: t('sections.experiences.timeline.no_code_hackathon.content') 
  },
  { 
    date: t('sections.experiences.timeline.game_up_africa.date'), 
    title: t('sections.experiences.timeline.game_up_africa.title'), 
    content: t('sections.experiences.timeline.game_up_africa.content') 
  },
  { 
    date: t('sections.experiences.timeline.sco_app.date'), 
    title: t('sections.experiences.timeline.sco_app.title'), 
    content: t('sections.experiences.timeline.sco_app.content') 
  },
  { 
    date: t('sections.experiences.timeline.need_kosher.date'), 
    title: t('sections.experiences.timeline.need_kosher.title'), 
    content: t('sections.experiences.timeline.need_kosher.content') 
  },
  { 
    date: t('sections.experiences.timeline.devgameeni_president.date'), 
    title: t('sections.experiences.timeline.devgameeni_president.title'), 
    content: t('sections.experiences.timeline.devgameeni_president.content') 
  },
  { 
    date: t('sections.experiences.timeline.gameload_gamejam.date'), 
    title: t('sections.experiences.timeline.gameload_gamejam.title'), 
    content: t('sections.experiences.timeline.gameload_gamejam.content') 
  },
  { 
    date: t('sections.experiences.timeline.uaceem_finflow.date'), 
    title: t('sections.experiences.timeline.uaceem_finflow.title'), 
    content: t('sections.experiences.timeline.uaceem_finflow.content') 
  },
  { 
    date: t('sections.experiences.timeline.call_law.date'), 
    title: t('sections.experiences.timeline.call_law.title'), 
    content: t('sections.experiences.timeline.call_law.content') 
  },
  { 
    date: t('sections.experiences.timeline.dairy_sales.date'), 
    title: t('sections.experiences.timeline.dairy_sales.title'), 
    content: t('sections.experiences.timeline.dairy_sales.content') 
  },
  { 
    date: t('sections.experiences.timeline.ministry_works.date'), 
    title: t('sections.experiences.timeline.ministry_works.title'), 
    content: t('sections.experiences.timeline.ministry_works.content') 
  },
]);
</script>

<template>
  <div class="relative mx-auto flex flex-col items-center w-full md:w-4/5 lg:w-2/3">
    <!-- Ligne verticale -->
    <div class="absolute h-full w-1 bg-green-400"></div>

    <AnimatedList
      :items="timelineData"
      :show-gradients="false"
      :enable-arrow-navigation="false"
      :display-scrollbar="false"
      className="w-full"
    >
      <template #default="{ item, index }">
        <div v-if="typeof item !== 'string'" class="w-full flex items-center my-6">
          <!-- CASE IMPAIR : Date à gauche, content à droite -->
          <div v-if="index % 2 === 0" class="flex w-full justify-between items-center">
            <div class="w-1/2 text-right text-[10px] lg:text-[20px] pr-5 lg:pr-10 font-bold">{{ item.date }}</div>
            <div class="w-1/2 text-left text-white px-5 lg:px-10 rounded-lg
            flex flex-col items-start justify-start">
                <h2 class="text-[10px] lg:text-[20px] font-bold text-green-400">{{ item.title }}</h2>
                <div class="hidden sm:block mt-2 w-full lg:w-3/4 text-[10px] lg:text-[17px] bg-[#376652] px-4 py-2 rounded-md cursor-target">
                    {{ item.content }}
                </div>
            </div>
          </div>

          <!-- CASE PAIR : Content à gauche, date à droite -->
          <div v-else class="flex w-full justify-between items-center">
            <div class="w-1/2 text-right text-white px-5 lg:px-10 rounded-lg
            flex flex-col items-end justify-start">
                <h2 class="text-[10px] lg:text-[20px] font-bold text-green-400">{{ item.title }}</h2>
                <div class="hidden sm:block mt-2 w-full lg:w-3/4  text-[10px] lg:text-[17px] bg-[#376652] px-4 py-2 rounded-md cursor-target">
                    {{ item.content }}
                </div>
            </div>
            <div class="w-1/2 pl-5 lg:pl-10 text-[10px] lg:text-[20px] font-bold">{{ item.date }}</div>
          </div>
        </div>
      </template>
    </AnimatedList>
  </div>
</template>

<style scoped>
/* Ajout du point sur la ligne */
div[class*="my-6"]::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border-radius: 50%;
  z-index: 10;
}
</style>
