angular.module('services', [])
  .factory('Auth', function() {

    var login = function (username, password) {
      if(username === 'mdboop' && password === 'test') {
        console.log('logged in!');
        this.loggedIn = true;
        return true;
      } else {
        console.log('not logged in');
        this.loggedIn = false;
        this.failedLogin = true;
        return false;
      }
    }

    return {
      login: login,
      loggedIn: false,
      failedLogin: false
    };

  });
