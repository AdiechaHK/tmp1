$(document).ready(function() {
     $('#uploadForm').submit(function() {
        $.ajax({

            error: function(xhr) {
                status('Error: ' + xhr.status);
            },

            success: function(response) {
                  console.log(response);
            alert(response);
            }
    });

  return false;
    });
detectmob();

$('input[name="eposition"]').attr("readonly", true);

     $('#comments').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
      // if(keycode == '13'){
        alert('You pressed a "enter" key in textbox'); 
    // }
});
});
var mobile= false
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    console.log('Detected Mobile page')
    mobile = true;
  }
 else {
  console.log('Not Detected Mobile page')
   mobile = false;
  }
}

function closeAccordion(){
  // alert('test');
  $("#accor").toggle();
}
function AccordionControl(controlDiv,map) {
  controlDiv.style.padding = '5px';
  var controlUI = document.createElement('div');
  // var accordionUI = document.createElement('div');

  controlUI.style.backgroundColor = 'white';
  controlUI.style.border='1px solid';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  

  // controlUI.title = 'Set map to London';
  controlDiv.appendChild(controlUI);
  var controlText = document.createElement('div');
  // controlText.style.fontFamily='Arial,sans-serif';
  controlText.id='accor';
  controlText.style.fontSize='14px';
  controlText.style.display = 'none';
  // controlText.style.paddingRight = '2px';
  
var text = '<div class="bs-example" style="width:450px; height:500px;">&nbsp;<button type="button" class="close" onclick="closeAccordion()">×</button> <div class="panel-group" id="accordion"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title">'+
              '<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Grouped Markers</a> </h4> </div> <div id="collapseOne" class="panel-collapse collapse in">'+
              '<div class="panel-body" align="left"><div id="gmarkers" align="left">First Tab Information</div> </div> </div> </div>'+
              '<div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> '+
                '<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Category Picker</a> </h4> </div> <div id="collapseTwo" class="panel-collapse collapse">'+
                '<div class="panel-body"><div id="cpicker" >Second Tab Information</div> </div> </div></div>'+
                '<div class="panel panel-default"><div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Event Type Picker</a>'+
                '</h4> </div> <div id="collapseThree" class="panel-collapse collapse"> <div class="panel-body"> <div id="">Coming Soon...</div></div></div> </div>'+
              '<div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> '+
                '<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">Time Picker</a> </h4> </div> <div id="collapseFour" class="panel-collapse collapse">'+
                '<div class="panel-body"><div id="tpicker" >Coming Soon...</div><div id="accorObj"></div> </div></div></div>'+
                '</div></div>'  ;
  controlText.innerHTML = text
  // accordionUI.innerHTML = text;
  controlUI.appendChild(controlText);
  // controlUI.appendChild(accordionUI);
  // Setup click-event listener: simply set the map to London

  google.maps.event.addDomListener(controlUI, 'click', function() {
    // alert('hello world');
  });
}
// Add a Home control that returns the user to London
function HomeControl(controlDiv) {
  controlDiv.style.padding = '5px';
  var controlUI = document.createElement('div');
  // var accordionUI = document.createElement('div');

  controlUI.style.backgroundColor = 'white';
  controlUI.style.border='1px solid';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  
  controlDiv.appendChild(controlUI);
  var controlText = document.createElement('div');
  
  controlText.innerHTML = '<a href="#" role="button" class="btn"><span class="glyphicon glyphicon-th-list"></span> MENU</a>';
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
    $('#accor').toggle();
  });
}

function LocationControl(controlDiv) {
  controlDiv.style.padding = '1px';
  var controlUI = document.createElement('div');
  
  controlUI.style.backgroundColor = 'white';
  controlUI.style.margin = '10px';
  controlUI.style.border='1px solid';
  controlUI.style.padding='1px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  
  controlDiv.appendChild(controlUI);
  var controlText = document.createElement('div');
  
  controlText.innerHTML = '<a href="#" role="button" class="ltn" ><img src="../images/gps.png" width="15px" height="auto"></a>';
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
    getGeolocation()
  });
}

