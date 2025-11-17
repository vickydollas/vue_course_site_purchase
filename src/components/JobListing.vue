<template>
    <div class="main-container">
        <h1>Browse Jobs</h1>
        <div class="container2">
            <JobListingCard class="details" v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job"/>
        </div>
    </div>
    <router-link to="/jobs" class="showbtn" v-if="showButton">View All jobs</router-link>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import JobListingCard from './JobListingCard.vue'

const jobs = ref([])
onMounted(async () => {
    try {
        const response = await fetch('/jobs2.json')
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
    padding: 18px 0;
    border-radius: 20px;
    max-width: 50%;
    display: block;
    margin: 0 auto 10px auto;
}
@media (max-width: 768px) {
    .container2{
        grid-template-columns: 1fr;
    }
}
</style>