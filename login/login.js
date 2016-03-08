angular.module('login', [])
.controller('loginController',function ($scope, $state, Auth) {
  $scope.username = '';
  $scope.password = '';
  $scope.failed = Auth;

  $scope.login = function () {
    Auth.login($scope.username, $scope.password)
    $scope.username = '';
    $scope.password = '';
  }
});
