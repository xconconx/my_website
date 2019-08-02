
//first thing we need to do is require mongoose

let mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

  title: String,
  content: String,
  
  /*We can have a date field that automatically captures the current date*/
  date: {type: Date, default: Date.now},

});

//export and reference the name of the model to the schema
module.exports = mongoose.model("Post", postSchema);
