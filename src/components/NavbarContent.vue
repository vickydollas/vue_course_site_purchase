<template>
  <nav class="nav-bar">
    <div class="nav1">
      <img :src="logo" class="nav-img">
      <a href="">Vue Jobs</a>
    </div>
    <ul class="nav2">
      <li><a href="">Home</a></li>
      <li><a href="">Jobs</a></li>
      <li><a href="">Add jobs</a></li>
    </ul>
  </nav>

</template>

<script setup>
import logo from '../assets/logo.png'
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.nav-bar{
  background-color: #147234;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}
.nav-img{
  background-color: white;
  width: auto;
  height: 70px;
  border-radius: 50px;
  margin: auto;
}
.nav1{
  display: flex;
  gap: 20px;
  margin: 20px 0 0 50px;
}
.nav1 a{
  color: white;
  font-size: 30px;
  text-decoration: none;
  align-items: center;
  padding: 25px;
}
.nav2{
  display: flex;
  gap: 25px;
  list-style: none;
  font-size: 25px;
  margin: 20px 50px 0 0;
}
.nav2 a{
  text-decoration: none;
  color: white;
  font-size: 25px;
}
</style>