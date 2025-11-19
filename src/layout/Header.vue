<script setup lang="ts">
import { defineProps } from 'vue';
interface MyProps {
  title: string
}

const props = defineProps<MyProps>()


</script>

<template>
    <div class="relative krona-one-regular text-white mt-[120px] px-8">
        <!-- <div class="absolute top-32 left-[75%] w-[300px] h-[300px] bg-[#49bb73db]  rounded-full 
         blur-3xl">
        </div> -->
        <!-- <img 
        class=" absolute top-[-530px] right-[-500px] w-[100%]"
        src="../assets/img/blured.png" alt="Main illustration"> -->

        <div class="flex flex-row items-center justify-between">
            <div>
                Hello world asdoijasodajsd
                asd
                asd
                asd
                sada
                sdasd
                asd
                asd
            </div>

            <!-- Illustration -->
            <img 
            class="w-[40%] relative mr-10 border-4 rounded-full p-[40px] border-dashed border-green-400 "
            src="../assets/img/illustration.png" alt="Main illustration">
            <!-- bg-[#49bb7369] -->
        </div>
    </div>

    <div class="mt-[2000px]"></div>
</template>

