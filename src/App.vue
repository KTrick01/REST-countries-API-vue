<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
	<HeaderComponent></HeaderComponent>

	<main>
		<RouterView v-slot="{ Component }">
			<transition name="route" mode="out-in">
				<component :is="Component"></component>
			</transition>
		</RouterView>
	</main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	list-style: none;
	text-decoration: none;
	color: inherit;
	--Light-Theme-Bg: hsl(0, 0%, 98%);
	--Light-Theme-Text: hsl(200, 15%, 8%);
	--Light-Theme-Container: hsl(0, 0%, 100%);
	--Dark-Theme-Bg: #202d36;
	--Dark-Theme-Text: white;
	--Dark-Theme-Container: #2b3743;
	transition: 0.3s all;
}

html,
body {
	min-height: 100vh;
}

body {
	font-family: 'Nunito Sans', sans-serif;
	font-size: 14px;
	background-color: var(--Theme-Bg);
	color: var(--Theme-Text);
}

#app {
	background-color: inherit;
	color: inherit;
}

.dark {
	.details__borders,
	.details__back,
	.regionLabel,
	.dropdown,
	.input-area,
	.Header,
	.countries__container {
		background-color: var(--Dark-Theme-Container) !important;
		color: var(--Dark-Theme-Text) !important;
	}

	body,
	.details__main {
		background-color: var(--Dark-Theme-Bg);
		color: var(--Dark-Theme-Text) !important;
	}

	.lds-spinner div:after {
		background: white !important;
		transition: all 0.3s;
	}
}
.router-enter-from {
	opacity: 0;
	transform: translateX(100px);
}

.router-enter-active {
	transition: all 0.3s ease-out;
}

.router-leave-to {
	opacity: 0;
	transform: translateX(-100px);
}
.router-leave-active {
	transition: all 0.3s ease-in;
}
@media (prefers-color-scheme: dark) {
}
</style>
