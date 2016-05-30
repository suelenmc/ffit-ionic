// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('moviesApp', ['ionic', 'starter.controllers', 'movie', 'person'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppController'
    })

  .state('app.movies', {
    url: '/movies',
    views: {
      'menuContent': {
        templateUrl: 'js/components/movies/_movies.view.html',
        controller: 'MovieController'
      }
    }
  })

  .state('app.release', {
    url: '/release',
    views: {
      'menuContent': {
        templateUrl: 'js/components/movies/_movies.tobereleased.view.html',
        controller: 'MovieReleaseController'
      }
    }
  })

  .state('app.movie', {
    url: '/movie',
    params: {
      parametro: null
    },
    views: {
      'menuContent': {
        templateUrl: 'js/components/movies/_movies.show.view.html',
        controller: 'MovieShowController'
      }
    }
  })

  .state('app.people', {
    url: '/people',
    views: {
      'menuContent': {
        templateUrl: 'js/components/people/_people.view.html',
        controller: 'PersonController'
      }
    }
  })

  .state('app.person', {
    url: '/person',
    params: {
      parametro: null
    },
    views: {
      'menuContent': {
        templateUrl: 'js/components/people/_people.show.view.html',
        controller: 'PersonShowController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/movies');
});
