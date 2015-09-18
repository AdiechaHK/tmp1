var app = angular.module('snapmapApp',['angularFileUpload','ui.bootstrap']);

/*app.directive('customDatepicker',function($compile,$timeout){
        return {
            replace:true,
            scope: {
                ngModel: '=',
                dateOptions: '@',
                dateDisabled: '@',
                opened: '=',
                min: '@',
                max: '@',
                popup: '@',
                options: '@',
                name: '@',
                id: '@'
            },
            link: function($scope, $element, $attrs, $controller){
            }    
        };
    })
*/
function loadMap(){
  alert('hello')
}

app.controller('mapCtrl', function($scope, $http,$upload){
loadMap = function(){
  alert('hello');
}
alert('hello');
/*navigator.geolocation.getAccurateCurrentPosition = function (geolocationSuccess, geolocationError, geoprogress, options) {
    var lastCheckedPosition,
        locationEventCount = 0,
        watchID,
        timerID;

    options = options || {};

    var checkLocation = function (position) {
        lastCheckedPosition = position;
        locationEventCount = locationEventCount + 1;
        // We ignore the first event unless it's the only one received because some devices seem to send a cached
        // location even when maxaimumAge is set to zero
        if ((position.coords.accuracy <= options.desiredAccuracy) && (locationEventCount > 1)) {
            clearTimeout(timerID);
            navigator.geolocation.clearWatch(watchID);
            foundPosition(position);
        } else {
            geoprogress(position);
        }
    };

    var stopTrying = function () {
        navigator.geolocation.clearWatch(watchID);
        foundPosition(lastCheckedPosition);
    };

    var onError = function (error) {
        clearTimeout(timerID);
        navigator.geolocation.clearWatch(watchID);
        geolocationError(error);
    };

    var foundPosition = function (position) {
        geolocationSuccess(position);
    };

    if (!options.maxWait)            options.maxWait = 10000; // Default 10 seconds
    if (!options.desiredAccuracy)    options.desiredAccuracy = 20; // Default 20 meters
    if (!options.timeout)            options.timeout = options.maxWait; // Default to maxWait

    options.maximumAge = 0; // Force current locations only
    options.enableHighAccuracy = true; // Force high accuracy (otherwise, why are you using this function?)

    watchID = navigator.geolocation.watchPosition(checkLocation, onError, options);
    timerID = setTimeout(stopTrying, options.maxWait); // Set a timeout that will abandon the location loop
};
*/
var pos=0;
function prev(){
  var branch = JSON.parse(document.getElementById('windowinfo').value);
  pos--;
  document.getElementById("imageid").src=branch[pos].imageId;
      document.getElementById('status').innerHTML= pos+1 +'/'+branch.length+' &nbsp;&nbsp;  '+branch[pos].startDate+'&nbsp; -&nbsp; '+ branch[pos].endDate;   
      document.getElementById('title').innerHTML=branch[pos].title;
      document.getElementById('info').innerHTML=branch[pos].info;
  if(pos == 0) 
      document.getElementById('prev').disabled=true;
      document.getElementById('next').disabled=false;
}


  $scope.mapinfo={};
  alert('check');
  $scope.files =[];
  $scope.mapinfo.startDate = new Date();
  $scope.mapinfo.endDate = new Date(new Date().getTime()+3600000);
  if(navigator.geolocation) {
      navigator.geolocation.getAccurateCurrentPosition(function(position) {
      $scope.$apply(function(){
        // alert(position.coords.latitude+ " "+position.coords.longitude);
        console.log(position.coords.latitude+ " "+position.coords.longitude);
        $scope.mapinfo.latitude = position.coords.latitude;
        $scope.mapinfo.longitude = position.coords.longitude;
        // alert($scope.mapinfo.latitude);
        
      });

      });
    }

$scope.onFileSelect = function(files) {
  var ufile;
  alert('file selected');
    // console.log(image[0].name);
    // $scope.uploadObj.fileName=image[0].name;
  $scope.uploadInProgress = true;
  $scope.uploadProgress = 0;
  $scope.files = files;
/*  if (angular.isArray(files)) {
    ufile = files[0];
  }
  */
};


// Info window should have prev and next buttons if more images and get those if available from database from a particular location.
// Sort out date wise and display all images with default present date and display the date in info window along with image / video
// distinguish image / video handle accordingly in the logic as well info window and should as expected
// Comment option to user to give feedback about event and those should be displayed right panel of info window

	$scope.add = function(){
		console.log($scope.mapinfo);
    console.log('Files count: '+$scope.files.length)
    $scope.mapinfo.imagecount = $scope.files.length;
    if($scope.mapinfo.startDate >= $scope.mapinfo.endDate)
    {
      alert('Start Date shouldnot be greater than end Date');
      return;
    }
  $scope.upload = $upload.upload({
    url: '/mobile/files',
    method: 'POST',
    data: {
      type: $scope.files[0].type
    },
    file: $scope.files
  }).progress(function(event) {
    $scope.uploadProgress = "In Progress";
    // $scope.$apply();
  }).success(function(response,data, status, headers, config) {
    console.log(response);
    $scope.mapinfo.imageId = 'http://localhost:3000/mobile/image/'+response;
    $http.post('/mapinfo',$scope.mapinfo).success(function(response){
      console.log(response)
      $scope.mapinfo = '';
      alert('Added Successfully');
      window.location.href="http://localhost:3000/mapinfo/map";
    });
  }).error(function(err) {
    $scope.uploadInProgress = false;
    alert('Error uploading file: ' + err.message || err);
  }); 

  // alert($scope.mapinfo.startDate.getTime());
		
	}
});