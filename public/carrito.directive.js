nueva.$inject = ['UserService'];

angular.module('app')
  .controller('carritoController', function (UserService) {
    var self = this;
    self.username; // undefined
    self.user = UserService.get_user();
    self.type = UserService.get_type();
    self.email = UserService.get_email();
    self.change_username = UserService.set_username;
  });

angular.module('app')
  .directive('userDirective', function(){

  return {
    restric: 'E',
    controller: 'carritoController',
    controllerAs: 'carritoCtrl',
    templateUrl: 'public/carrito.directive.html'
  }
});