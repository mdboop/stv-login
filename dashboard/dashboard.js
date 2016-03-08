angular.module('dashboard', [])
.controller('dashboardController', function ($scope, $location, Auth) {
  console.log(Auth.loggedIn);
  $scope.getClass = function (location) {
    var path = $location.path().split('/');
    path = path[path.length -1];
    return location === path ? 'active' : '';
  }
});
