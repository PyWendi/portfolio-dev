<script setup lang="ts">

import "./assets/css/main.css"

// Component import 
import NavBar from "./components/NavBar.vue";
import Header from "./layout/Header.vue";

</script>

<template>
	<!-- <div>
		
	</div> -->
	<NavBar/>
	<div id="home">
		<Header :title="'titre'"/>
	</div>
	<div id="about">
		<Header :title="'titre'"/>
	</div>
	<div id="skills">
		<Header :title="'titre'"/>
	</div>
	
</template>

<style scoped></style>
