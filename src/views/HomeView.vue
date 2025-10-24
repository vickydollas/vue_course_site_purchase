<script setup>
import HeroContent from '../components/HeroContent.vue'
import HomeCard from '../components/HomeCard.vue'
import JobListing from '../components/JobListing.vue'
</script>

<template>
    <HeroContent />
    <HomeCard />
    <JobListing :limit="3" :showButton="true"/>
</template>