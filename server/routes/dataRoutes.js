const express = require('express');
const router = express.Router();
const Data = require('../models/data');

// Fetch data from MongoDB
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Store data in MongoDB
router.post('/', async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: 'Error saving data' });
  }
});

module.exports = router;
