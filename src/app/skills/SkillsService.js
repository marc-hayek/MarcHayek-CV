angular.module('app')

.factory('Skills',['$q',
	function($q){

	var Skills={
			skillSet:{
				"Compiled Languages":[
					{
						name:"C++/C#",
						proficiency:0.5
					},
					{
						name:"Java",
						proficiency:0.5
					},
				],
				"Web Development":[
					{
						name:"Javascript",
						proficiency:0.5
					},
					{
						name:"JQuery",
						proficiency:0.5
					},
					{
						name:"MySQL",
						proficiency:0.5
					},
					{
						name:"PHP",
						proficiency:0.5
					},
					{
						name:"NodeJS",
						proficiency:0.5
					},
					{
						name:"HTML/CSS",
						proficiency:0.5
					},
				],
				"Tools and Frameworks":[
					{
						name:"Codigniter",
						proficiency:0.5
					},
					{
						name:"Backbone JS",
						proficiency:0.5
					},
					{
						name:"Angular JS",
						proficiency:0.5
					},
					{
						name:"Git",
						proficiency:0.5
					},
					{
						name:"Redis",
						proficiency:0.5
					},
					{
						name:"Linux",
						proficiency:0.5
					},
					{
						name:"AWS (EC2,S3,SQS,RDS)",
						proficiency:0.5
					}
				],
				"Languages":[
					{
						name:"English",
						proficiency:0.5
					},
					{
						name:"Arabic",
						proficiency:0.5
					},
					{
						name:"French",
						proficiency:0.5
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