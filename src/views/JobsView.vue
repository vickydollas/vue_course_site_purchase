<template>
    <div class="go-back-home">
        <router-link to="/"><i class="pi pi-home" style="color: black"></i>Go to Home</router-link>
    </div>
    <JobListing />
</template>

<script setup>
import JobListing from '../components/JobListing.vue'
import { RouterLink } from 'vue-router'
</script>
<style scoped>
.go-back-home{
    background-color: #D5F9E1;
    width: 100%;
    padding: 10px;
    text-align: left;
    /* margin: 0 0 0 10px; */
}
.go-back-home a{
    text-decoration: none;
    /* padding: 5px; */
}
.pi{
    font-size: 20px;
    margin-right: 10px;
}
</style>