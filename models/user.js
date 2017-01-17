// grab the things we need
var mongoose = require('mongoose');

// let's define some models to use
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String,

  created_at: Date,
  updated_at: Date,

  profile_picture: String,
  media: [{ type: Schema.Types.ObjectId, ref: 'Media'}],

  favorites: [{ type: Schema.Types.ObjectId, ref: 'Promotion' }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Promotion' }],

  //global admin, rare
  admin: Boolean,
  organizations: [{ type: Schema.Types.ObjectId, ref: 'Organization'}]

});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;


