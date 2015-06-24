angular.module('app')

.factory('Work',['$q',
	function($q){

		var Work={
			getAll:function(){
				return [];
			}
		};

		return Work;
}


]);