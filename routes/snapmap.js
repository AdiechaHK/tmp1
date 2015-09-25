var express = require('express');
var router = express.Router();
var fs = require('fs');
var async = require('async');
var mapinfo = require(__dirname+'/model/mapinfo');
var meetup = require(__dirname+'/model/meetup');
var yelp = require(__dirname+'/model/yelp');


/* GET home page. */

var mapObj = function(lat,lon,title,info,imgId,startDate,endDate,id) {
	this.Latitude = lat;
	this.Longitude=lon;
	this.Name=title;
	this.Description=info;
	this.ImageUrl=imgId;
	this.StartDate=startDate;
	this.EndDate = endDate;
	this.Id = id;
}


router.get('/', function(req, res) {
var mapData =[];
	mapinfo.find({}).exec(function(err,doc){
		if(err)
			console.log(err);
		else {
			// console.log('data: '+doc[0]);
			for(var j=0; j < doc.length; j++)
				mapData.push(new mapObj(doc[j].Latitude,doc[j].Longitude,doc[j].Name,doc[j].Description,doc[j].ImageUrl, doc[j].StartDate,doc[j].EndDate,doc[j]._id));
			meetup.find().exec(function(err,rec){
					// meetupData.each(function(err,rec){
					if(err)
						console.log(err);
					else 
					for(var i=0; i<rec.length; i++) {
						if(rec !=null) 
							mapData.push(new mapObj(rec[i].Latitude,rec[i].Longitude,rec[i].Name,rec[i].Description,rec[i].ImageUrl,rec[i].StartDate,rec[i].EndDate,rec[i]._id))
						}
					
					yelp.find().exec(function(err,rec){
						if(err)
							console.log('Error at Yelp retrieve: '+err);
						else {
							// console.log('First: '+rec[0]);
							for(var i=0; i<rec.length; i++) {
								if(rec !=null) 
									mapData.push(new mapObj(rec[i].Latitude,rec[i].Longitude,rec[i].Name,rec[i].Description,rec[i].ImageUrl,rec[i].StartDate,rec[i].EndDate,rec[i]._id))
							}
						}
						console.log("Total records: "+mapData.length);
						// console.log('First Record: '+mapData[0].Latitude);
						res.render('map', { title:'Map information', jsfile:'mapinfo', mapData:mapData});
				});
					
			});
		}
			
	});
 
});

router.get('/map', function(req, res) {
	res.render('mapinfo', { title:'Map information', jsfile:'mapinfo'});
	
});


function getDate(dt) {
	var d = new Date(dt);
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];

	return d.getDate()+'-'+n+'-'+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes()

}

var obj = function(imageId,dt,sd,ed,title,info,id,lat,lon){
	this.ImageUrl = imageId;
	this.date=dt;
	this.StartDate = sd;
	this.EndDate = ed;
	this.Name = title;
	this.Description = info;
	this.id=id;
	this.Latitude=lat;
	this.Longitude=lon;
}
router.post('/location',function(req,res){
	var marker = JSON.parse(req.body.markObj);
	console.log('Markers leng: ');
	console.log(req.body.markObj)
	var i=0;
	var maxlen = marker.length;
	console.log('obj Length: '+maxlen);
	var recordArray=[];

	async.each(marker,function(pos,cb){
		var actRecords=[];
		getYelpData(pos,actRecords,function(err,yelpResult){
		getMeetupData(pos,yelpResult,function(err,meetupResult){
			getMapInfoData(pos,meetupResult,function(err,finalResult){
				if(err)
					console.log("Mapinfo Error: "+err);
					cb(null,recordArray.push(finalResult));
				})
			})
		})
	},function(err){
		if(err)
			console.log('Error:: '+err)
		console.log('Finished::: ');
		var pastrecords=[],
			presentrecords=[],
			futurerecords=[],
			record=[];
			var cDate = new Date().getTime();
		console.log('Records:: '+recordArray[0].length)
		for(var j=0; j<recordArray.length; j++)
			for(var i=0; i<recordArray[j].length; i++) {
				if(new Date(recordArray[j][i].EndDate).getTime() < cDate)
					pastrecords.push(recordArray[j][i]);
				else if(new Date(recordArray[j][i].StartDate).getTime() < cDate && new Date(recordArray[j][i].EndDate).getTime() > cDate)
					presentrecords.push(recordArray[j][i]);
				else 
					futurerecords.push(recordArray[j][i]);
			}		
			console.log('Past record:: '+pastrecords.length);
			console.log('present record:: '+presentrecords.length);
			console.log('Future record:: '+futurerecords.length);
			record.push(pastrecords);
			record.push(presentrecords);
			record.push(futurerecords);				
			console.log("sendingRecord: "+record.length);
				res.send(record);
		
		// console.log(recordArray[0].length)
	});
	
}) 

var getMeetupData = function(pos,actRecords,cb) {
	meetup.find({'Latitude': Number(pos.Latitude), 'Longitude': Number(pos.Longitude)}).sort({startDate:1}).exec(function(err,doc){
					if(err)
						console.log(err)
	console.log('Actual Records from Meetup: '+doc.length)
					cb(null,formatDbData(doc,actRecords))						
	});
}

var getMapInfoData = function(pos,actRecords,cb) {
	mapinfo.find({'Latitude': Number(pos.Latitude), 'Longitude': Number(pos.Longitude)}).sort({startDate:1}).exec(function(err,doc){
					if(err)
						console.log(err)
		console.log('Actual Records from mapInfo: '+doc.length)
					cb(null,formatDbData(doc,actRecords))						
	});
}

