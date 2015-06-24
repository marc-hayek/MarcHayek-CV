angular.module('app.home',['ui.router','templates-app'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views : {
      'main@' : {
        templateUrl : 'home/home.tpl.html',
        controller : 'HomeController',
      }
    },
    data:{ pageTitle: 'Home' }
  });
}])
.controller('HomeController',['$scope','$rootScope',
  function($scope,$rootScope){

}]);