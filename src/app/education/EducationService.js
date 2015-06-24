angular.module('app')

.factory('Education',['$q',
	function($q){

		var Education={
			getAll:function(){
				return [];
			}
		};

		return Education;
}


]);