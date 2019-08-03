//first thing we need to do is require mongoose

let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  /* Name and a password */
  name: String,
  password: String,

  /*User owns posts*/
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]

});

//export and reference the name of the model to the schema
module.exports = mongoose.model("User", userSchema);
