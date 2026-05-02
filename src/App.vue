<script setup lang="ts">

import "./assets/css/main.css"
import LayoutSection from "./components/LayoutSection.vue";

// Component import 
import NavBar from "./components/NavBar.vue";
import AboutSection from "./layout/AboutSection.vue";
import HeaderSection from "./layout/HeaderSection.vue";

</script>

<template>
	<!-- <div>
		
	</div> -->
	<NavBar/>
	<div id="home">
		<HeaderSection/>
	</div>
	<div id="about">
		<LayoutSection title="About Me">
			<AboutSection/>
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

<style scoped></style>
