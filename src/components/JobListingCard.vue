<template>
    <div class="container">
        <div class="container1">
            <h3>{{ job.type }}</h3>
            <h2>{{ job.title}}</h2>
            <p>{{job.description}}</p>
            <p>{{ job.salary }}</p>
            <div>
                <p>{{ job.location }}</p>
                <a href="#" class="button">Read more</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    job: Object
})
</script>

<style>
.container1 h3{
    text-align: left;
}
.container1 h2{
    text-align: left;
}
.container1 p{
    text-align: left;
}
.button{
    text-decoration: none;
    color: #ffffff;
    background-color: #22C55E;
    font-size: 20px;
    padding: 18px;
    display: inline-block;
    text-align: left;
}
.container > div{ 
    background-color: #ffffff;
    padding: 30px;
    border-radius: 20px;
    min-height: 20vh;
}
</style>