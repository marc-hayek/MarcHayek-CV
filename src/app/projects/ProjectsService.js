angular.module('app')

.factory('Projects',['$q',
	function($q){

		var Projects={
			getAll:function(){
				return [];
			}
		};

		return Projects;
}


]);