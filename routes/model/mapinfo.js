var mongoose = require('mongoose');

var mapinfoSchema = mongoose.Schema({
	Latitude:Number,
	Longitude:Number,
	Name:String,
	Description:String,
	ImageUrl:String,
	date:Date,
	StartDate:Date,
	EndDate:Date
});

var mapinfo = mongoose.model('mapinfo',mapinfoSchema);

module.exports = mapinfo;