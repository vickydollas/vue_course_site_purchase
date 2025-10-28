<template>
    <div class="container">
        <div class="container1">
            <h3>{{ props.job.type }}</h3>
            <h2>{{ props.job.title}}</h2>
            <p>{{ truncatedDescription }} <span class="view-more" @click="toggleFullDescription">{{ showFullDescription ? 'less' : 'more' }}</span></p>
            <p>{{ props.job.salary }}</p>
            <div>
                <p>{{ props.job.location }}</p>
                <router-link :to="'/job/' + props.job.id" class="button">Read more</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
const props = defineProps({
    job: Object
})
const showFullDescription = ref(false)
const truncatedDescription = computed(() => {
    let description = props.job.description
    if (!showFullDescription.value) {
        description = description.substring(0, 90) + '...'
    }
    return description
})

const toggleFullDescription = () => {
    showFullDescription.value = !showFullDescription.value
}
</script>

<style>
.container{padding-bottom: 35px;}
.container1 h3{
    text-align: left;
    margin-bottom: 10px;
    font-size: 15px;
}
.container1 h2{
    text-align: left;
    margin-bottom: 10px;
}
.container1 p{
    text-align: left;
    margin-bottom: 10px;
    font-size: 19px;
}
.button{
    text-decoration: none;
    color: #ffffff;
    background-color: #22C55E;
    font-size: 20px;
    padding: 15px;
    border-radius: 20px;
    margin-right: 50px;
    text-align: left;
}
.button:hover{
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    color: #22C55E;
}
.container1 div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container1 div > p{margin-left: 10px; color: red;}
.container > div{ 
    background-color: #ffffff;
    padding: 30px;
    border-radius: 20px;
    min-height: 15vh;
}
.view-more{
    text-decoration: underline;
    cursor: pointer;
}
</style>