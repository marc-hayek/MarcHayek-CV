angular.module('app.education',['ui.router','templates-app'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('education', {
		url: '/education',
		views : {
			'main@' : {
				templateUrl : 'education/education.tpl.html',
				controller : 'EducationController',
				resolve:{
					educationInstance :['Education', function(Education){
						return Education.getAll();
					}]
				}
			}
		},
		data:{ pageTitle: 'Education' }
	});
}])
.controller('EducationController',['$scope','$rootScope','educationInstance',
	function($scope,$rootScope,educationInstance){
		$scope.list=educationInstance;
}]);