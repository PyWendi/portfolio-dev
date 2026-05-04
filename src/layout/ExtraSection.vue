<script setup lang="ts">
const timelineData = [
  { date: "October - December 2025", content: "Complete and scalable web application development.", title: "Game Up Africa Bootcamp" },
  { date: "October 2025", content: "Complete and scalable web application development.", title: "School Project" },
  { date: "June - July 2025", content: "Complete and scalable web application development.", title: "Data Science with Knine" },
  { date: "February - June 2025", content: "Complete and scalable web application development..", title: "NeedKOSHER" },
  { date: "January 2025", content: "Complete and scalable web application development.", title: "Gameload Game Jam" },
  { date: "January 2025", content: "Complete and scalable web application development.", title: "Founding DevGameEni club" },
  { date: "August - November 2024", content: "Complete and scalable web application development.", title: "UACEEM FinFlow (Internship)" },
  { date: "July - August 2024", content: "Complete and scalable mobile application development.", title: "Call-Law (solo project)" },
  { date: "April - May 2024", content: "Complete and scalable web application development.", title: "School Project (team)" },
  { date: "Sptember - December 2023", content: "Complete and scalable web application development.", title: "MTP Urgency App (internship)" },
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
