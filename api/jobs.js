
// const jobsData = require('./jobs2.json');


// module.exports = (req, res) => {
//   res.status(200);

//   res.setHeader('Content-Type', 'application/json');

//   res.send(jobsData);
// };
// api/jobs/[id].js

const jobsData = require('./jobs2.json'); // Import the full data set

module.exports = (req, res) => {
    const jobId = parseInt(req.query.id); // Get the ID from the URL and convert to a number
    
    // --- Shared Logic for GET and DELETE ---
    if (req.method === 'DELETE') {
        // ... (existing DELETE logic remains here, returning 204)
        console.log(`Simulating deletion of job ID: ${jobId}`);
        res.status(204).send();
        
    } else if (req.method === 'GET') {
        // --- Single Job Fetch Logic ---
        
        // 1. Find the job in the array (assuming your jobs2.json is an array or has a jobs array)
        const allJobs = Array.isArray(jobsData) ? jobsData : jobsData.jobs;
        const job = allJobs.find(j => j.id === jobId); 
        
        if (job) {
            // 2. Return the found job data
            res.status(200).json(job);
        } else {
            // 3. If job is not found
            res.status(404).send({ message: `Job with ID ${jobId} not found.` });
        }
        
    } else {
        // Handle unsupported methods
        res.status(405).send(`Method ${req.method} not allowed.`);
    }
};