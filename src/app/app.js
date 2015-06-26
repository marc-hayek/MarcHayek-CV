angular.module( 'app', [
  'templates-app',
  'ui.bootstrap',
  'app.home',
  'app.about',
  'app.contact',
  'app.education',
  'app.projects',
  'app.skills',
  'app.work',
  'ngAnimate',
  'angular-timeline',
  'angular-scroll-animate'
])

.config(['$stateProvider','$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
}])

.run( function run () {
})

.controller( 'AppController',['$scope','$location',function( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | app' ;
    }
  });
}]);

