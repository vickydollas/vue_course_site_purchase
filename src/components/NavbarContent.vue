<template>
  <nav class="nav-bar">
    <div class="nav1">
      <img :src="logo" class="nav-img">
      <a href="">Vue Jobs</a>
    </div>
    <button @click="toggleMenu" class="hamburger-button">
        <span v-if="dropdown" class="close-icon">✕</span>
        <span v-else class="open-icon">☰</span>
    </button>
    
    <ul class="nav2">
      <li><router-link to="/" :class="[{ 'active-status' : isActive('/')}, 'closed-status']">Home</router-link></li>
      <li><router-link to="/jobs" >Jobs</router-link></li>
      <li><router-link to="/add-jobs">Add jobs</router-link></li>
    </ul>
  </nav>
  <ul v-if="dropdown" class="dropdown">
      <li><router-link to="/" @click="closeMenu" >Home</router-link></li>
      <li><router-link to="/jobs" @click="closeMenu" >Jobs</router-link></li>
      <li><router-link to="/add-jobs" @click="closeMenu">Add jobs</router-link></li>
    </ul>

</template>

<script setup>
import logo from '../assets/logo.png'
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
const dropdown = ref(false) // this is the state of the hamburger
// const dropdownRef = ref(null)
const toggleMenu = () => { // this func handles the toggle from false to true
  dropdown.value = !dropdown.value
}
onMounted(() => {
  // document.addEventListener('keydown', handleKeyButton)
  document.addEventListener('click', handleOutsideClick)
})
// const handleKeyButton = (event) => {
//   if(event.key === 'Escape'){
//       closeMenu()
//     }
// }
const handleOutsideClick = () => {
  if(dropdown.value){
      closeMenu()
      console.log('hi')
    }
}
const closeMenu = () => { dropdown.value = false} // this handles the closing of the hamburger after being clicked.
const isActive = (routePath) => {
  return route.path === routePath
}

</script>

<style scoped>

.dropdown{
    height: 90vh;
    position: fixed;
    background-color: #ffffff;
    padding: 10px;
    margin: 70px 5px 0 0;
    top: 0;
    width: 40%;
    right: 0;
    z-index: 9999;
    border-radius: 20px;
    transition: transform 2s ease-out;
}
.dropdown li{
  list-style: none;
  font-size: 20px;
  padding: 15px 0;
  margin: 20px 0;
  color: #ddd;
  box-shadow: 0 0 0 1px #147234;
  border-radius: 10px;
  cursor: pointer;
}
.dropdown li:hover{
  background-color: #147234;
}
.dropdown a{
  text-decoration: none;
}
body{
  margin: 0;
  padding: 0;
  /* width: 100%; */
}
.hamburger-button{
  display: none;
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
  height: 60px;
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
  font-size: 23px;
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
  color: #147234;
  background-color: #ddd;
  text-decoration: none;
  padding: 12px;
  border-radius: 15px;
  font-size: 15px;
}
.nav2 a:hover{
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #ddd;
  background-color: #147234;
}
.active-status{
  background-color: red;
}
.closed-status{
  background-color: yellow;
}
@media (max-width: 768px) {
  .nav2{
    display: none;
  }
  .hamburger-button{
  display: block;
  font-size: 15px;
  margin: 0 20px 0 0;
  }
  .dropdown li{
    font-size: 8px;
  }
  .dropdown{
    overflow-y: auto;
  }
}
</style>