var express = require('express');
var router = express.Router();
var multer = require('multer');
var uploadVideo = require(__dirname+'/model/uploadModel');
var mapinfo = require(__dirname+'/model/mapinfo');
var comments = require(__dirname+'/model/comments');
var fs = require('fs');
var gridfs = require('./model/gridfs');
var actFName = '';
var uploadFile = multer({ dest: 'uploads/' });

router.use(multer({dest: './public/data/uploads',
	rename: function (fieldname, filename) {
		fName = filename;
		console.log('Filename: '+fName);
    return fName;
	},
	
	onFileUploadComplete: function (file) {
     fName = file;
	  console.log(file.fieldname + ' uploaded to  ' + file.path)

      actFName = file.path
		console.log(actFName);
	  done=true;
	},
	onError: function(error,next){
		console.log('Error during upload: '+error);
	}
}));

router.post('/edit',function(req,res){

	console.log(req.body);
	console.log("files: "+JSON.stringify(req.files));
	var imageurl= ''
	if(req.files.efile!==undefined) {
		var upload;
		upload = new uploadVideo();
		upload._id = mongoose.Types.ObjectId(req.body._id);
		type = req.files.efile.mimetype
       	upload.docName = req.files.efile.name
	    opts = {
	    	content_type: type
	        };
		console.log(" path: "+req.files.efile.path)
	    console.log(" Name: "+req.files.efile.name)
	    upload.addFile(req.files.efile.path, req.files.efile.name, opts, function (err, result) {
	    	if(err) {
	        		console.log('API Trackdocs Error: '+err )
	        	}
	        	else
	        	{
	        		upload.save();	
	        		fs.unlinkSync(req.files.efile.path);
	        		filecount=1;
	        		imageurl = 'http://localhost:3000/image/'+upload._id;
	        		mapinfo.findOne({_id:req.body.eid}).exec(function(err,doc){
	        			console.log('imageId: '+doc.imageId)
	        			uploadVideo.findOne({_id:doc.imageId}).remove({},true).exec(function(err,doc){
							if(err)
								console.log(err);
						});
	        				mapinfo.update({_id:req.body.eid},{$set:{
							Latitude:req.body.elatitude,
							Longitude:req.body.elongitude,
							Name:req.body.etitle,
							Description:req.body.einfo,
							date:req.body.estartDate,
							ImageUrl:imageurl,
							StartDate:req.body.estartDate,
							EndDate:req.body.eendDate
							}}).exec(function(err,doc){
							// res.send('testing');
							res.redirect("http://localhost:3000/mapinfo/map");
							});
						});
	        		
	        	}
	        })
	} else {

		mapinfo.findOne({_id:req.body.eid}).exec(function(err,doc){
		if(err)
			console.log('No Record found: '+err)
		else {
				if(imageurl=='')
					imageurl = req.body.imageId;
				mapinfo.update({_id:req.body.eid},{$set:{
				Latitude:req.body.elatitude,
				Longitude:req.body.elongitude,
				Name:req.body.etitle,
				Description:req.body.einfo,
				date:req.body.estartDate,
				StartDate:req.body.estartDate,
				EndDate:req.body.eendDate
				}}).exec(function(err,doc){
					// res.send('testing');
				res.redirect("http://localhost:3000/mapinfo/map");
			});
		}
		})
	}
	
});

router.get('/', function(req, res) {
  res.render('mobile', { title: 'Mobile upload', jsfile: 'mobile',recordIds:''});
});

router.delete('/:id',function(req,res){
	uploadVideo.findOne({_id:req.params.id}).remove({},true).exec(function(err,doc){
		if(err)
			console.log(err);
		else
			res.send('Deleted Successfully');
	})
});

router.get('/image/:id/:pos', function(req,res){
	uploadVideo.find({_id:req.params.id}).exec(function(err,result){
		if(err)
			console.log('error while loading the image: '+err);
		else if(result!=null|| result[0].files.length!=0) {
			var imgId = result[0].files[req.params.pos]._id;
				gridfs.getGridFile(imgId.toString(),function(err,doc){
					if(err){
						console.log('Error in reading from Grid file:: ');
						console.log(err);
					}
						
					else
						res.writeHead(200, {'Content-Type': result[0].files[req.params.pos].contentType});
			   			// res.write('<html><body><img src="doc.attachment:image/jpeg')
						res.write(doc,'buffer');
						res.end();
						// res.end('"/></body></html>');
				});
		}
		else
			res.end(); 
	})
})

router.post('/addComment',function(req,res){
	// console.log(req.body)
	var comment = new comments();
	comment.imageId=req.body.imageId;
	comment.username=req.body.username;
	comment.date=req.body.date;
	comment.comment=req.body.comment;
	comment.save(function(err,data){
		console.log(data);
		res.send('Succeeded');
	});
	
})

router.get('/image/:id',function(req,res){
	
	uploadVideo.find({_id:req.params.id}).exec(function(err,result){
		if(err)
			console.log('Unable to find record: '+err)
		else if(result!=null || result[0].files.length!=0) {
			// console.log('files count: '+result);
			var imgId = result[0].files[0]._id;
				gridfs.getGridFile(imgId.toString(),function(err,doc){
					if(err){
						console.log('Error in reading from Grid file:: ');
						console.log(err);
					}
						
					else
						res.writeHead(200, {'Content-Type': result[0].files[0].contentType});
			   			// res.write('<html><body><img src="doc.attachment:image/jpeg')
						res.write(doc,'buffer');
						res.end();
						// res.end('"/></body></html>');
				});
		}
		else
			res.end(); 
	});
});
router.get('/image',function(req,res){

	uploadVideo.find({},{_id:1}).exec(function(err,result){
		if(err)
			console.log('Unable to find record: '+err);

		res.render('mobile', { title: 'Mobile upload', jsfile: 'mobile', recordIds:result});
	});
});

