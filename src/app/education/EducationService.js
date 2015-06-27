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
					honors:"Dean's Honor List: Spring 08/09, Fall 11/12",
					logoURL:"assets/img/aub.png",
					courses:"Database Systems; Data Structures and Algorithms; Computer Networks; Cryptography and Computer Security; Software Engineering; Computer Architecture"
				},
				{
					name:"International College",
					degree:"Lebanese Baccalaureate, General Sciences",
					date:"1993-2008",
					total_gpa:"",
					marjor_gpa:"",
					honors:"",
					logoURL:"assets/img/ic.jpg"
				}
			],
			getAll:function(){
				return this.info;
			}
		};

		return Education;
}


]);