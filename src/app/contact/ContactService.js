angular.module('app')

.factory('Contact',['$q','$http',
	function($q,$http){

		var Contact={
			getAll:function(){
				return [];
			},

			sendEmail:function(variables){
				$http({
					method  : 'POST',
					url     : '/postEmail',
	                data    : $.param(variables.formData),  //param method from jQuery
	                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
	            }).success(function(data){
	                if (data.success) { //success comes from the return json object
	                	variables.submitButtonDisabled = true;
	                	variables.resultMessage = data.message;
	                	variables.result='bg-success';
	                } else {
	                	variables.submitButtonDisabled = false;
	                	variables.resultMessage = data.message;
	                	variables.result='bg-danger';
	                }
	            }).error(function(err){
	            	variables.submitButtonDisabled = false;
	                variables.resultMessage = "A Server Error Has Occured, Please Try Again Later";
	                variables.result='bg-danger';
	            });
        }
    };

    return Contact;
}


]);