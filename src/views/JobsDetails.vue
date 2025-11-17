<script setup>
import axios from 'axios'
import { reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const route = useRoute()
const router = useRouter()
const toast = useToast()

const jobId = route.params.id 
const state = reactive({
    jobs: null,
    isLoading: true
})
const jobData = computed(() => state.jobs)
const deleteJobs = async () =>{
    try {
        await axios.delete(`/api/jobs/${jobId}`)
        toast.success('Jobs successfully delet')
        router.push('/jobs/')
    } catch (error) {
        console.log('Jobs not successfully deleted', error)
        toast.error('Error, jobs not deleted')
    }
}
onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:4000/jobs/${jobId}`)
        if(!response){
            throw new Error('Page not loading')
        }
        state.jobs = await response.data    
    } catch (error) {
        console.log('error loading, try again', error)
    }
    finally{
        state.isLoading = false
    }
})
</script>

<template>
    <div v-if="jobData" class="jobfull">
        <div class="jobfull-1">
            <div class="job-description1">
                <h3>{{ state.jobs.type }}</h3>
                <h1>{{ state.jobs.title }}</h1>
                <i>{{ state.jobs.location }}</i>
            </div>
            <div class="job-description2">
                <h2>Job Description</h2>
                <p>{{ state.jobs.description }}</p>
                <h2>Salary</h2>
                <h4>{{ state.jobs.salary }}</h4>
            </div>
        </div>
        <div class="jobfull-2">
            <div class="job-description3">
                <h3>Company info</h3>
                <h2>{{ state.jobs.company.name }}</h2>
                <p>
                    NewTek Solutions is a leading technology company speecializing in web development 
                    and digital solutions. We pride ourselves on delivering high-quality products and 
                    services to our client while fostering a collaborative and innovative work environment. 
                </p>
                <h5>Contact Email:</h5>
                <i>{{ state.jobs.company.contactEmail }}</i>
                <h5>Contact Phone:</h5>
                <i>{{ state.jobs.company.contactPhone }}</i>
            </div>
            <div class="job-description4">
                <h3>Manage Job</h3>
                <button class="btn-1-color">Edit Job</button>
                <button @click="deleteJobs" class="btn-2-color">Delete Job</button>
            </div>
        </div>
    </div>
</template>
<style>
.jobfull{
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    background-color: #EBFDF0;
}
.jobfull > div{

}
.jobfull-1, .jobfull-2{
    display: flex;
    flex-direction: column;
    gap: 20px;  
}
.job-description1, .job-description2{
    background-color: #FFFFFF;
    margin: 30px;
    border-radius: 20px;
}
.job-description1 h3, .job-description1 h1{
    text-align: left;
    padding: 10px;
}
.job-description1 h1{ font-weight: 3000; font-size: 30px;}
.job-description1 h3{ font-weight: 400; font-size: 14px;}
.job-description1 i{
    display: block;
    padding: 10px;
    text-align: left;
    color: red;
}
.job-description2 h2, .job-description2 p, .job-description2 h4{
    text-align: left;
    padding: 15px;
}
.job-description2 h2{ color: #5C866F; font-weight: 1000;}
.job-description2 p{ font-weight: 700; font-size: 14px;}
.job-description2 h4{ font-weight: 800; font-size: 10px;}

/* .jobfull-2 */

/* .jobfull-2{ margin-right: 40px;} */
.job-description3, .job-description4{
    background-color: #FFFFFF;
    margin: 30px;
    border-radius: 20px;
}
.job-description3 h2, .job-description3 h3, .job-description3 h5, .job-description3 p, .job-description3 i{
    text-align: left;
    padding: 15px;
}
.job-description3 p { font-size: 14px; font-weight: 600; line-height: 30px;}
.job-description3 h3{ font-size: 20px; font-weight: 800;}
.job-description3 h2{ font-size: 27px; font-weight: 500;}
.job-description3 h5{ font-size: 20px; font-weight: 600;}
.job-description3 i{ display: block; font-style: normal; font-size: 14px; font-weight: 800; background-color: #D5F9E1; margin: 20px;}

/* .job-description4 */

.job-description4 h3{
    text-align: left;
    font-size: 20px;
    font-weight: 800;
    padding: 15px;
}
.job-description4 button{
    font-size: 13px;
    color: #FFFFFF;
    font-weight: 600;
    padding: 15px;
    display: block;
    margin: 20px auto;
    width: 80%;
    border-radius: 20px;
}
.btn-1-color{ background-color: #1EBF51;} .btn-1-color:hover{
    cursor: pointer;
    background-color: #EBFDF0;
    color: #1EBF51;
    transition: transform 1.8s ease-in-out;
}
.btn-2-color{ background-color: #EA3A39;} .btn-2-color:hover{
    cursor: pointer;
    color: #EA3A39;
    background-color: #EBFDF0;
    transition: transform 1.8s ease-in-out
}
@media (max-width: 768px) {
    .jobfull{
        display: block;
    }
}
</style>