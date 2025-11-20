<script setup lang="ts">

import "./assets/css/main.css"
import LayoutSection from "./components/LayoutSection.vue";

// Component import 
import NavBar from "./components/NavBar.vue";
import AboutSection from "./layout/AboutSection.vue";
import HeaderSection from "./layout/HeaderSection.vue";
import ServiceSection from "./layout/ServiceSection.vue";

</script>

<template>
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

	<!-- Services -->
	<div id="services">
		<LayoutSection title="Services">
			<div>
				<ServiceSection/>
			</div>
		</LayoutSection>
	</div>

	<!-- Services -->
	<div id="skills">
		<LayoutSection title="Services">
			<div>
				
			</div>
		</LayoutSection>
	</div>


	<div id="skills">
		<LayoutSection title="About Me">
			<div>
				Another section
			</div>
		</LayoutSection>
	</div>
	
</template>

<style></style>
