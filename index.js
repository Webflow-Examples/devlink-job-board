const PORT = 8000;
const express = require("express");
const cors = require("cors");
const apicache = require("apicache");
require("dotenv").config();
const app = express();
let cache = apicache.middleware;
app.use(cors());
app.use(cache("5 minutes"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/jobs", (req, res) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.JOBS_KEY}`,
    },
  };
  fetch(
    `https://api.airtable.com/v0/appWq0aT7C7M3apm8/Jobs?maxRecords=3&view=Grid%20view`,
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

app.get(`/job/:id`, (req, res) => {
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
