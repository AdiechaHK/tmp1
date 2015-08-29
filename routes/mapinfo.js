var express = require('express');
var router = express.Router();
var fs = require('fs');
var async = require('async');
var mapinfo = require(__dirname+'/model/mapinfo');
var meetup = require(__dirname+'/model/meetup');
var yelp = require(__dirname+'/model/yelp');


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
	// console.log(mapData);
  
});

router.get('/map', function(req, res) {
	res.render('mapinfo', { title:'Map information', jsfile:'mapinfo'});
	
});


function getDate(dt) {
	var d = new Date(dt);
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
var n = month[d.getMonth()];

	return d.getDate()+'-'+n+'-'+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes()

}


var obj = function(imageId,dt,sd,ed,title,info,id){
	this.ImageUrl = imageId;
	this.date=dt;
	this.StartDate = sd;
	this.EndDate = ed;
	this.Name = title;
	this.Description = info;
	this.id=id;
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
							doc[i].ImageUrl = 'https://wishpool.one/imgs/SNAP2.png';
						else if(doc[i].ImageUrl.indexOf("http:")!=-1)
							doc[i].ImageUrl = doc[i].ImageUrl.replace("http:", "")
						if(doc[i].Description==null)
							doc[i].Description='No Description available';

						console.log(doc[i].ImageUrl);
							actRecords.push(new obj(doc[i].ImageUrl,getDate(new Date()),getDate(doc[i].StartDate),getDate(doc[i].EndDate),doc[i].Name,doc[i].Description,doc[i]._id))				
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
								doc[i].ImageUrl = 'https://wishpool.one/imgs/SNAP2.png';
							else if(doc[i].ImageUrl.indexOf("http:")!=-1)
								doc[i].ImageUrl = doc[i].ImageUrl.replace("http:", "")
							if(doc[i].Description==null)
								doc[i].Description='No Description available';
								actRecords.push(new obj(doc[i].ImageUrl,getDate(new Date()),getDate(doc[i].StartDate),getDate(doc[i].EndDate),doc[i].Name,doc[i].Description,doc[i]._id))				
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
								doc[i].ImageUrl = 'https://wishpool.one/imgs/SNAP2.png';
							else if(doc[i].ImageUrl.indexOf("http:")!=-1)
								doc[i].ImageUrl = doc[i].ImageUrl.replace("http:", "")
							if(doc[i].Description==null)
								doc[i].Description='No Description available';
								actRecords.push(new obj(doc[i].ImageUrl,getDate(new Date()),getDate(doc[i].StartDate),getDate(doc[i].EndDate),doc[i].Name,doc[i].Description,doc[i]._id))				
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
			Latitude:req.body.latitude,
			Longitude:req.body.longitude,
			Name:req.body.title,
			Description:req.body.info,
			date:new Date(),
			ImageUrl:req.body.imageId,
			StartDate:req.body.startDate,
			EndDate:req.body.endDate
		});
	mapdata.save(function(err,query){
		if(err)
			console.log('Unable to insert new values into database @ mapinfo/')
		else
			res.send(query)
	});
});


module.exports = router;
