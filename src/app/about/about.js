angular.module('app.about',['ui.router','templates-app'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('about', {
    url: '/about',
    views : {
      'main@' : {
        templateUrl : 'about/about.tpl.html',
        controller : 'AboutController',
      }
    },
    data:{ pageTitle: 'About Me' }
  });
}])
.controller('AboutController',['$scope','$rootScope',
  function($scope,$rootScope){
}]);