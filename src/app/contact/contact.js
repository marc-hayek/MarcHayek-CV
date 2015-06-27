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
.controller('ContactController',['$scope','$rootScope','contactInstance','Contact',
	function($scope,$rootScope,contactInstance,Contact){
	$scope.contactInfo=contactInstance;
	$scope.variables={
		result:"",
		resultMessage:"",
		formData:{},
		submitButtonDisabled:false,
		submitted:false,
	};
	
    $scope.submit = function(contactform,e) {
  
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
        	Contact.sendEmail($scope.variables);
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed. Please fill out all the fields.';
            $scope.result='bg-danger';
        }
        e.preventDefault();
    };


}]);