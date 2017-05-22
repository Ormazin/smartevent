angular.module('app.controllers', ['ngCordovaBeacon'])
     
.controller('homeCtrl', ['$scope', '$stateParams', '$rootScope', '$ionicPlatform', '$cordovaBeacon',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope, $ionicPlatform, $cordovaBeacon) {

	
    $scope.beacons = {};

    $ionicPlatform.ready(function() {

		
        $cordovaBeacon.requestWhenInUseAuthorization();

        $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
			
			
            var uniqueBeaconKey;
			
			
            for(var i = 0; i < pluginResult.beacons.length; i++) {
                uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
                $scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
				
				$("#test_length").html(pluginResult.beacons.lengt);
				$("#test_uuid").html(pluginResult.beacons[i].uuid);
				$("#test_major").html(pluginResult.beacons[i].major);
				$("#test_minor").html(pluginResult.beacons[i].minor);
				$("#test_uniqueBeaconKey").html($scope.beacons[uniqueBeaconKey]);
				
				
            }
 
			
			$("#test_i").html($scope.beacons[i]);
			$("#test_out").html("out!");
            $scope.$apply();
			
			
			
			
        });
		
		
		

        $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("estimote", "8492E75F-4FD6-469D-B132-043FE94921D8"));

		
		

    });
	
	
	
	
  $scope.$on('$ionicView.enter', function(){
    events.active();events.prev();
    });
	
	
	
	
	$(".get_booth_show").click(function(){
		
	booth.arr_vote.unshift($(this).attr("data-booth_id"));
	booth.gets( $(this).attr("data-booth_id") );
	
 		
	});
	
	
		
	
	$(".get_booths_list").click(function(){
		
	booth.list( $(this).attr("data-event_id") );
	
 		
	});
	
  
	
	
	
	
}])


   
.controller('eventsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams ) {


	$("#loading").fadeIn();
	
	$scope.$on('$ionicView.enter', function(){
    events.list();
    });
	
 
		
	
	$(".get_booths_list").click(function(){
		
	booth.list( $(this).attr("data-event_id") );
	
 		
	});

}])
   
.controller('favoritesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	
	

}])
   
.controller('showBoothCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
 $("#loading").fadeIn();
	
	
		$("#vote_button").click(function(){
 	booth.vote( $(this).attr("data-booth_id") );
	
 		
	});
	
	
		$("#button-fav-booth").click(function(){
 	  fav.add( $(this).attr("data-booth_id") , $(this).attr("data-booth_name") );
	
 		
	});
	
	
	
}])
   
.controller('boothListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$("#loading").fadeIn();
	

	
	
		$(".get_booth_show").click(function(){
		
	booth.gets( $(this).attr("data-booth_id") );
	
 		
	});
	
 
	

}])

.controller('logoutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

 $scope.$on('$ionicView.enter', function(){
    
	 localStorage.setItem("login", "false");
			  $("#nonlogin_body").slideDown(300);  
			  location.href = '#/tabs/home';
	 
	 
    });
	

}])
 