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
		data:{ pageTitle: 'Employment' }
	});
}])
.controller('WorkController',['$scope','$rootScope','$window','workInstance',
	function($scope,$rootScope,$window,workInstance){
		$window.scrollTo(0,0);
		$scope.list=workInstance;

		$scope.animateElementIn = function($el) {
			$el.removeClass('hidden');
			$el.addClass('bounce-in');
		};

		$scope.animateElementOut = function($el) {
			$el.addClass('hidden');
			$el.removeClass('bounce-in');
		};

		$scope.scrollUp=function(){
			$window.scrollTo(0,0);
		};
}]);