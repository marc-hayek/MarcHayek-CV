angular.module('app.work',['ui.router','templates-app'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('work', {
		url: '/work',
		views : {
			'main@' : {
				templateUrl : 'work/work.tpl.html',
				controller : 'WorkController',
				resolve:{
					workInstance :['Work', function(Work){
						return Work.getAll();
					}]
				}
			}
		},
		data:{ pageTitle: 'Work' }
	});
}])
.controller('WorkController',['$scope','$rootScope','workInstance',
	function($scope,$rootScope,workInstance){
		$scope.list=workInstance;
}]);