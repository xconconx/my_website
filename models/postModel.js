
//first thing we need to do is require mongoose

let mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

  /* ID for this object */
  _id: Schema.Types.ObjectId,
  title: String,
  content: String,
  
  /*We can have a date field that automatically captures the current date*/
  date: {type: Date, default: Date.now},

  /*For every post we can have a list of comments associated with that account */
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

  comments: [{body: "string", by: mongoose.Schema.Types.ObjectId}],

});

//export and reference the name of the model to the schema
module.exports = mongoose.model("Post", postSchema);
