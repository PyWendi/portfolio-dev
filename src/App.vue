<script setup lang="ts">

import "./assets/css/main.css"
import LayoutSection from "./components/LayoutSection.vue";

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

</script>

<template>
	<div class="relative ">
		<NavBar/>
	
		<!-- Home -->
		<div id="home">
			<HeaderSection/>
		</div>
	
		<!-- About Me -->
		<div id="about">
			<LayoutSection title="About Me" :without_margin="true">
				<AboutSection/>
			</LayoutSection>
		</div>
	
		<div id="extra">
			<LayoutSection title="Experiences and extra">
				<div>
					<ExtraSection/>
				</div>
			</LayoutSection>
		</div>
	
		<!-- Services -->
		<div id="services">
			<LayoutSection title="Services">
				<div>
					<ServiceSection/>
				</div>
			</LayoutSection>
		</div>
	
		<div id="projects">
			<LayoutSection title="Work and Projects" 
			with_overlay overlay_class="bg-[#143549] py-10">
				<div>
					<WorkProjectSection/>
				</div>
			</LayoutSection>
		</div>
	
		<!-- Services -->
		<div id="skills">
			<LayoutSection title="Skills">
				<div>
					<SkillsSection/>
				</div>
			</LayoutSection>
		</div>
	
		<div id="contact">
			<LayoutSection title="Contact" :without_margin="true" 
			with_overlay overlay_class="bg-[#0e2229] pt-10">
				<div>
					<ContactSection/>
				</div>
			</LayoutSection>
		</div>

	</div>
</template>
