// grab the things we need
var mongoose = require('mongoose');

// let's define some models to use
var Schema = mongoose.Schema;

// create a schema
var beaconSchema = new Schema({
	name: String,
	description: String,
	broadcastId: String,
	createDate: Date,
	active: Number,			//0 is inactive, 1 is active

	organization: { type: Schema.Types.ObjectId, ref: 'Organization'},
	promotion: { type: Schema.Types.ObjectId, ref: 'Promotion'}

});

// the schema is useless so far
// we need to create a model using it
var Beacon = mongoose.model('Beacon', beaconSchema);

// make this available to our users in our Node applications
module.exports = Beacon;


