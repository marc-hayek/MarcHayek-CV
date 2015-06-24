angular.module('app.projects',['ui.router','templates-app'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('projects', {
		url: '/projects',
		views : {
			'main@' : {
				templateUrl : 'projects/projects.tpl.html',
				controller : 'ProjectsController',
				resolve:{
					projectsInstance :['Projects', function(Projects){
						return Projects.getAll();
					}]
				}
			}
		},
		data:{ pageTitle: 'Projects' }
	});
}])
.controller('ProjectsController',['$scope','$rootScope','projectsInstance',
	function($scope,$rootScope,projectsInstance){
}]);