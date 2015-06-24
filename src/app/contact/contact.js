angular.module('app.contact',['ui.router','templates-app'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('contact', {
		url: '/contact',
		views : {
			'main@' : {
				templateUrl : 'contact/contact.tpl.html',
				controller : 'ContactController',
				resolve:{
					contactInstance :['Contact', function(Contact){
						return Contact.getAll();
					}]
				}
			}
		},
		data:{ pageTitle: 'Contact' }
	});
}])
.controller('ContactController',['$scope','$rootScope','contactInstance',
	function($scope,$rootScope,contactInstance){

}]);