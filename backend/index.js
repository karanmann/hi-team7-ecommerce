'use strict';
import express from "express";
import "dotenv/config";
import {netflixData}  from './data/netflix-titles.js';

const app = express();
const PORT = 3001;

app.get('/', (req,res) => {
  res.json(netflixData);
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
