const mongoose = require('mongoose');
const { Course, Student } = require('./schema');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/courseDB')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
