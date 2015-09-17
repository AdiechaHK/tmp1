							
var mongoose = require('mongoose');

var meetupSchema = mongoose.Schema({
	Name: String,
	EventID: String,
	Source: String,
	StartDate: Date,
	EndDate: Date,
	AttendingCount: String,
	FeeAmount: String,
	FeeCurrency: String,
	MeetupUrl: String,
	MeetupGroupUrl: String,
	ImageUrl: String,
	Address: String,
	Address2: String,
	Address3: String,
	City: String,
	State: String,
	Country: String,
	Latitude: Number,
	Longitude: Number,
	PostalCode: String,
	VenueID: String,
	VenueName: String,
	CategoryID: String,
	CategoryName: String,
	Description: String
});

var meetup = mongoose.model('meetup',meetupSchema);

module.exports = meetup;

