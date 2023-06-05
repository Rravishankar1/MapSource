const axios = require('axios');
const mongoose = require('mongoose');
const Data = require('../models/data');

axios.get('pseudo-montgomery-end.point')
  .then(response => {
    const data = response.data;

    processData(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


function processData(data) {

  const newData = new Data({
    date: data.date,
    location: data.location,
    cases: data.cases,
  });

  // Store in MongoDB
  newData.save()
    .then(() => {
      console.log('Data saved successfully');
    })
    .catch(error => {
      console.error('Error saving data:', error);
    })
    .finally(() => {
      mongoose.disconnect(); // Disconnect from MongoDB
    });
}
