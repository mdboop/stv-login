angular.module('app', [
  'ui.router',
  'services',
  'dashboard',
  'login'
  ]).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "login/login.html",
      controller: 'loginController',
      authenticate: false
    })
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html",
      controller: 'dashboardController',
      authenticate: true
    })
    .state('dashboard.profile', {
      url: '/profile',
      templateUrl: 'profile/profile.html',
      authenticate: true
    })
    .state('dashboard.friends', {
      url: '/friends',
      templateUrl: 'friends/friends.html',
      authenticate: true
    })
    .state('dashboard.feed', {
      url: '/feed',
      templateUrl: 'feed/feed.html',
      authenticate: true
    });

    $urlRouterProvider.otherwise( function ($injector) {
      var $state = $injector.get('$state');
      $state.go('login');
    });


})
.run(function ($rootScope, $location, $state, Auth) {
  $rootScope.$on('$stateChangeStart',
  function (event, toState, toParams, fromState, fromParams) {
    if(toState.name === 'login') {
      return;
    }
    if (toState.authenticate && !Auth.loggedIn) {
      $state.transitionTo('login');
      event.preventDefault();
    }
  });
});

