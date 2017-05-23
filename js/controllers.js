angular.module('app.controllers', ['ngCordovaBeacon'])
     
.controller('homeCtrl', ['$scope', '$stateParams', '$rootScope', '$ionicPlatform', '$cordovaBeacon',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope, $ionicPlatform, $cordovaBeacon) {

	
    $scope.beacons = {};

    $ionicPlatform.ready(function() {

		
        $cordovaBeacon.requestWhenInUseAuthorization();

        $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
			
			
            var uniqueBeaconKey , my_uuid, my_major, my_minor;
			
			
            for(var i = 0; i < pluginResult.beacons.length; i++) {
				
                uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
                $scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
				
				if( typeof  pluginResult.beacons[i].uuid !== 'undefined' )
				my_uuid = pluginResult.beacons[i].uuid;
				else "No uuid";
				
				if( typeof  pluginResult.beacons[i].major !== 'undefined' )
				my_major = pluginResult.beacons[i].major;
				else "No major";
				
				if( typeof  pluginResult.beacons[i].minor !== 'undefined' )
				my_minor = pluginResult.beacons[i].minor;
				else "No minor";
				
				
				$("#test_uuid"+i).html(my_uuid);
				$("#test_major"+i).html(my_major);
				$("#test_minor"+i).html(my_minor);
				
				
            }
 
            $("#test_length").html(pluginResult.beacons.length);
			$("#test_i").html(i);
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
 