<script setup>

</script>

<template>
    <div class="jobfull">
        <div class="jobfull-1">
            <div class="job-description1">
                <h3>Full - Time</h3>
                <h1>Senior Vue Developer</h1>
                <i>Boston, MA</i>
            </div>
            <div class="job-description2">
                <h2>Job Description</h2>
                <p>We are seeking a talented Front-End Develope to join our team in Boston, MA. 
                    The idea candidate will have strong skills in HTML, CSS and Javascript with experience 
                    working with nodern Javascript frameworks such as Vue and Angular
                </p>
                <h2>Salary</h2>
                <h4>$70k - $80k / year</h4>
            </div>
        </div>
        <div class="jobfull-2">
            <div class="job-description3">
                <h3>Company info</h3>
                <h2>NewTek Solutions</h2>
                <p>
                    NewTek Solutions is a leading technology company speecializing in web development 
                    and digital solutions. We pride ourselves on delivering high-quality products and 
                    services to our client while fostering a collaborative and innovative work environment. 
                </p>
                <h5>Contact Email:</h5>
                <i>contact@gmail.com</i>
                <h5>Contact Phone:</h5>
                <i>555-555-5555</i>
            </div>
            <div class="job-description4">
                <h3>Manage Job</h3>
                <button class="btn-1-color">Edit Job</button>
                <button class="btn-2-color">Delete Job</button>
            </div>
        </div>
    </div>
</template>
<style>
.jobfull{
    display: grid;
    grid-template-columns: 70% 30%;
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
.job-description1 h1{ font-weight: 3000; font-size: 45px;}
.job-description1 h3{ font-weight: 400; font-size: 20;}
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
.job-description2 p{ font-weight: 700; font-size: 18px;}
.job-description2 h4{ font-weight: 800;}

/* .jobfull-2 */

.jobfull-2{ margin-right: 40px;}
.job-description3, .job-description4{
    background-color: #FFFFFF;
    margin: 30px;
    border-radius: 20px;
}
.job-description3 h2, .job-description3 h3, .job-description3 h5, .job-description3 p, .job-description3 i{
    text-align: left;
    padding: 15px;
}
.job-description3 p { font-size: 20px; font-weight: 600; line-height: 30px;}
.job-description3 h3{ font-size: 26px; font-weight: 800;}
.job-description3 h2{ font-size: 35px; font-weight: 500;}
.job-description3 h5{ font-size: 30px; font-weight: 600;}
.job-description3 i{ display: block; font-style: normal; font-size: 20px; font-weight: 800; background-color: #D5F9E1; margin: 20px;}

/* .job-description4 */

.job-description4 h3{
    text-align: left;
    font-size: 27px;
    font-weight: 800;
    padding: 15px;
}
.job-description4 button{
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 600;
    padding: 20px;
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
</style>