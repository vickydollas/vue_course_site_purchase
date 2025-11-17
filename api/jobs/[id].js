// Vercel Serverless Function: GET/DELETE /api/jobs/:id
// Handles fetching a single job or simulating deletion.

// NOTE: Path assumes jobs2.json is in the /api/ folder.
const jobsData = require('../../jobs2.json');

module.exports = (req, res) => {
    // Vercel automatically extracts the ID
    const jobId = parseInt(req.query.id); 
    
    // Extract the array of jobs
    const allJobs = Array.isArray(jobsData) ? jobsData : jobsData.jobs;

    if (req.method === 'DELETE') {
        // --- DELETE Logic Simulation ---
        
        // Since we are using a static JSON file, we only send a success signal.
        console.log(`Simulating successful deletion of job ID: ${jobId}`);
        
        // 204 No Content is standard for a successful deletion
        res.status(204).send();
        
    } else if (req.method === 'GET') {
        // --- GET Single Job Logic ---
        
        // Find the job in the static array by its ID
        const job = allJobs.find(j => j.id === jobId); 
        
        if (job) {
            // Found: Return the single job object
            res.status(200).json(job);
        } else {
            // Not Found: Return 404 status
            res.status(404).send({ message: `Job with ID ${jobId} not found.` });
        }
        
    } else {
        // Handle unsupported methods
        res.status(405).send(`Method ${req.method} not allowed on this route.`);
    }
};