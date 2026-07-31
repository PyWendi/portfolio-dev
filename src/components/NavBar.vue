<script setup lang="ts">
  import { ref, type Ref, onMounted, onUnmounted } from "vue"
  import { useI18n } from 'vue-i18n'
  import resumeFR from "@/assets/resume/CV Anderson - developpeur fullstack.pdf"
  import resumeEN from "@/assets/resume/Fullstack developer.pdf"
  import CursorTarget from '@/components/CursorTarget.vue';

  const { t, locale } = useI18n()
  const isMenuOpen: Ref<Boolean> = ref(false)
  const isHeaderVisible: Ref<boolean> = ref(true)
  let lastScrollY: number = 0

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const changeLanguage = (lang: string) => {
    locale.value = lang
    localStorage.setItem('user-locale', lang)
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    const isFr = locale.value === 'fr'
    link.href = isFr ? resumeFR : resumeEN
    link.download = isFr ? 'CV Anderson - developpeur fullstack.pdf' : 'Fullstack developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    isMenuOpen.value = false
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // On descend → cacher le header
      isHeaderVisible.value = false
    } else {
      // On monte → afficher le header
      isHeaderVisible.value = true
    }
    lastScrollY = currentScrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <div :class="[
        'krona-one-regular py-4 px-6 sm:py-6 sm:px-10 flex flex-row items-center justify-between fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#224832d9] to-transparent backdrop-blur-sm transition-transform duration-400',
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    ]">

    <!-- Page logo/title -->
    <div class="momo-signature-regular font-semibold text-green-400 
             text-[20px] sm:text-[25px] lg:text-[20px] xl:text-[25px]">
      Anderson.
    </div>


    <!-- Page nav section (desktop) -->
    <div class="hidden lg:block">
      <ul class="flex flex-row items-center justify-center 
               gap-4 sm:gap-6 lg:gap-4 xl:gap-10 text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[16px]
               text-white rounded-full bg-[#4ade809e] 
               px-5 py-2 sm:px-8 sm:py-3 shadow-[0_0_10px_#36738d]">
        <li class="text-[12px] hover:text-green-200 transition-all duration-300 cursor-pointer cursor-target">
          <a href="#home">{{ t('nav.home') }}</a>
        </li>
        <li class="text-[12px] hover:text-green-200 transition-all duration-300 cursor-pointer cursor-target">
          <a href="#about">{{ t('nav.about') }}</a>
        </li>
        <li class="text-[12px] hover:text-green-200 transition-all duration-300 cursor-pointer cursor-target">
          <a href="#projects">{{ t('nav.projects') }}</a>
        </li>
        <li class="text-[12px] hover:text-green-200 transition-all duration-300 cursor-pointer cursor-target">
          <a href="#skills">{{ t('nav.skills') }}</a>
        </li>
        <li class="text-[12px] hover:text-green-200 transition-all duration-300 cursor-pointer cursor-target">
          <a href="#services">{{ t('nav.services') }}</a>
        </li>
        <li class="text-[12px] hover:text-green-200 transition-all duration-300 cursor-pointer cursor-target">
          <a href="#extra">{{ t('nav.experiences') }}</a>
        </li>
        <li class="text-[12px] hover:text-green-200 transition-all duration-300 cursor-pointer cursor-target">
          <a href="#contact">{{ t('nav.contact') }}</a>
        </li>
      </ul>
    </div>

    <!-- Page resume (desktop only) -->
    <div class="hidden lg:flex items-center gap-4">
      <!-- Langue switcher -->
      <div class="flex items-center gap-2 border border-white/20 rounded-full px-2 py-1 bg-black/20 backdrop-blur-sm">
        <button @click="changeLanguage('fr')"
          :class="['text-[12px] px-2 py-0.5 rounded-full transition-all duration-300 cursor-target', locale === 'fr' ? 'bg-green-400 text-black font-semibold' : 'text-white hover:text-green-200']">
          FR
        </button>
        <button @click="changeLanguage('en')"
          :class="['text-[12px] px-2 py-0.5 rounded-full transition-all duration-300 cursor-target', locale === 'en' ? 'bg-green-400 text-black font-semibold' : 'text-white hover:text-green-200']">
          EN
        </button>
      </div>

      <button @click="downloadResume" class="flex items-center gap-2 border-2 border-white rounded-full py-1.5 px-4 sm:py-1.5 sm:px-6
               duration-300 hover:bg-[#ffffff39] cursor-target">
        <span class="text-white text-[12px]">{{ t('nav.resume') }}</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            class="text-white lucide lucide-download">
            <path d="M12 15V3" />
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
          </svg>
        </span>
      </button>
    </div>

    <!-- Menu mobile (burger button) -->
    <div class="lg:hidden flex items-center gap-4">
      <!-- Langue switcher mobile header -->
      <div class="flex items-center gap-1 border border-white/20 rounded-full px-2 py-0.5 bg-black/20 backdrop-blur-sm">
        <button @click="changeLanguage('fr')"
          :class="['text-[11px] px-1.5 py-0.5 rounded-full transition-all duration-300', locale === 'fr' ? 'bg-green-400 text-black font-semibold' : 'text-white']">
          FR
        </button>
        <button @click="changeLanguage('en')"
          :class="['text-[11px] px-1.5 py-0.5 rounded-full transition-all duration-300', locale === 'en' ? 'bg-green-400 text-black font-semibold' : 'text-white']">
          EN
        </button>
      </div>

      <button @click="toggleMenu" class="text-white text-[24px] hover:scale-105 transition">
        <!-- Si tu veux une icône cross quand ouvert, tu peux faire une condition ici -->
        {{ isMenuOpen ? '✖' : '☰' }}
      </button>
    </div>

    <!-- 🟢 Menu mobile déroulant -->
    <transition name="fade">
      <ul v-if="isMenuOpen" class="absolute top-full w-full bg-[#4ade809e] backdrop-blur-md shadow-[0_0_10px_#36738d]
                    py-4 px-8 flex flex-col gap-4 text-white right-0
                    text-[16px] font-medium">
        <li @click="isMenuOpen = false" class="text-[12px] hover:text-green-200 cursor-target cursor-pointer">
          <a href="#home">{{ t('nav.home') }}</a>
        </li>
        <li @click="isMenuOpen = false" class="text-[12px] hover:text-green-200 cursor-target cursor-pointer">
          <a href="#about">{{ t('nav.about') }}</a>
        </li>
        <li @click="isMenuOpen = false" class="text-[12px] hover:text-green-200 cursor-target cursor-pointer">
          <a href="#projects">{{ t('nav.projects') }}</a>
        </li>
        <li @click="isMenuOpen = false" class="text-[12px] hover:text-green-200 cursor-target cursor-pointer">
          <a href="#skills">{{ t('nav.skills') }}</a>
        </li>
        <li @click="isMenuOpen = false" class="text-[12px] hover:text-green-200 cursor-target cursor-pointer">
          <a href="#services">{{ t('nav.services') }}</a>
        </li>
        <li @click="isMenuOpen = false" class="text-[12px] hover:text-green-200 cursor-target cursor-pointer">
          <a href="#extra">{{ t('nav.experiences') }}</a>
        </li>
        <li @click="isMenuOpen = false" class="text-[12px] hover:text-green-200 cursor-target cursor-pointer">
          <a href="#contact">{{ t('nav.contact') }}</a>
        </li>

        <!-- Resume -->
        <li class="pt-5 border-t border-white/40 mt-2 flex justify-center">
          <button @click="downloadResume" class="w-1/2 flex items-center justify-center gap-2 border-2 border-white rounded-full py-2
                duration-300 hover:bg-[#ffffff39]">
            <span class="text-white text-[12px] ">{{ t('nav.my_resume') }}</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                class="text-white lucide lucide-download">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </transition>

  </div>
</template>

<style scoped>
  /* Animation du menu */
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>