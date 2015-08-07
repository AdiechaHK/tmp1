var express = require('express');
var router = express.Router();
var fs = require('fs');
var mapinfo = require(__dirname+'\\model\\mapinfo');

/* GET home page. */

router.get('/map', function(req, res) {
	var mapData ='';
	mapinfo.find({}).exec(function(err,doc){
		if(err)
			console.log(err);
		else
			mapData = doc
			// console.log(mapData);
		res.render('map', { title:'Map information', jsfile:'mapinfo', mapData:mapData});
	});
	// console.log(mapData);
  
});

router.get('/', function(req, res) {
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
	this.imageId = imageId;
	this.date=dt;
	this.startDate = sd;
	this.endDate = ed;
	this.title = title;
	this.info = info;
	this.id=id;
}

router.get('/location/:lat/:lng',function(req,res){
	// console.log(req.params.lat+" , "+req.params.lng);
	var cDate = new Date().getTime();
	console.log('Current Date: '+cDate)
	var pastrecords=[],
		presentrecords=[],
		futurerecords=[],
		record=[];
	mapinfo.find({latitude:req.params.lat, longitude:req.params.lng}).sort({startDate:1}).exec(function(err,doc){
		if(err)
			console.log(err);
		else {
			console.log('Start Date: '+getDate(doc[0].startDate.getTime()));

			for(var i=0; i<doc.length;i++)
				if(doc[i].endDate.getTime() < cDate)
					for(var j=0; j<doc[i].imagecount;j++)
						pastrecords.push(new obj(doc[i].imageId+'/'+j,getDate(doc[i].date),getDate(doc[i].startDate),getDate(doc[i].endDate),doc[i].title,doc[i].info,doc[i]._id));
				else if(doc[i].startDate.getTime() < cDate && doc[i].endDate.getTime() > cDate)
					for(var j=0; j<doc[i].imagecount;j++)
						presentrecords.push(new obj(doc[i].imageId+'/'+j,getDate(doc[i].date),getDate(doc[i].startDate),getDate(doc[i].endDate),doc[i].title,doc[i].info,doc[i]._id));
				else if(doc[i].startDate.getTime() > cDate)
					for(var j=0; j<doc[i].imagecount;j++)
						futurerecords.push(new obj(doc[i].imageId+'/'+j,getDate(doc[i].date),getDate(doc[i].startDate),getDate(doc[i].endDate),doc[i].title,doc[i].info,doc[i]._id));

					record.push(pastrecords);
					record.push(presentrecords);
					record.push(futurerecords);
			
			console.log(pastrecords.length)
			res.send(record);
		}
	});
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