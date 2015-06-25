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
		data:{ pageTitle: 'skills' }
	});
}])
.controller('SkillsController',['$scope','$rootScope','skillsInstance',
	function($scope,$rootScope,skillsInstance){
		$scope.list=skillsInstance;
}]);