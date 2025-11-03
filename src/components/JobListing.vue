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
import { ref, defineProps, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import JobListingCard from './JobListingCard.vue'

const jobs = ref([])
onMounted(async () => {
    try {
        const response = await fetch('http://localhost:4000/jobs')
        jobs.value = await response.json()
    } catch (error) {
        console.log('error loading', error)
    }
})

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
    padding-top: 20px;
}
.container2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px 30px;
    margin: 20px 50px 40px 50px;
}
.showbtn{
    text-decoration: none;
    background-color: black;
    color: #ddd;
    min-width: 100px;
    /* height: 8vh; */
    padding: 18px 18em;
    border-radius: 20px;
    /* margin: 0 auto; */
}
.container3{
    margin: 0 auto 50px auto;
}
</style>