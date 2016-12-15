// grab the things we need
var mongoose = require('mongoose');

// let's define some models to use
var Schema = mongoose.Schema;

// create a schema
var promotionSchema = new Schema({
	title: String,
	text: String,
	media: [{ type: Schema.Types.ObjectId, ref: 'Media'}],


	created_at: Date,
	updated_at: Date,

	organization: { type: Schema.Types.ObjectId, ref: 'Organization'}
});

// the schema is useless so far
// we need to create a model using it
var Promotion = mongoose.model('Promotion', promotionSchema);

// make this available to our users in our Node applications
module.exports = Promotion;


