// Vercel Serverless Function: GET /api/jobs
// Returns the full list of jobs.

// NOTE: Path assumes jobs2.json is in the /api/ folder.
const jobsData = require('../../jobs2.json'); 

module.exports = (req, res) => {
    if (req.method === 'GET') {
        
        // Extract the array of jobs, handling if it's wrapped in a 'jobs' key
        const allJobs = Array.isArray(jobsData) ? jobsData : jobsData.jobs;

        // Success: Return the job list
        res.status(200).json(allJobs);

    } else {
        // Method Not Allowed
        res.status(405).send({ message: `Method ${req.method} not allowed on /api/jobs.` });
    }
};