function DirectionControl(controlDiv) {
  controlDiv.style.padding = '5px';
  var controlUI = document.createElement('div');
  
  controlUI.style.backgroundColor = 'white';
  // controlUI.style.border='1px solid';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  
  controlDiv.appendChild(controlUI);
  var controlText = document.createElement('div');
  
  controlText.innerHTML = '<a href="#" role="button" class="btn" ><img src="../images/directions.png" width="14px">  </a>';
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
  });
}

function UploadControl(controlDiv) {
  controlDiv.style.padding = '5px';
  var controlUI = document.createElement('div');
  
  controlUI.style.backgroundColor = 'white';
  controlUI.style.border='1px solid';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  
  controlDiv.appendChild(controlUI);
  var controlText = document.createElement('div');
  
  controlText.innerHTML = '<a href="#" role="button" class="btn" ><span class="glyphicon glyphicon-camera"></span> </a>';
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
    //$('#accor').toggle();
    var endDate = new Date().getTime()+3600000
    var mapObj = {Latitude:currPosition.lat, Longitude:currPosition.lng, Name:'Hello', Description:'Welcome to SnapMap', ImageUrl:'https://wishpool.one/imgs/SNAP2.png', StartDate: new Date(), EndDate:endDate }

    infowindow = new google.maps.InfoWindow();
    // console.log(currPosition);
    infowindow.setPosition(currPosition);
    infowindow.setContent(getContent(mapObj));
    // $('#imageInfo').val(mapObj);
    infowindow.open(map);
    $('.carousel-inner').append(" <img src='"+mapObj.ImageUrl+"' class='img-responsive' style='width:100%; height:auto;' alt='Responsive image'>");
        // $('.carousel-indicators li').removeClass('active');
    $('.nav-tabs a[href="#uploadImg"]').tab('show');
                
  });
}

function accorInfoDisplay(pos) {
  var records = JSON.parse($('#accorObj').val());
   // infowindow = new google.maps.InfoWindow();
  var position = {lat:records[pos].Latitude, lng:records[pos].Longitude}
    infowindow.setContent(getContent(records[pos]));
    infowindow.setPosition(position);
    infowindow.open(map); 
    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({'location': position}, function(results, status) {
        if (results[1]) {
      $('input[name="eposition"]').val(formatAddress(results))
        }
    });
    for(var i=0; i<records.length; i++) {
              if(i==pos) {
                $('.carousel-inner').append("<div class='active item'><input type='hidden' id='imageInfo' value=''> <img src='"+records[i].ImageUrl+"' style='max-width:350px; max-height:300px; width:100%; height:auto;   '' ><div class='carousel-dates'><label>"+records[i].StartDate+"&nbsp; -&nbsp; "+ records[i].EndDate+"</label></div><div class='carousel-caption'><h5>"+records[i].Name+"</h5></div></div>");
                // $('.carousel-indicators li').removeClass('active');
                $('.carousel-indicators').append("<li data-target='#carousel-example-generic' data-slide-to='0' class='active'></li>");                

                // $('.carousel').carousel('next');
              }else{
                $('.carousel-inner').append("<div class='item'><input type='hidden' id='imageInfo' value=''> <img src='"+records[i].ImageUrl+"' class='img-responsive' alt='Responsive image'><div class='carousel-dates'><label>"+records[i].StartDate+"&nbsp; -&nbsp; "+ records[i].EndDate+"</label></div><div class='carousel-caption'><h5>"+records[i].Name+"</h5></div></div>");
                // $('.carousel-indicators li').removeClass('active');
                $('.carousel-indicators').append("<li data-target='#carousel-example-generic' data-slide-to='"+i+"'></li>");
                // $('.carousel').carousel('next');
              }
            }
            var currentIndex = $('div.active').index();
            $('#imageInfo').val('');
            $('#imageInfo').val(JSON.stringify(records[currentIndex]));
            $('.carousel').on('slid.bs.carousel', function () {
              var carouselData = $(this).data('bs.carousel');
              var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
                $('#imageInfo').val(JSON.stringify(records[currentIndex]));
            });
            $('#imageInfo').val(JSON.stringify(records[pos]));
}

