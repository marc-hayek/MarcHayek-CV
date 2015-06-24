angular.module('app')

.factory('Contact',['$q',
	function($q){

		var Contact={
			getAll:function(){
				return [];
			}
		};

		return Contact;
}


]);