var getYelpData = function(pos,actRecords,cb) {
	yelp.find({'Latitude': Number(pos.Latitude), 'Longitude': Number(pos.Longitude)}).sort({startDate:1}).exec(function(err,doc){
					if(err)
						console.log(err)
	console.log('Actual Records from yelp: '+doc.length)
	cb(null,formatDbData(doc,actRecords))						
	});
}


function formatDbData(doc,actRecords){

	for(var i=0; i<doc.length;i++) {
			if(doc[i].EndDate==null)
				doc[i].EndDate = doc[i].StartDate+21600000;
			if(doc[i].ImageUrl==null)
				doc[i].ImageUrl = 'https://wishpool.one/images/SNAP2.png';
			else if(doc[i].ImageUrl.indexOf("http:")!=-1)
				doc[i].ImageUrl = doc[i].ImageUrl.replace("http:", "")
			if(doc[i].Description==null)
				doc[i].Description='No Description available';
			
			actRecords.push(new obj(doc[i].ImageUrl,getDate(new Date()),getDate(doc[i].StartDate),getDate(doc[i].EndDate),doc[i].Name,doc[i].Description,doc[i]._id,doc[i].Latitude,doc[i].Longitude))				
		}
			return actRecords;
}


router.get('/location/:lat/:lng',function(req,res){
	console.log(req.params.lat+" , "+req.params.lng);
	var cDate = new Date().getTime();
	//console.log('Current Date: '+cDate)
	var pastrecords=[],
		presentrecords=[],
		futurerecords=[],
		// actRecords=[],
		record=[];
		console.log(req.body);
		async.waterfall([
			function(cb){
				var actRecords=[];
				meetup.find({'Latitude': req.params.lat, 'Longitude': req.params.lng}).sort({startDate:1}).exec(function(err,doc){
					if(err)
						console.log(err);
					for(var i=0; i<doc.length;i++) {
						if(doc[i].EndDate==null)
							doc[i].EndDate = doc[i].StartDate+21600000;
						if(doc[i].ImageUrl==null)
							doc[i].ImageUrl = 'http://wishpool.one/images/SNAP2.png';
						if(doc[i].Description==null)
							doc[i].Description='No Description available';
							actRecords.push(new obj(doc[i].ImageUrl,getDate(new Date()),getDate(doc[i].StartDate),getDate(doc[i].EndDate),doc[i].Name,doc[i].Description,doc[i]._id,doc[i].Latitude,doc[i].Longitude))				
					}
					cb(null, actRecords)
				});
			},
			function(actRecords, cb) {
				yelp.find({'Latitude': req.params.lat, 'Longitude': req.params.lng}).sort({startDate:1}).exec(function(err,doc){
					if(err)
						console.log(err);
					else
						for(var i=0; i<doc.length;i++) {
							if(doc[i].EndDate==null)
								doc[i].EndDate = doc[i].StartDate+21600000;
							if(doc[i].ImageUrl==null)
								doc[i].ImageUrl = 'http://wishpool.one/images/SNAP2.png';
							if(doc[i].Description==null)
								doc[i].Description='No Description available';
								actRecords.push(new obj(doc[i].ImageUrl,getDate(new Date()),getDate(doc[i].StartDate),getDate(doc[i].EndDate),doc[i].Name,doc[i].Description,doc[i]._id,doc[i].Latitude,doc[i].Longitude))				
						}
					cb(null, actRecords)
				});
			},
			function(actRecords,cb){
				mapinfo.find({'Latitude': req.params.lat, 'Longitude': req.params.lng}).sort({startDate:1}).exec(function(err,doc){
					if(err)
						console.log(err);
					else
						for(var i=0; i<doc.length;i++) {
							if(doc[i].EndDate==null)
								doc[i].EndDate = doc[i].StartDate+21600000;
							if(doc[i].ImageUrl==null)
								doc[i].ImageUrl = 'http://wishpool.one/images/SNAP2.png';
							if(doc[i].Description==null)
								doc[i].Description='No Description available';
								actRecords.push(new obj(doc[i].ImageUrl,getDate(new Date()),getDate(doc[i].StartDate),getDate(doc[i].EndDate),doc[i].Name,doc[i].Description,doc[i]._id,doc[i].Latitude,doc[i].Longitude))				
						}
					cb(null, actRecords)
				});	
			},
			function(actRecords,cb){
				console.log('Records:: '+actRecords.length)
				for(var i=0; i<actRecords.length; i++) {
					if(new Date(actRecords[i].EndDate).getTime() < cDate)
						pastrecords.push(actRecords[i]);
					else if(new Date(actRecords[i].StartDate).getTime() < cDate && new Date(actRecords[i].EndDate).getTime() > cDate)
						presentrecords.push(actRecords[i]);
					else if(new Date(actRecords[i].StartDate).getTime() > cDate)
						futurerecords.push(actRecords[i]);
				}	

					record.push(pastrecords);
					record.push(presentrecords);
					record.push(futurerecords);				
					console.log("sendingRecord: "+record.length);
					res.send(record);
			}
		]);
});


router.post('/',function(req,res){	
		console.log('Start Date:'+req.body.startDate)
		console.log('Start Date:'+req.body.endDate)
		var mapdata = new mapinfo({
			latitude:req.body.latitude,
			longitude:req.body.longitude,
			title:req.body.title,
			info:req.body.info,
			date:new Date(),
			imageId:req.body.imageId,
			imagecount:req.body.imagecount,
			startDate:req.body.startDate,
			endDate:req.body.endDate
		});
	mapdata.save(function(err,query){
		if(err)
			console.log('Unable to insert new values into database @ mapinfo/')
		else
			res.send(query)
	});
});


module.exports = router;
