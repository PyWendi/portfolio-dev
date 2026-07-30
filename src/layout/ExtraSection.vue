<script setup lang="ts">
const timelineData = [
  { date: "December 2025 - May 2026", content: "Led backend/frontend architecture redesigns and automated workflows for Pilote360, Cloud Soiby, and Winedger SaaS platforms.", title: "Pilote360, Cloud SOIBY, Winedger" },
  { date: "January - February 2026", content: "Mentored 6 teams in rapid UI prototyping using Figma and generative AI tools to accelerate deliverable production.", title: "No-Code Hackathon" },
  { date: "September - December 2025", content: "Completed an intensive program specializing in Godot engine game development and professional production pipelines.", title: "Game Up Africa Bootcamp" },
  { date: "November 2025", content: "Built the backend for a student administrative record management application using Next.js, Flask, and PostgreSQL.", title: "Educational Project — SCO APP" },
  { date: "February - June 2025", content: "Developed a full-stack web application centralizing travel, events, and catering services for the Jewish community using Nuxt.js and Express.js.", title: "Freelance - Need Kosher" },
  
  { date: "January 2025 - June 2026", content: "Led Unity training sessions and supervised club members during regional and national Game Jam competitions.", title: "DevGameENI Club President" },
  { date: "April - May 2025", content: "Coordinated club operations and logistics, leading teams to secure two competition awards.", title: "Gameload Game Jam Double Award Winner" },
  { date: "August - November 2024", content: "Digitized all university financial transactions by designing and implementing a web application with Laravel and Tailwind CSS.Complete and scalable web application development.", title: "UACEEM FinFlow (Internship)" },
  { date: "July - August 2024", content: "Designed and developed a mobile appointment-booking app for lawyers using React Native, Django, and PostgreSQL.", title: "Call-Law (solo project)" },
  { date: "April - May 2024", content: "Built backend services and integrated UI components for a dairy e-commerce app with payment flow simulation.", title: "Dairy Sales & Payment Simulation (team)" },
  { date: "Sptember - December 2023", content: "Developed a real-time web application to streamline emergency work monitoring across central and regional offices using Laravel and Quasar.", title: "Web Developer Intern — Ministry of Public Works" },
];
</script>

<template>
  <div class="relative mx-auto flex flex-col items-center w-full md:w-4/5 lg:w-2/3">
    <!-- Ligne verticale -->
    <div class="absolute h-full w-1 bg-green-400"></div>

    <div v-for="(item, index) in timelineData" :key="index" class="w-full flex items-center my-6">
      <!-- CASE IMPAIR : Date à gauche, content à droite -->
      <div v-if="index % 2 === 0" class="flex w-full justify-between items-center">
        <div class="w-1/2 text-right text-[10px] lg:text-[20px] pr-5 lg:pr-10 font-bold">{{ item.date }}</div>
        <div class="w-1/2 text-left text-white px-5 lg:px-10 rounded-lg
        flex flex-col items-start justify-start">
            <h2 class="text-[10px] lg:text-[20px] font-bold text-green-400">{{ item.title }}</h2>
            <div class="hidden sm:block mt-2 w-full lg:w-3/4 text-[10px] lg:text-[17px] bg-[#376652] px-4 py-2 rounded-md">January 20205
                {{ item.content }}
            </div>
        </div>
        <!-- bar -->
      </div>

      <!-- CASE PAIR : Content à gauche, date à droite -->
      <div v-else class="flex w-full justify-between items-center">
        <div class="w-1/2 text-right text-white px-5 lg:px-10 rounded-lg
        flex flex-col items-end justify-start">
            <h2 class="text-[10px] lg:text-[20px] font-bold text-green-400">{{ item.title }}</h2>
            <div class="hidden sm:block mt-2 w-full lg:w-3/4  text-[10px] lg:text-[17px] bg-[#376652] px-4 py-2 rounded-md">
                {{ item.content }}
            </div>
        </div>
        <div class="w-1/2 pl-5 lg:pl-10 text-[10px] lg:text-[20px] font-bold">{{ item.date }}</div>
      </div>
    </div>
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