function accorDisplay(latlan) {
  // alert('Hello');

  for (var i = 0; i < mapInfo.length; i++) 
    if((mapInfo[i].Latitude == Number(latlan[0])) || (mapInfo[i].Longitude == Number(latlan[1]))) {
        console.log(mapInfo[i].Latitude+' , '+mapInfo[i].Longitude)
        if((mapInfo[i].Latitude == Number(latlan[0])) && (mapInfo[i].Longitude != Number(latlan[1]))) {
            latlan[1] = mapInfo[i].Longitude; 
            break;
        }
        else
          if((mapInfo[i].Latitude != Number(latlan[0])) && (mapInfo[i].Longitude == Number(latlan[1]))) {
              latlan[0] = mapInfo[i].Latitude;
              break;          
          }
            
    } 

  $.ajax({
      type: 'GET',
      
       url: '/mapinfo/location/'+Number(latlan[0])+'/'+Number(latlan[1]),
            dataType: 'JSON'
    }).done(function (response){
            // console.log(response);
      var records = [];
        for(var i=0; i<response.length;i++)
          for(var j=0; j<response[i].length; j++) {
            var mapObj = {Latitude:Number(latlan[0]), Longitude:Number(latlan[1]), Name:response[i][j].Name, Description:response[i][j].Description, ImageUrl:response[i][j].ImageUrl, StartDate: response[i][j].StartDate, EndDate:response[i][j].EndDate,id:response[i][j].id }
              records.push(mapObj);
              $('#accor').show();
          }
          var Names='<ul>'
          for(var i=0; i<records.length; i++)
             Names=Names+'<li><a href="#" onclick="accorInfoDisplay(\''+i+'\')">'+records[i].Name+'</a></li>'
          Names = Names+'</ul>';
          console.log(Names);
          $('#accorObj').val(JSON.stringify(records))
          $('#gmarkers').html(Names);
      });
}


var map='';
var infwindow='';
var currPosition='';
 var infowindow
function initialize() {
  var container = document.createElement("div");
    container.style.width = "350px";
     // navigator.geolocation.getCurrentPosition(function(position) {
    // pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      // currPosition = {lat:position.coords.latitude, lng:position.coords.longitude};
    // alert(position.latLng);    
    // var pos = new google.maps.LatLng(40.693134, -74.015497);
    var pos = new google.maps.LatLng(52.491398, 13.417343);
  var mapOptions = {
    zoom: 1,
    center: pos,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    disableDoubleClickZoom: true
  };
   
   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
   if(!mobile)
    map.setZoom(2);
    google.maps.event.addListener(map, 'dblclick', function(e) {
   placeMarker(e.latLng, map);
   });

  addSearchbutton(map);
  addControls(map);

    setMarkers(mapInfo,map);
  getGeolocation();
  
}

function getGeolocation() {
  if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
    pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    currPosition = {lat:position.coords.latitude, lng:position.coords.longitude};
      map.setCenter(pos)
      if(mobile)
        map.setZoom(15)
      else
        map.setZoom(16)
    });
  }

}

function formatAddress(result) {
  var actAddress = '';
  if(result[0])
    console.log(result[0]);
  var strAddress1 = result[0].formatted_address.split(',')
  var strAddress2 = result[1].formatted_address.split(',')
  console.log(strAddress1.length)
  for(var i=0; i< strAddress1.length-1; i++)
    actAddress = actAddress + strAddress1[i] +', '
  return actAddress+'('+strAddress2[0]+')';
}

