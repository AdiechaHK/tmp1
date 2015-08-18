							
var mongoose = require('mongoose');

var yelpSchema = mongoose.Schema({
	Name: String,
	AttendingCount: String,
	Category: String,
	City: String,
	Address: String,
	PostalCode: String,
	TicketCost: String,
	YelpUrl: String,
	YelpLocationUrl: String,
	WebsiteUrl: String,
	StartDate: Date,
	EndDate: Date,
	ImageUrl: String,
	Latitude: Number,
	Longitude: Number,
	Description: String
});

var yelp = mongoose.model('yelp',yelpSchema);

module.exports = yelp;



							