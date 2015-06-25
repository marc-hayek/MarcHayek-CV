angular.module('app')

.factory('Education',['$q',
	function($q){

		var Education={
			info:[
				{
					name:"American University of Beirut",
					degree:"Bachelor's in Electrical and Computer Engineering",
					date:"2008-2012",
					total_gpa:3.34,
					major_gpa:3.42,
					honors:"Dean's Honor List: Spring 08/09, Fall 11/12"
				},
				{
					name:"International College",
					degree:"Lebanese Baccalaureate, General Sciences",
					date:"1993-2008",
					total_gpa:"",
					marjor_gpa:"",
					honors:""
				}
			],
			getAll:function(){
				return this.info;
			}
		};

		return Education;
}


]);