function addControls(map) {
  var accorControlDiv = document.createElement('div');
    var accorControl = new AccordionControl(accorControlDiv);
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(accorControlDiv);

    var homeControlDiv = document.createElement('div');
  var homeControl = new HomeControl(homeControlDiv);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv); 

  var uploadControlDiv = document.createElement('div');
  var uploadControl = new UploadControl(uploadControlDiv);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(uploadControlDiv); 

  var locationControlDiv = document.createElement('div');
  var locationControl = new LocationControl(locationControlDiv);
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locationControlDiv); 

  var directionControlDiv = document.createElement('div');
  var directionControl = new DirectionControl(directionControlDiv);
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(directionControlDiv); 

}


function calculateAndDisplayRoute(directionsService, directionsDisplay,start,end,transitMode) {
  
  var mode = 'google.maps.TravelMode.'+transitMode;
  console.log('calculate Mode: '+mode);
  directionsService.route({
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.WALKING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      console.log(response.routes.length)
      console.log('Length: '+response.routes[0].legs[0].distance.text);
      $('#route-info').html(response.routes[0].legs[0].distance.text)
      console.log(response)
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

function searchGroup() {
       $('#search-group').toggle();
        $('#direction-group').toggle();
        $('#startend-group').toggle(); 
        $('#start-input').val(' ');
        $('#end-input').val(' ');
        $('#route-info').html(' ')
        markers = [];
      }

var startPlace;
var endPlace;
function directionInfo(transitMode){
  // console.log(transitMode);
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  directionsDisplay.setMap(map);

  var start =new google.maps.places.SearchBox(document.getElementById('start-input'));
  var end =new google.maps.places.SearchBox(document.getElementById('end-input'));

    start.addListener('places_changed',function() {
    var place = start.getPlaces();
    // console.log('Start Place: '+startPlace)
    if (start.getPlaces().length == 0) {
      return;
    }
    startPlace = {lat: place[0].geometry.location.G, lng: place[0].geometry.location.K};
    calculateAndDisplayRoute(directionsService, directionsDisplay,startPlace, endPlace,transitMode);
  });


  end.addListener('places_changed',function() {
    var place = end.getPlaces();

    if (place.length == 0) {
      return;
    }
    endPlace = {lat: place[0].geometry.location.G, lng: place[0].geometry.location.K};
    //if(undefined != startPlace.formatted_address)
    calculateAndDisplayRoute(directionsService, directionsDisplay,startPlace, endPlace,transitMode);
  });


}



function addSearchbutton(map) {

// Create the search box and link it to the UI element.
  var divInput = document.getElementById('pac-in');
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(divInput);
  
  directionInfo('WALKING');
  
  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}


function edittab(){
  $("#carousel-example-generic").carousel("pause");
  var record = JSON.parse($('#imageInfo').val());
  var latlng = {lat: parseFloat(record.Latitude), lng: parseFloat(record.Longitude)};
var geocoder = new google.maps.Geocoder;
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (results[1]) {
      // console.log('Formatted Address:: '+formatAddress(results))
      $('input[name="eposition"]').val(formatAddress(results))
    }
  });
  $('input[name="etitle"]').val(record.Name);
  $('input[name="einfo"]').val(record.Description);
  $('input[name="estartDate"]').val(new Date(record.StartDate).toJSON().slice(0,19));
  $('input[name="eendDate"]').val(new Date(record.EndDate).toJSON().slice(0,19));
  $('input[name="eid"]').val(record.id);
  $('input[name="eimageid"]').val(record.ImageUrl);
  $('input[name="efile"]').val(record.ImageUrl);
}

function getPos() {
  if($('input[name="eposition"]').is('[readonly]') )
    $('input[name="eposition"]').attr("readonly", false);
}


function fileEdit() {
  // alert('file edit');
  $('#eFileChange').replaceWith("<input type='file' class='form-control' name='efile'>")
}

function moreInfo() {
  // alert('hello');
  $("#carousel-example-generic").carousel("pause");
  var record = JSON.parse($('#imageInfo').val());
  // console.log(record);
  console.log('More Info: '+$('input[name="eposition"]').val());
  $('#title').text(record.Name);
  $('#dates').html("("+record.StartDate +" - "+record.EndDate+")<br>"+$('input[name="eposition"]').val());
  $('#description').replaceWith(record.Description);
  // var info = "<h4 align='center'>"+record.title+"</h4><h6 class='info' align='center'>("+record.startDate +" - "+record.endDate+")</h6>"+
              // "<p>"+record.info+"<p>"
  // $('#minfo').replaceWith(info)
  $('input[name="imgId"]').val(record.ImageUrl);
  // $('#minfo').replaceWith('')

}

function sComment(event) {
// alert($('input[name="imgId"]').val());
  if(event.keyCode==13) {
    var commentVal = {
      'imageId':$('input[name="imgId"]').val(),
      'date':new Date(),
      'username':'Srini',
      'comment':$('input[name="miCmts"]').val()
    }
    $.ajax({
      type: 'POST',
       data: commentVal,
       url: '/mobile/addComment',
       dataType: 'JSON'
      }).done(function (response){
        console.log(response)
        $('input[name="miCmts"]').val('')
      });

  }
    // alert($('input[name="miCmts"]').val())
}

function getContent(branch) {
  
    var markObj = branch;
    // var pos = markObj.Latitude+" ,  "+markObj.Longitude;
    var pos='';
    var tabs = '<ul class="nav nav-tabs"><li class="active"><a data-toggle="tab" href="#imageView" onclick="userinfo()"><span class="glyphicon glyphicon-home"></span></a></li> <li><a data-toggle="tab" href="#moreInfo" onclick="moreInfo()"><span class="glyphicon glyphicon-info-sign"></span></a></li>'+
                '<li><a data-toggle="tab" href="#uploadImg"><span class="glyphicon glyphicon-camera"></span></a></li> <li><a data-toggle="tab" href="#editTab" onclick="edittab()"><span class="glyphicon glyphicon-edit"></span></a></li> </ul>'+
                '<div class="tab-content" style="width:350px; height:300px" >'
                
    var viewInfo =  "<div id='imageView' class='tab-pane fade in active'> <div id='carousel-example-generic' class='carousel slide' data-interval='3000'  data-ride='carousel'>"+
                      "<ol class='carousel-indicators'></ol>"+
                      "<div class='carousel-inner' style='width:100%; max-width:350px; max-height:300px;!important;'></div>"+
                      "<a class='carousel-control left' href='#carousel-example-generic' role='button' data-slide='prev'>"+
                      "<span class='glyphicon glyphicon-chevron-left'></span></a>"+
                      "<a class='carousel-control right' href='#carousel-example-generic' role='button' data-slide='next'>"+
                      "<span class='glyphicon glyphicon-chevron-right'></span></a> </div>"+
                       "<div id='likes' align='right'><a href='' class='btn btn-default'><span class='glyphicon glyphicon-thumbs-up'> | 20</span></a>&nbsp;<a href='' class='btn btn-default'><span class='glyphicon glyphicon-thumbs-down'> | 10</span></a></div></div>";
    var StartDate = new Date().getTime();
    var EndDate = new Date().getTime()+3600000;
    
    var uploadContent="<br><form id='uploadForm' enctype='multipart/form-data' method='post' action='/mobile/addFile'><input type='hidden' name='startDate' value='"+StartDate+"'><input type='hidden' name='endDate' value='"+EndDate+"'> "+
                    "<input type='hidden' name='latitude' value='"+markObj.Latitude+"'><input type='hidden' name='longitude' value='"+markObj.Longitude+"'><table width='100%' class='table'><tr><td><label>Title</label></td><td><input type='text' class='form-control' name='title' placeholder='Share Experience'></td></tr>"+
                  "<tr><td><label>Details</label></td><td><input type='text' class='form-control' name='info' placeholder='Describe Experience' > </td></tr>"+
                  "<tr><td><label>Photo / Video</label></td><td><input type='file' class='form-control' name='file' multiple> </td></tr>"+
                  "<tr><td><input type='submit' name='Share' value='Share' class='btn btn-info'></td><td>&nbsp;</td></tr></table></form>"                  

    var uploadImg="<div id='uploadImg' class='tab-pane fade'>"+uploadContent+"</div>"
    
    var editContent = "<form id='editForm' enctype='multipart/form-data' method='post' action='/mobile/edit'>"+
                    "<input type='hidden' name='elatitude' value='"+markObj.Latitude+"'><input type='hidden' name='elongitude' value='"+markObj.Longitude+"'><input type='hidden' name='eid' value=''>"+
                    "<input type='hidden' name='eimageid' value=''>"+
                    "<table width='100%' class='table'><tr><td width='20%'><label>Title</label></td><td width='80%'><input type='text' class='form-control' name='etitle' id='title' placeholder='Share Experience' value="+markObj.Name+"></td></tr>"+
                  "<tr><td width='20%'><label>Details</label></td><td width='80%'><input type='text' class='form-control' name='einfo' placeholder='Describe Experience' value="+markObj.Description+"> </td></tr>"+
                  "<tr><td width='20%'><label>Photo / Video <a href='#' onclick='fileEdit()'><span class='glyphicon glyphicon-edit'></span></a></label></td><td width='80%'><div id='eFileChange'><input type='text' readonly class='form-control' name='efile' value="+markObj.ImageUrl+"> </div></td></tr>"+
                  "<tr><td width='20%'><label>Start Date</label></td><td width='80%'><input type='datetime-local' class='form-control' name='estartDate' id='startDate' value="+new Date(StartDate).toJSON().slice(0,19)+"></td></tr>"+
                  "<tr><td width='20%'><label>End Date</label></td><td width='80%'><input type='datetime-local' class='form-control' name='eendDate' id='endDate' value="+new Date(EndDate).toJSON().slice(0,19)+"></td></tr>"+
                  "<tr><td width='20%'><label>Position <a href='#' onclick='getPos()'><span class='glyphicon glyphicon-edit'></span></a></label></td><td width='80%'><input type='text' class='form-control' readonly name='eposition' value='"+pos+"'></td></tr>"+
                  "<tr><td><input type='submit' name='submit' value='Save' class='btn btn-info'></td><td>&nbsp;</td></tr></table></form>"                  

    var moreInfo = "<div id='moreInfo' class='tab-pane fade'><div id='minfo'><h4 align='center'><div id='title'>"+markObj.Name+"</div></h4><h6 class='info' align='center'><div id='dates'></div></h6></div><hr><input type='hidden' name='imgId'>"+
                  "<div id='description'>"+markObj.Description+"</div><div class='comment'> <input type='text' class='form-control' name='miCmts' placeholder='Comments' onkeypress='sComment(event)'></div> </div>"
    var edittab= "<div id='editTab' class='tab-pane fade' style='width:360px; height:300px'>"+editContent+"</div></div>"

    var contentString=tabs+viewInfo+moreInfo+uploadImg+edittab

      return contentString;
}

function edit(title,info,imageid) {
  document.getElementById(title).innerHTML = "<input type='text' id='editText' class='form-control' value='"+info+"' onblur=save('"+imageid+"')>";
}
  function userinfo() {
    $("#carousel-example-generic").carousel("cycle")
    // $("#carousel-example-generic").carousel("pause")

  }

function placeMarker(position,map) {
  if(!$('input[name="eposition"]').is('[readonly]')) {

    var marker = new google.maps.Marker({
      position: position,
      map: map,
      draggable:true,
      animation: google.maps.Animation.DROP,
      //icon: "place.png"
    });
    console.log(position.G);
  $('input[name="elatitude"]').val(position.G);
  $('input[name="elongitude"]').val(position.K);    
  $('input[name="eposition"]').val(position);
  }
  
}

function setMarkers(branches, map) {
    // console.log(branches);
    var markers = [];
    var marker = null;
       infowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < branches.length; i++) {
        branch = branches[i];
      var myLatlngMarker = new google.maps.LatLng(branch.Latitude, branch.Longitude);
        var marker = new google.maps.Marker({
            position: myLatlngMarker,
            info:getContent(branch),
            content:branch
        });
        markers.push(marker);
        google.maps.event.addListener(marker, 'click', function () {
          var lat = this.content.Latitude,
              lng = this.content.Longitude;
          var content = this.content;
          var result =[];
          var imgQueue=[];
          infowindow.setContent(this.info);
          infowindow.open(map, this);
          var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
          var geocoder = new google.maps.Geocoder;
          geocoder.geocode({'location': latlng}, function(results, status) {
            console.log(results);
            if (results[1]) {
      console.log('Formatted Address:: '+formatAddress(results))
            $('input[name="eposition"]').val(formatAddress(results))
            }
          });

              // console.log(this.info);
          $.ajax({
            type: 'GET',
            url: '/mapinfo/location/'+lat+'/'+lng,
            dataType: 'JSON'
          }).done(function (response){
              // console.log(response);
              var records = [];
              for(var i=0; i<response.length;i++)
                for(var j=0; j<response[i].length; j++)
                  records.push(response[i][j]);
                // alert(records.length);
        //----------------------------- 
          // var record = JSON.stringify(records[0]);
            var pos=response[0].length;
              if(response[0].length == records.length)
                pos= pos - 1;
              // alert(pos);
            
            for(var i=0; i<records.length; i++) {
              if(i==pos) {
                $('.carousel-inner').append("<div class='active item'><input type='hidden' id='imageInfo' value=''> <img src='"+records[i].ImageUrl+"' style='max-width:350px; max-height:300px; width:100%; height:auto;   '' ><div class='carousel-dates'><label>"+records[i].StartDate+"&nbsp; -&nbsp; "+ records[i].EndDate+"</label></div><div class='carousel-caption'><h5>"+records[i].Name+"</h5></div></div>");
                // $('.carousel-indicators li').removeClass('active');
                $('.carousel-indicators').append("<li data-target='#carousel-example-generic' data-slide-to='0' class='active'></li>");                

                // $('.carousel').carousel('next');
              }else{
                $('.carousel-inner').append("<div class='item'><input type='hidden' id='imageInfo' value=''> <img src='"+records[i].ImageUrl+"' class='img-responsive' alt='Responsive image'><div class='carousel-dates'><label>"+records[i].StartDate+"&nbsp; -&nbsp; "+ records[i].EndDate+"</label></div><div class='carousel-caption'><h5>"+records[i].Name+"</h5></div></div>");
                // $('.carousel-indicators li').removeClass('active');
                $('.carousel-indicators').append("<li data-target='#carousel-example-generic' data-slide-to='"+i+"'></li>");
                // $('.carousel').carousel('next');
              }
            }
        
            var currentIndex = $('div.active').index();
            $('#imageInfo').val('');
            $('#imageInfo').val(JSON.stringify(records[currentIndex]));
            $('.carousel').on('slid.bs.carousel', function () {

              var carouselData = $(this).data('bs.carousel');
              
              var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
                $('#imageInfo').val(JSON.stringify(records[currentIndex]));
            });
            $('#imageInfo').val(JSON.stringify(records[pos]));
            userinfo();
            });
            
        });
          bounds.extend(myLatlngMarker);
    }
    var markerCluster = new MarkerClusterer(map, markers);
    // map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initialize);
   