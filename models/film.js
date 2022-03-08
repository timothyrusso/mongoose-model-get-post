const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  genre: {
    type: String,
    enum: ['comedy', 'drama', 'action', 'thriller', 'documentary'],
    required: true
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'director',
    required: true
  },
});

module.exports = mongoose.model('film', filmSchema);