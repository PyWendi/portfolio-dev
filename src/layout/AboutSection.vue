<script setup lang="ts"></script>

<template>
    <div class="relative">
        <div class="absolute bg-[#49bb73db] rounded-full blur-[150px] z-[-10]
         xl:w-[400px] xl:h-[400px] xl:top-[-300px] xl:left-[-15%]
         lg:w-[400px] lg:h-[400px] lg:top-[-250px] lg:left-[-25%]
         md:w-[300px] md:h-[300px] md:top-[-200px] md:left-[-25%]
         sm:w-[300px] sm:h-[300px] sm:top-[-100px] sm:left-[-25%]
         xs:w-[300px] xs:h-[300px] xs:top-[-100px] xs:left-[-25%]
         w-[250px] h-[250px] top-[-100px] left-[-17%]
         ">
        </div>

        <div class="absolute hidden mb:block bg-[#40bd6e7d] rounded-full blur-[130px] z-[-10]
         xl:w-[450px] xl:h-[450px] xl:top-[450px] xl:left-[80%]
         lg:w-[300px] lg:h-[300px] lg:top-[450px] lg:left-[80%]
         md:w-[200px] md:h-[200px] md:top-[550px] md:left-[80%]
         sm:w-[300px] sm:h-[300px] sm:top-[600px] sm:left-[80%]
         xs:w-[300px] xs:h-[300px] xs:top-[500px] xs:left-[80%]
         w-[250px] h-[250px] top-[600px] left-[85%]
         ">
        </div>

        <div class=" my-12 flex flex-col-reverse md:flex-row px-8 lg:px-0
        items-center justify-center gap-16">
            <!-- Text about me -->
            <div class="w-full md:w-[60%] text-[13px] md:text-[16px] lg:text-[20px] text-justify">
                I’m a passionate full-stack web developer who loves turning ideas into reality through code. 
                What started as simple curiosity became a deep passion for building, solving problems, and exploring new technologies. <br> <br>

                I thrive on challenges, they push me to grow and create smarter solutions. Beyond web development, 
                I’m also diving into game development, where creativity and logic come together in fascinating ways. <br> <br></br>

                For me, coding isn’t just a job, it’s a journey of constant learning, discovery, and creation.
            </div>
    
            <!-- Image -->
            <img 
            class="w-[50%] md:[22%] lg:w-[20%]" 
            src="../assets/img/about_img.png" alt="Anderson's image">
        </div>

        <!-- Image decoration -->
        <div>
            <img 
            src="../assets/img/low_wave.svg" alt="About decoration">
        </div>

    </div>
</template>