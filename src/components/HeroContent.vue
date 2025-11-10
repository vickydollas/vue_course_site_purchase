<template>
  <div class="hero">
    <h1>{{ detail }}</h1>
    <p>{{ about }}</p>
  </div>
</template>

<script setup>
import { defineProps } from'vue'

defineProps({
    detail: {
        type: String,
        default: 'Become a Vue Dev'
    },
    about: {
        type: String,
        default: 'Find the Vue job that fits your skills and needs'
    }
})

</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.hero{
  background-color: #147234;
  min-height: 27vh;
  align-content: center;
}
.hero h1{
  color: white;
  font-size: 60px;
  padding-bottom: 30px;
}
.hero p{
  color: white;
  font-size: 20px;
}
@media (max-width: 768px) {
  .hero h1{
    font-size: 37px;
    padding: 5px;
  }
}
</style>