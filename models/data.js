const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  cases: {
    type: Number,
    required: true,
  },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
