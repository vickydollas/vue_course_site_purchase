<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useToast } from 'vue-toastification'

const isLoading = ref(true)
const details = reactive({
    title: '',
    type: '',
    description: '',
    location: '',
    salary: '',
    company: {
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: ''
    }
})
const toast = useToast()
// const jobDatas = computed(() => states.jobs)
async function submitForm() {
     try {
        const response = await axios.post('http://localhost:4000/jobs', details)
        toast.success('Job successfully added')
        response.data.id
        router.push(`/jobs/`)
    } catch (error) {
        console.log('error loading, try again', error.message)
        toast.error('job not added')
    }
    finally{
        isLoading.value = false
    }
}

</script>

<template>
<div>
    <!-- <p>{{ states.jobs }}</p> -->
    <form @submit.prevent="submitForm">
        <div>
            <label>Title</label>
            <input type="text" v-model="details.title">
        </div>
        <div>
            <label>Type</label>
            <select v-model="details.type" name="" id="" >
                <option value="">Select type</option>
                <option value="FullTime">FullTime</option>
                <option value="PartTime">Parttime</option>
                <option value="Hybrid">Hybrid</option>
            </select>
        </div>
        <div>
            <label>Desccription</label>
            <input type="text" class="description" v-model="details.description" name="" id="">
        </div>
        <div>
            <label>Location</label>
            <input type="text" v-model="details.location" name="" id="">
        </div>
        <div>
            <label>Salary</label>
            <input type="text" v-model="details.salary" name="" id="">
        </div>
        <div>
            <label>Company name</label>
            <input type="text" v-model="details.company.name" name="" id="">
        </div>
        <div>
            <label>Company Email</label>
            <input type="email" v-model="details.company.contactEmail" name="" id="" required   >
        </div>
        <div>
            <label>Contact Phone</label>
            <input type="number" v-model="details.company.contactPhone" name="" id="">
        </div>
        <button type="submit" class="submit">Submit</button>
    </form>
</div>    
</template>

<style>
form {
  font-family: Arial, sans-serif;
  min-height: 500px;
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
  float: left;
  margin-top: 10px;
}
input, select{
    width: 100%;
    min-height: 40px;
    margin-right: 10px;
    padding-left: 13px;
    /* border: none; */
    background-color: #eefdf3;
    border-radius: 10px;
    border-width: 0;
}
.description{
   min-height: 100px;
}
.skills > input{
    display: block;
    padding-left: 20px;
}
input[type="radio"]{
    display: block;
    color: red;
    width: 25px;
    min-height: 40px;
}
.submit{
    padding: 10px;
    border-radius: 5px;
    border-width: 0;
    margin-top: 10px;
    background-color: #D5F9E1;
}
.submit:hover{
    cursor: pointer;
    transform: scale(1.2);
    background-color: #bdfbd1;
}
</style>