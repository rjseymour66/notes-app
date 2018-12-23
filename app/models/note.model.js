const mongoose = require('mongoose')

// Create schema
const NoteSchema = mongoose.Schema({
  title: String,
  content: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);