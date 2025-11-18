<script lang="ts">

</script>

<template>
    <div class="krona-one-regular py-6 px-10
    flex flex-row items-center justify-between
    ">
        <!-- Page logo/title -->
        <div class="momo-signature-regular font-semibold text-green-400 text-[25px]">
            Anderson.
        </div>

        <!-- Page nav section -->
        <div>
            <ul class="flex flex-row items-center justify-center gap-10 text-[20px] text-white
            rounded-full bg-[#4ade809e] px-8 py-3 shadow-[0_0_10px_#36738d]
            ">
                <li class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:cursor-pointer hover:text-[22px]">
                    Home
                </li>
                <li class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:cursor-pointer hover:text-[22px]">
                    About
                </li>
                <li class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:cursor-pointer hover:text-[22px]">
                    Skills
                </li>
                <li class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:cursor-pointer hover:text-[22px]">
                    Services
                </li>
                <li class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:cursor-pointer hover:text-[22px]">
                    Projects
                </li>
                <li class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:cursor-pointer hover:text-[22px]">
                    Extra
                </li>
                <li class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:cursor-pointer hover:text-[22px]">
                    Contact
                </li>
            </ul>
        </div>

        <!-- Page resume to download -->
        <div>
            <button class="flex items-center justify-normal gap-2 border-2 border-white rounded-full py-2 px-6
            duration-300 hover:shadow-md hover:shadow-white
            ">
                <span class="text-white text-25px">
                    My Resume
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" 
                    class="text-white lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                </span>
            </button>
        </div>
    </div>
</template>
