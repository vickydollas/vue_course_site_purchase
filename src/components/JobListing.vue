<template>
    <div class="main-container">
        <h1>Browse Jobs</h1>
        <div class="container2">
            <JobListingCard class="details" v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job"/>
        </div>
    </div>
    <div v-if="showButton" class="container3">
        <router-link to="/jobs" class="showbtn">View All jobs</router-link>
    </div>
</template>

<script setup>
import jobData from './jobs.json'
import { ref, defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import JobListingCard from './JobListingCard.vue'

const jobs = ref(jobData.jobs)
defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})
</script>

<style>
.main-container{
    background-color: #ECF5FC;
    margin: 50px 0 80px 0;
    min-height: 40vh;
}
.main-container h1{
    /* color: red; */
    padding-top: 20px;
}
.container2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px 30px;
    margin: 20px 50px 40px 50px;
}
.container3 a{
    text-decoration: none;
    background-color: black;
    color: #ddd;
    min-width: 200px;
    height: 10vh;
    padding: 25px 30em;
    border-radius: 20px;
    /* margin: 0 auto; */
}
.container3{
    margin: 0 auto 50px auto;
}
</style>