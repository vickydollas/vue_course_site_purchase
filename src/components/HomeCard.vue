<template>
  <div class="home-card">
    <CardContent bg="box1">
        <h1>For Developers</h1>
        <p>Browse our view jobs and start your career today</p>
        <a href=""><button>Browse jobs</button></a>
    </CardContent>
    <CardContent bg="box2">
        <h1>For Employers</h1>
        <p>List your job to find the perfect developer for the role</p>
        <a href=""><button>Browse jobs</button></a>
     </CardContent>
  </div>
</template>

<script setup>
import CardContent from "./CardContent.vue";
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
    width: 45%;
    min-height: 22vh;
}
.box2{
    background-color: #D5F9E1;
    border-radius: 20px;
    width: 45%;
    min-height: 22vh;
}
.box1 h1, .box2 h1{ font-size: 45px; text-align: left; margin: 20px;}
.box1 p, .box2 p{font-size: 22px; margin: 20px; text-align: left;}
.box1 > a > button, .box2 > a > button{
    width: 15%; 
    height: 75px;
    border-radius: 10px;
    background-color: black;
    color: #ddd;
    font-size: 20px;
    margin: 10px 0 15px 20px;
    cursor: pointer;
}
.box1 > a > button:hover, .box2 > a > button:hover{
    transform: scale(1.05); /* Scales up by 5% */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #ddd;
    color: black;
}
.box1 a, .box2 a{display: block; text-align: left;}
/* .box2{background-color: #D5F9E1;} */
</style>