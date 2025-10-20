<template>
<NavbarContent />
<HeroContent />
<HomeCard />
</template>

<script setup>
import NavbarContent from './components/NavbarContent.vue'
import HeroContent from './components/HeroContent.vue'
import HomeCard from './components/HomeCard.vue'

</script>

<style>
body, *{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
