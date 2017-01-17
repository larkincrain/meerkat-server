// grab the things we need
var mongoose = require('mongoose');

// let's define some models to use
var Schema = mongoose.Schema;

// create a schema
var organizationSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  location: String,
  created_at: Date,
  updated_at: Date,
  media: [{type: Schema.Types.ObjectId, ref: 'Media'}],
  profile_picture: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

// the schema is useless so far
// we need to create a model using it
var Organization = mongoose.model('Organization', organizationSchema);

// make this available to our users in our Node applications
module.exports = Organization;


