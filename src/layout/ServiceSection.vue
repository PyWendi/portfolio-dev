<script lang="ts" setup>
import ServiceCard from '@/components/ServiceCard.vue';

</script>

<template>
    <div class="mt-8">
        <!-- Card list -->
        <div class="flex flex-wrap justify-center gap-8 mx-auto mb-8">
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[50%] gap-8 mx-auto"> -->
        
                <ServiceCard 
                img_url="../assets/img/service_web.png"
                service_title="Web development"
                service_description="Complete and scalable web application development."
                >
                    <img class="w-[130px] h-[130px]"
                    src="../assets/img/service_web.png" alt="Web development">
                </ServiceCard>
        
                <ServiceCard 
                img_url="../assets/img/service_back.png"
                service_title="BACKEND & API ENGINEERING"
                service_description="Robust, secure and well-structured backend systems."
                >
                    <img class="w-[130px] h-[130px]"
                    src="../assets/img/service_back.png" alt="BACKEND & API ENGINEERING">
                </ServiceCard>
        
                <ServiceCard 
                img_url="../assets/img/service_front.png"
                service_title="FRONTEND UI/UX INTEGRATION"
                service_description="Clean, modern and responsive interfaces for better experience."
                >
                    <img class="w-[130px] h-[130px]"
                    src="../assets/img/service_front.png" alt="FRONTEND UI/UX INTEGRATION">
                </ServiceCard>
            </div>

            <div class="flex flex-wrap justify-center gap-8 mx-auto">
                <ServiceCard 
                img_url="../assets/img/service_db.png"
                service_title="DATABASE DESIGN & OPTIMIZATION"
                service_description="Well-designed, reliable, and optimized database systems."
                >
                    <img class="w-[130px] h-[130px]"
                    src="../assets/img/service_db.png" alt="DATABASE DESIGN & OPTIMIZATION">
                </ServiceCard>
        
                <ServiceCard 
                img_url="../assets/img/service_game.png"
                service_title="GAME DEVELOPEMENT"
                service_description="Creating small but meaningful game experiences"
                >
                    <img class="w-[130px] h-[130px]"
                    src="../assets/img/service_game.png" alt="GAME DEVELOPEMENT">
                </ServiceCard>
        </div>
    </div>
</template>
