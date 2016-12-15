// grab the things we need
var mongoose = require('mongoose');

// let's define some models to use
var Schema = mongoose.Schema;

// create a schema
var mediaSchema = new Schema({
	title: String,
	data: String, //base64 URL encoded string of the image

	owner: { type: Schema.Types.ObjectId, ref: 'User'},
	created_at: Date,
	updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Media = mongoose.model('Media', mediaSchema);

// make this available to our users in our Node applications
module.exports = Media;


