angular.module('app')

.factory('Skills',['$q',
	function($q){

		var Skills={
			getAll:function(){
				return [];
			}
		};

		return Skills;
}


]);