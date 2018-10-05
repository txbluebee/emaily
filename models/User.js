const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
})
// by using this mongoose model command we are telling mongoose 
// that we want to create a new collection called users.
mongoose.model('users', userSchema);