router.post('/angularAdd',function(req,res){
	if(done==true) {
     var upload, opts,fpath,type,filecount;
       upload = new uploadVideo();
       upload._id = mongoose.Types.ObjectId(req.body._id);
       if(undefined==req.files.file.length) {
       		type = req.files.file.mimetype
       		upload.docName = req.files.file.name
	        opts = {
	            content_type: type
	        };

	        upload.addFile(req.files.file.path, req.files.file.name, opts, function (err, result) {
	        	if(err) {
	        		console.log('API Trackdocs Error: '+err )
	        	}
	        	else
	        	{
	        		upload.save();	
	        		fs.unlinkSync(req.files.file.path);
	        		res.send(upload._id);
	        	}
	        })
	    }
	}
});

router.post('/addFile',function(req,res){
	if(done==true) {
     var upload, opts,fpath,type,filecount;
       upload = new uploadVideo();
       upload._id = mongoose.Types.ObjectId(req.body._id);
       if(undefined==req.files.file.length) {
       		type = req.files.file.mimetype
       		upload.docName = req.files.file.name
	        opts = {
	            content_type: type
	        };
	        console.log(" path: "+req.files.file.path)
	        console.log(" Name: "+req.files.file.name)
	        upload.addFile(req.files.file.path, req.files.file.name, opts, function (err, result) {
	        	if(err) {
	        		console.log('API Trackdocs Error: '+err )
	        	}
	        	else
	        	{
	        		upload.save();	
	        		fs.unlinkSync(req.files.file.path);
	        		filecount=1;
	        		var imageurl = 'http://localhost:3000/image/'+upload._id;
		        	var mapdata = new mapinfo({
						Latitude:req.body.latitude,
						Longitude:req.body.longitude,
						Name:req.body.title,
						Description:req.body.info,
						date:req.body.startDate,
						ImageUrl:imageurl,
						StartDate:req.body.startDate,
						EndDate:req.body.endDate
					});
					mapdata.save(function(err,query){
						if(err)
							console.log('Unable to insert new values into database @ mapinfo/')
						else
								res.redirect('http://localhost:3000/mapinfo/map');					    
						});
	        	}
	        });
       }
       	else {

       		filecount= req.files.file.length

       		for(var i=0; i< filecount; i++) {
       			type = req.files.file[i].type
	       		upload.docName = req.files.file[i].path
		        opts = {
		            content_type: type
		        };
		        upload.addFile(req.files.file[i].path, req.files.file[i].name, opts, function (err, result) {
		        	if(err) {
		        		console.log('API Trackdocs Error: '+err )
		        	}
		        	else
		        	{
		        		upload.save();	
		        		var imageurl = ''+upload._id;
			        	var mapdata = new mapinfo({
							Latitude:req.body.latitude,
							Longitude:req.body.longitude,
							Name:req.body.title,
							Description:req.body.info,
							date:req.body.startDate,
							imageUrl:imageurl,
							StartDate:req.body.startDate,
							EndDate:req.body.endDate
						});
						mapdata.save(function(err,query){
							if(err)
								console.log('Unable to insert new values into database @ mapinfo/')
							
						});
						for(var i=0; i<req.files.file.length; i++)
	            			if(fs.existsSync(req.files.file[i].path))
	            				fs.unlinkSync(req.files.file[i].path);
					}
				});
       		}
       	
        	res.redirect('http://localhost:3000/mapinfo/map');
	    
		}
	}
});

router.post('/files', function(req,res){
  if(done==true){
     var upload, opts,fpath,type,filecount;
       upload = new uploadVideo();
       console.log(req.files.file);
       if(undefined==req.files.file.length) {
       		type = req.files.file.type
       		filecount=1;
       }
       	else {
       		type = req.files.file[0].type
       		filecount= req.files.file.length
       	}
       		
       // console.log("upload initiated");
        upload._id = mongoose.Types.ObjectId(req.body._id);
        upload.docName = actFName;
        opts = {
            content_type: type
        };
        console.log('Files:: '+req.files.file.length)
        
        	console.log(req.files)
	        upload.addFiles(req.files, opts, function (err, result) {
	            if (err) console.log("api TrackDocs Error: " + err);

	            upload.save();
	            if(req.files.file.length==undefined)
	            	fs.unlinkSync(req.files.file.path);
	    
	            for(var i=0; i<req.files.file.length; i++)
	            	if(fs.existsSync(req.files.file[i].path))
	            		fs.unlinkSync(req.files.file[i].path);
	           	var imageurl = 'http://localhost:3000/image/'+upload._id;
	           	console.log(req.body);
		
			var mapdata = new mapinfo({
				Latitude:req.body.latitude,
				Longitude:req.body.longitude,
				Name:req.body.title,
				Description:req.body.info,
				date:req.body.startDate,
				ImageUrl:imageurl,
				StartDate:req.body.startDate,
				EndDate:req.body.endDate
			});
		mapdata.save(function(err,query){
		if(err)
			console.log('Unable to insert new values into database @ mapinfo/')
		else
			// res.send(query)
				res.redirect('http://localhost:3000/mapinfo/map');
	    
			});

		     
	        });
  }
});


module.exports = router;