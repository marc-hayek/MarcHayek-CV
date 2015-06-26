angular.module('app.projects',['ui.router','templates-app','ngAnimate'])

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
		$scope.list=projectsInstance;

		$scope.selectedProject=-1;

		$scope.setSelected=function(selectedIndex){
			$scope.selectedProject=selectedIndex;
		};

		$scope.resetSelected=function(){
			$scope.selectedProject=-1;
		};
}]);