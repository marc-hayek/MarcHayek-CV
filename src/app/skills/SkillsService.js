angular.module('app')

.factory('Skills',['$q',
	function($q){

	var Skills={
			skillSet:{
				"Compiled Languages":[
					{
						name:"C++/C#",
						proficiency:50
					},
					{
						name:"Java",
						proficiency:50
					},
				],
				"Web Development":[
					{
						name:"Javascript",
						proficiency:50
					},
					{
						name:"JQuery",
						proficiency:50
					},
					{
						name:"MySQL",
						proficiency:50
					},
					{
						name:"PHP",
						proficiency:50
					},
					{
						name:"NodeJS",
						proficiency:50
					},
					{
						name:"HTML/CSS",
						proficiency:50
					},
				],
				"Tools and Frameworks":[
					{
						name:"Codigniter",
						proficiency:50
					},
					{
						name:"Backbone JS",
						proficiency:50
					},
					{
						name:"Angular JS",
						proficiency:50
					},
					{
						name:"Git",
						proficiency:50
					},
					{
						name:"Redis",
						proficiency:50
					},
					{
						name:"Linux",
						proficiency:50
					},
					{
						name:"AWS (EC2,S3,SQS,RDS)",
						proficiency:50
					}
				],
				"Languages":[
					{
						name:"English",
						proficiency:50
					},
					{
						name:"Arabic",
						proficiency:50
					},
					{
						name:"French",
						proficiency:50
					}
				]
			},
			getAll:function(){
				return this.skillSet;
			}
		};

		return Skills;
}


]);