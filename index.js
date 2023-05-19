// Backend server for the job board
// use `npm run backend` or `yarn backend` to start the server
// Global variables and imports
const PORT = 8000;
const express = require("express");
const cors = require("cors");
const apicache = require("apicache");
require("dotenv").config();
const app = express();
let cache = apicache.middleware;
app.use(cors());

// Uncomment the line below to use
// the cache which is set to 5 minutes
//app.use(cache("5 minutes"));

// Console log the PORT when server starts
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// GET request for all jobs
// http://localhost:8000/jobs
app.get("/jobs", (req, res) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.JOBS_KEY}`,
    },
  };
  fetch(
    `https://api.airtable.com/v0/appWq0aT7C7M3apm8/Jobs?view=Grid%20view`,
    options
  )
    .then((response) => response.json())
    .then((usefulData) => {
      res.json(usefulData);
    })
    .catch((e) => {
      console.error(`An error occurred: ${e}`);
    });
});

// GET request for all jobs
// http://localhost:8000/jobs/featured
app.get("/jobs/featured", (req, res) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.JOBS_KEY}`,
    },
  };
  fetch(
    `https://api.airtable.com/v0/appWq0aT7C7M3apm8/Jobs?view=Featured`,
    options
  )
    .then((response) => response.json())
    .then((usefulData) => {
      res.json(usefulData);
    })
    .catch((e) => {
      console.error(`An error occurred: ${e}`);
    });
});

// GET request for a single job
// http://localhost:8000/job/:id
app.get(`/jobs/:id`, (req, res) => {
  const id = req.params.id;
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.JOBS_KEY}`,
    },
  };
  fetch(`https://api.airtable.com/v0/appWq0aT7C7M3apm8/Jobs/${id}`, options)
    .then((response) => response.json())
    .then((usefulData) => {
      res.json(usefulData);
    })
    .catch((e) => {
      console.error(`An error occurred: ${e}`);
    });
});
