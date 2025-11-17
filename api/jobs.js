// api/jobs.js - This code runs on Vercel's server when requested

// 1. Load the JSON file into memory. Vercel's environment supports 'require'.
const jobsData = require('./jobs2.json');

// 2. Define the handler function that Vercel calls.
// Vercel passes the request (req) and response (res) objects.
module.exports = (req, res) => {
  // Set the HTTP status code to 200 (Success)
  res.status(200);

  // Set the Content-Type header to tell the browser it's a JSON response
  res.setHeader('Content-Type', 'application/json');

  // Send the actual JSON data back to the user
  res.send(jobsData);
};