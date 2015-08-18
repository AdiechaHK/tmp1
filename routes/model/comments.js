var mongoose = require('mongoose');

var commentsSchema = mongoose.Schema({
	imageId:String,
	username:String,
	date:Date,
	comment:String
});

var comments = mongoose.model('comments',commentsSchema);

module.exports = comments;