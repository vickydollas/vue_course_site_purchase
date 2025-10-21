<template>
    <div class="main-container">
        <h1>Browse Jobs</h1>
        <div class="container2">
            <JobListingCard class="details" v-for="job in jobs" :key="job.id" :job="job"/>
        </div>
    </div>
</template>

<script setup>
import jobData from './jobs.json'
import { ref } from 'vue'
import JobListingCard from './JobListingCard.vue'

const jobs = ref(jobData.jobs)

console.log(jobs.value)
</script>

<style>
.main-container{
    background-color: #ECF5FC;
    margin-top: 50px;
}
.main-container h1{
    margin-top: 10px;
}
.container2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px 30px;
    margin: 20px 50px;
}
</style>