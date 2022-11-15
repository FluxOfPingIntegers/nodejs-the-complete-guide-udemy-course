const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  staus: {
    type: String,
    default: 'I am new!',
  },
  posts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Post'
    }
  ],
});

module.exports = mongoose.model('User', userSchema);