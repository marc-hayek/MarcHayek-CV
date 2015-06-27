angular.module('app.home',['ui.router','templates-app'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views : {
      'main@' : {
        templateUrl : 'home/home.tpl.html',
        controller : 'HomeController',
        resolve:{
          contactInstance :['Contact', function(Contact){
            return Contact.getAll();
          }]
        }
      }
    },
    data:{ pageTitle: 'Home' }
  });
}])
.controller('HomeController',['$scope','$rootScope','contactInstance',
  function($scope,$rootScope,contactInstance){
    $scope.contactInfo=contactInstance;
}]);