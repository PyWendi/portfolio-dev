<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectCard from '@/components/ProjectCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import piloteImg from '../assets/img/projects/pilote.png';
import winedgeImg from '../assets/img/projects/winedge.png';
import cloudImg from '../assets/img/projects/cloud-soiby.png';
import scoAppImg from '../assets/img/projects/sco_app.jpg';
import kosherImg from '../assets/img/projects/kosher.png';
import finflowImg from '../assets/img/projects/finflow.png';
import portfolioImg from '../assets/img/projects/portfolio.png';
import mtpUrgencyImg from '../assets/img/projects/mtp-urgency.png';
import callLawImg from '../assets/img/projects/call-law.png';
import uaccemSiteImg from '../assets/img/projects/uaccem-website.png';

const { t, tm } = useI18n()

// image: new URL('../assets/img/projects/sco_app.jpg', import.meta.url).href,
const projects = computed(() => [
    {
        project_title: t('sections.projects.items.portfolio.title'),
        post: t('sections.projects.items.portfolio.post'),
        description: tm('sections.projects.items.portfolio.description') as string[],
        technos: ['Vue.js', 'Tailwind CSS'],
        source_url: "https://github.com/PyWendi/portfolio-dev",
        preview_url: "https://andersons-portfolio.netlify.app/",
        image: portfolioImg,
        with_source: true,
        with_preview: true
    },
    {
        project_title: t('sections.projects.items.pilote.title'),
        post: t('sections.projects.items.pilote.post'),
        description: tm('sections.projects.items.pilote.description') as string[],
        technos: ['FastAPI', 'React.js', 'MongoDB', 'Tailwind CSS', 'AI-Assisted Developement', 'N8N'],
        source_url: "",
        preview_url: "https://pilote360.io/",
        image: piloteImg,
        with_source: false,
        with_preview: true
    },
    {
        project_title: t('sections.projects.items.winedge.title'),
        post: t('sections.projects.items.winedge.post'),
        description: tm('sections.projects.items.winedge.description') as string[],
        technos: ['FastAPI', 'Next.js', 'MongoDB', 'Tailwind CSS', 'AI-Assisted Developement', 'N8N'],
        source_url: "",
        preview_url: "https://winedge.io",
        image: winedgeImg,
        with_source: false,
        with_preview: true
    },
    {
        project_title: t('sections.projects.items.cloud.title'),
        post: t('sections.projects.items.cloud.post'),
        description: tm('sections.projects.items.cloud.description') as string[],
        technos: ['FastAPI', 'React.js', 'PostgreSQL', 'Tailwind CSS', 'AI-Assisted Developement', 'N8N'],
        source_url: "",
        preview_url: "",
        image: cloudImg,
        with_source: false,
        with_preview: false
    },
    {
        project_title: t('sections.projects.items.sco_app.title'),
        post: t('sections.projects.items.sco_app.post'),
        description: tm('sections.projects.items.sco_app.description') as string[],
        technos: ['FastAPI', 'Ably', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
        source_url: "",
        preview_url: "",
        image: scoAppImg,
        with_source: false,
        with_preview: false
    },
    {
        project_title: t('sections.projects.items.kosher.title'),
        post: t('sections.projects.items.kosher.post'),
        description: tm('sections.projects.items.kosher.description') as string[],
        technos: ['Nuxt', 'Tailwind CSS', 'Express.js', 'MySQL'],
        source_url: "",
        preview_url: "https://web.koshergate.com",
        image: kosherImg,
        with_source: false,
        with_preview: true
    },
    {
        project_title: t('sections.projects.items.finflow.title'),
        post: t('sections.projects.items.finflow.post'),
        description: tm('sections.projects.items.finflow.description') as string[],
        technos: ['Laravel', 'Tailwind CSS', 'Blade', 'MySQL'],
        source_url: "",
        preview_url: "",
        image: finflowImg,
        with_source: false,
        with_preview: false
    },
    {
        project_title: t('sections.projects.items.uaceem_site.title'),
        post: t('sections.projects.items.uaceem_site.post'),
        description: tm('sections.projects.items.uaceem_site.description') as string[],
        technos: ['HTML', 'CSS', 'Javascrypt'],
        source_url: "",
        preview_url: "",
        image: uaccemSiteImg,
        with_source: false,
        with_preview: false
    },
    {
        project_title: t('sections.projects.items.call_law.title'),
        post: t('sections.projects.items.call_law.post'),
        description: tm('sections.projects.items.call_law.description') as string[],
        technos: ['Django', 'React Native', 'PostgreSQL', 'Tailwind CSS'],
        source_url: "",
        preview_url: "",
        image: callLawImg,
        with_source: false,
        with_preview: false
    },
    {
        project_title: t('sections.projects.items.mtp_urgence.title'),
        post: t('sections.projects.items.mtp_urgence.post'),
        description: tm('sections.projects.items.mtp_urgence.description') as string[],
        technos: ['Quasar', 'Laravel', 'PostgreSQL'],
        source_url: "",
        preview_url: "",
        image: mtpUrgencyImg,
        with_source: false,
        with_preview: false
    },
]);
</script>

<template>
    <div class="w-full flex flex-col items-center mt-10">
        <Swiper
            :modules="[Navigation, Pagination, Mousewheel, Keyboard]"
            :slides-per-view="1"
            :space-between="50"
            :grabCursor="true"
            :mousewheel="true"
            :keyboard="true"
            :pagination="{ clickable: true }"
            :navigation="true"
            :loop="false"
            class="w-full"
        >
            <!-- Slides -->
            <SwiperSlide v-for="(project, index) in projects" :key="index" class="px-0 md:px-10 pb-14">
                <ProjectCard 
                    :project_title="project.project_title"
                    :post="project.post"
                    :description="project.description"
                    :tecnhos="project.technos"
                    :with_source="project.with_source"
                    :source_url="project.source_url"
                    :with_preview="project.with_preview"
                    :preview_url="project.preview_url"
                >
                    <img 
                        class="w-full rounded-[5px] shadow-[0px_7px_10px_0px_#052e16]"
                        :src="project.image" 
                        alt="Project Image"
                        loading="lazy"
                    >
                </ProjectCard>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
/* Bullets */
:deep(.swiper-pagination-bullet) {
  background: #1db954;
  width: 17px;
  height: 17px;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

/* Flèches */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #1db954;
  transition: color 0.3s ease;
  font-size: 5px;
  size: 5px;
  width: 20px;
  
}
@media (max-width: 780px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none !important;
  }
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  color: #16a34a;
}
</style>
