<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="not-found">
        <img src="" alt="">
        <h1>404 Not Found</h1>
        <p>This page does not exist</p>
        <router-link to="/" class="go-back">Go back</router-link>
    </div>
</template>

<style>
.not-found h1{
    margin: 40px 0 0 0;
    font-size: 80px;
}
.not-found p{
    font-size: 30px;
}
.go-back{
    text-decoration: none;
    background-color: #22C55E;
    padding: 20px;
    border-radius: 20px;
    color: #ddd;
    margin: 20px auto;
    display: block;
    width: 20%;
}
</style>