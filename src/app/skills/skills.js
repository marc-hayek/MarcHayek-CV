angular.module('app.skills',['ui.router','templates-app'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('skills', {
		url: '/skills',
		views : {
			'main@' : {
				templateUrl : 'skills/skills.tpl.html',
				controller : 'SkillsController',
				resolve:{
					skillsInstance :['Skills', function(Skills){
						return Skills.getAll();
					}]
				}
			}
		},
		data:{ pageTitle: 'Skills' }
	});
}])
.controller('SkillsController',['$scope','$rootScope','skillsInstance','$window',
	function($scope,$rootScope,skillsInstance,$window){
		$scope.list=skillsInstance;
		$window.scrollTo(0,0);
}]);