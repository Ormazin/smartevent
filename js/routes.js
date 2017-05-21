angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.events', {
    url: '/events',
    views: {
      'tab3': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('tabsController.favorites', {
    url: '/Favorite',
    views: {
      'tab2': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })
  
  
    .state('tabsController.logout', {
    url: '/logout',
    views: {
      'tab4': {
        templateUrl: 'templates/logout.html',
        controller: 'logoutCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.showBooth'
      2) Using $state.go programatically:
        $state.go('tabsController.showBooth');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs/tab1/showbooth
      /tabs/tab2/showbooth
      /tabs/tab3/showbooth
  */
  .state('tabsController.showBooth', {
    url: '/showbooth',
    views: {
      'tab1': {
        templateUrl: 'templates/showBooth.html',
        controller: 'showBoothCtrl'
      },
      'tab2': {
        templateUrl: 'templates/showBooth.html',
        controller: 'showBoothCtrl'
      },
      'tab3': {
        templateUrl: 'templates/showBooth.html',
        controller: 'showBoothCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.boothList'
      2) Using $state.go programatically:
        $state.go('tabsController.boothList');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs/tab1/booth list
      /tabs/tab3/booth list
  */
  .state('tabsController.boothList', {
    url: '/booth list',
    views: {
      'tab1': {
        templateUrl: 'templates/boothList.html',
        controller: 'boothListCtrl'
      },
      'tab3': {
        templateUrl: 'templates/boothList.html',
        controller: 'boothListCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/tabs/home')


});