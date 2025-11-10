<template>
  <div class="home-card">
    <CardContent bg="box1">
        <h1>For Developers</h1>
        <p>Browse our view jobs and start your career today</p>
        <router-link to="/jobs"><button>Browse jobs</button></router-link>
    </CardContent>
    <CardContent bg="box2">
        <h1>For Employers</h1>
        <p>List your job to find the perfect developer for the role</p>
        <router-link to="/jobs/add"><button>Add jobs</button></router-link>
     </CardContent>
  </div>
</template>

<script setup>
import CardContent from "./CardContent.vue";
import { RouterLink } from 'vue-router'
</script>

<style>
.home-card{
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}
.box1{
    background-color: #F0F3F2;
    border-radius: 20px;
    min-width: 45%;
    min-height: 22vh;
}
.box2{
    background-color: #D5F9E1;
    border-radius: 20px;
    min-width: 45%;
    min-height: 22vh;
}
.box1 h1, .box2 h1{ font-size: 35px; text-align: left; margin: 20px;}
.box1 p, .box2 p{font-size: 17px; margin: 20px; text-align: left;}
.box1 > a > button, .box2 > a > button{
    padding: 15px;
    border-radius: 10px;
    background-color: black;
    color: #ddd;
    font-size: 10px;
    margin: 10px 0 15px 20px;
    cursor: pointer;
}
.box2 > a > button{ background-color: #32C969;}
.box1 > a > button:hover, .box2 > a > button:hover{
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #ddd;
    color: black;
}
.box1 a, .box2 a{display: block; text-align: left;}
/* .box2{background-color: #D5F9E1;} */
@media (max-width: 768px) {
    .home-card{
        display: block;
        margin: 20px 5px 0 5px;
    }
}
</style>