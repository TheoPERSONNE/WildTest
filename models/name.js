const mongoose = require('mongoose');

const name = mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model('Name', name);
