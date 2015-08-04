var mongoose = require('mongoose');

var mapinfoSchema = mongoose.Schema({
	latitude:Number,
	longitude:Number,
	title:String,
	info:String,
	imageId:String,
	imagecount:Number,
	date:Date,
	startDate:Date,
	endDate:Date
});

var mapinfo = mongoose.model('mapinfo',mapinfoSchema);

module.exports = mapinfo;