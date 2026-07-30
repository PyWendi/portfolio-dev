<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

import "./assets/css/main.css"
import LayoutSection from "./components/LayoutSection.vue";
import ClickSpark from "./components/ClickSpark.vue";
import SplashCursor from '@/components/SplashCursor.vue';
import CursorTarget from "./components/CursorTarget.vue";

// Component import 
import NavBar from "./components/NavBar.vue";
import HeaderSection from "./layout/HeaderSection.vue";
import AboutSection from "./layout/AboutSection.vue";
import ServiceSection from "./layout/ServiceSection.vue";
import SkillsSection from "./layout/SkillsSection.vue";
import WorkProjectSection from "./layout/WorkProjectSection.vue";
import ExtraSection from "./layout/ExtraSection.vue";
import ContactSection from "./layout/ContactSection.vue";
import FooterSection from "./layout/FooterSection.vue";

// Section refs
const homeSection = ref<HTMLElement | null>(null)
const aboutSection = ref<HTMLElement | null>(null)
const projectsSection = ref<HTMLElement | null>(null)
const skillsSection = ref<HTMLElement | null>(null)
const servicesSection = ref<HTMLElement | null>(null)
const extraSection = ref<HTMLElement | null>(null)
const contactSection = ref<HTMLElement | null>(null)

// Visibility states
const homeVisible = ref(false)
const aboutVisible = ref(false)
const projectsVisible = ref(false)
const skillsVisible = ref(false)
const servicesVisible = ref(false)
const extraVisible = ref(false)
const contactVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
    const sections = [
		{ ref: homeSection, visible: homeVisible },
        { ref: aboutSection, visible: aboutVisible },
        { ref: projectsSection, visible: projectsVisible },
        { ref: skillsSection, visible: skillsVisible },
        { ref: servicesSection, visible: servicesVisible },
        { ref: extraSection, visible: extraVisible },
        { ref: contactSection, visible: contactVisible }
    ]

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const section = sections.find(s => s.ref.value === entry.target)
                    if (section) {
                        section.visible.value = true
                    }
                }
            })
        },
        {
            threshold: 0.2
        }
    )

    sections.forEach(section => {
        if (section.ref.value) {
            observer!.observe(section.ref.value)
        }
    })
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<template>
	<ClickSpark
		spark-color="#ffffff"
		:spark-size="10"
		:spark-radius="30"
		:spark-count="16"
		:duration="400"
	>
	
		<CursorTarget
			:spin-duration="6"
			:hide-default-cursor="true"
			:parallax-on="true"
		/>

		<div class="relative ">
			<NavBar/>
		
			<!-- Home -->
			<div id="home" ref="homeSection" :class="['section-animate', { 'section-visible': homeVisible }]">
				<HeaderSection/>
			</div>
		
			<!-- About Me -->
			<div id="about" ref="aboutSection" :class="['section-animate', { 'section-visible': aboutVisible }]">
				<LayoutSection title="About Me" :without_margin="true">
					<AboutSection/>
				</LayoutSection>
			</div>
		
			<!-- Projects -->
			<div id="projects" ref="projectsSection" :class="['section-animate', { 'section-visible': projectsVisible }]">
				<LayoutSection title="Work and Projects">
					<div>
						<WorkProjectSection/>
					</div>
				</LayoutSection>
			</div>

			<!-- Services -->
			<div id="skills" ref="skillsSection" :class="['section-animate', { 'section-visible': skillsVisible }]">
				<LayoutSection title="Skills">
					<div>
						<SkillsSection/>
					</div>
				</LayoutSection>
			</div>

			<!-- Services -->
			<div id="services" ref="servicesSection" :class="['section-animate', { 'section-visible': servicesVisible }]">
				<LayoutSection title="Services">
					<div>
						<ServiceSection/>
					</div>
				</LayoutSection>
			</div>
		
			<!-- Experience -->
			<div id="extra" ref="extraSection" :class="['section-animate', { 'section-visible': extraVisible }]">
				<LayoutSection title="Experiences and extra">
					<div>
						<ExtraSection/>
					</div>
				</LayoutSection>
			</div>
		
			<div id="contact" ref="contactSection" :class="['section-animate', { 'section-visible': contactVisible }]">
				<LayoutSection title="Contact" :without_margin="true">
					<div>
						<!-- <SplashCursor/> -->
						<ContactSection/>
					</div>
				</LayoutSection>
			</div>

		</div>
	</ClickSpark>
</template>

<style scoped>
.section-animate {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.section-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
