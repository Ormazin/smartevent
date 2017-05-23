angular.module('app.controllers', ['ngCordovaBeacon'])
     
.controller('homeCtrl', ['$scope', '$stateParams', '$rootScope', '$ionicPlatform', '$cordovaBeacon',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope, $ionicPlatform, $cordovaBeacon) {

	
    $scope.beacons = {};

    $ionicPlatform.ready(function() {

		
        $cordovaBeacon.requestWhenInUseAuthorization();

        $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
			
			
            var uniqueBeaconKey ,  my_major = 0, my_minor =0;
			
			if( pluginResult.beacons.length > 0 ){
				 my_major = pluginResult.beacons[0].major ;
				 my_minor = pluginResult.beacons[0].minor ;
			}
				

			
            $("#test_uuid").html(my_uuid);
			$("#test_major").html(my_major);
			$("#test_minor").html(my_minor);     
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
 