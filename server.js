var express  = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser')
    config = require('./config.js'),
	morgan = require('morgan');


var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(morgan('dev')); // LOGGER

// Connect to the hosted mongo DB instance
mongoose.connect( config.database.connectionURI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

// lets load the models
var User = require('./models/user');
 
// routes
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/users', function(req, res){

	//let's display all the users
	User.find({}, function(err, users) {
		if (err) throw err;

		// object of all the users
		console.log(users);

		//return the array in json form
		res.json(users);
	});
});

// register the routes to the /api directory
server.use('/api', router);

server.listen(config.port || 9804, function () {
    console.log("Server started @ ", config.port || 9804);
});

