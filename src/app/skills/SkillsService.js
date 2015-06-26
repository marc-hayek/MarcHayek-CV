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
						proficiency:70
					},
					{
						name:"JQuery",
						proficiency:70
					},
					{
						name:"MySQL",
						proficiency:70
					},
					{
						name:"PHP",
						proficiency:70
					},
					{
						name:"NodeJS",
						proficiency:50
					},
					{
						name:"HTML/CSS",
						proficiency:70
					},
				],
				"Tools and Frameworks":[
					{
						name:"Codigniter",
						proficiency:70
					},
					{
						name:"Backbone JS",
						proficiency:50
					},
					{
						name:"Angular JS",
						proficiency:70
					},
					{
						name:"Git",
						proficiency:60
					},
					{
						name:"Redis",
						proficiency:70
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
						proficiency:100
					},
					{
						name:"Arabic",
						proficiency:90
					},
					{
						name:"French",
						proficiency:30
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