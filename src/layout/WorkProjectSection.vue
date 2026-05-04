<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import scoAppImg from '../assets/img/projects/sco_app.jpg';
import kosherImg from '../assets/img/projects/kosher.png';
import finflowImg from '../assets/img/projects/finflow.png';

// image: new URL('../assets/img/projects/sco_app.jpg', import.meta.url).href,
const projects = [
    {
        project_title: "SCO App****",
        post: "Backend developer (School project)",
        description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Ut molestie interdum eros 
        et elementum. Suspendisse potenti. 
        Pellentesque non sodales mauris. Vivamus leo erat, 
        consectetur eu convallis quis, hendrerit ut libero. 
        Etiam varius eu nibh sollicitudin vestibulum.`,
        technos: ['FastAPI', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
        source_url: "https://github.com/PyWendi",
        preview_url: "https://web.koshergate.com",
        image: scoAppImg,
        with_source: true,
        with_preview: true
    },
    {
        project_title: "NeedKOSHER",
        post: "Fullstack developer (Freelancing)",
        description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Ut molestie interdum eros 
        et elementum. Suspendisse potenti. 
        Pellentesque non sodales mauris. Vivamus leo erat, 
        consectetur eu convallis quis, hendrerit ut libero. 
        Etiam varius eu nibh sollicitudin vestibulum.`,
        technos: ['Nuxt', 'Tailwind CSS', 'Express.js', 'MySQL'],
        source_url: "https://github.com/PyWendi",
        preview_url: "https://web.koshergate.com",
        image: kosherImg,
        with_source: false,
        with_preview: true
    },
    {
        project_title: "UACEEM FinFlowImg",
        post: "Fullstack developer (internship)",
        description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Ut molestie interdum eros 
        et elementum. Suspendisse potenti. 
        Pellentesque non sodales mauris. Vivamus leo erat, 
        consectetur eu convallis quis, hendrerit ut libero. 
        Etiam varius eu nibh sollicitudin vestibulum.`,
        technos: ['Laravel', 'Tailwind CSS', 'Blade', 'MySQL'],
        source_url: "https://github.com/PyWendi",
        preview_url: "https://web.koshergate.com",
        image: finflowImg,
        with_source: false,
        with_preview: false
    },

    // Call law
    // Socolait
    {
        project_title: "SCO App",
        post: "Backend developer (School project)",
        description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Ut molestie interdum eros 
        et elementum. Suspendisse potenti. 
        Pellentesque non sodales mauris. Vivamus leo erat, 
        consectetur eu convallis quis, hendrerit ut libero. 
        Etiam varius eu nibh sollicitudin vestibulum.`,
        technos: ['FastAPI', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
        source_url: "https://github.com/PyWendi",
        preview_url: "https://web.koshergate.com",
        image: scoAppImg,
        with_source: true,
        with_preview: true
    },
    {
        project_title: "Another Project",
        post: "Fullstack developer",
        description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Ut molestie interdum eros 
        et elementum. Suspendisse potenti. 
        Pellentesque non sodales mauris. Vivamus leo erat, 
        consectetur eu convallis quis, hendrerit ut libero. 
        Etiam varius eu nibh sollicitudin vestibulum.`,
        technos: ['Vue.js', 'Node.js', 'MongoDB'],
        source_url: "https://github.com/PyWendi",
        preview_url: "https://example.com",
        image: scoAppImg,
        with_source: true,
        with_preview: true
    },
];
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
                    :is_even="index % 2 === 0"
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
