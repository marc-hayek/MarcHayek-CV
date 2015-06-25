angular.module('app')

.factory('Projects',['$q',
	function($q){

		var Projects={
			info:[
				{
					name:"Et3arraf",
					description:"Et3arraf is an online matchmaking platform, adapted specifically for the Arab world",
					tools:"Web Engineering",
					imageURL:"",
					githubURL:"",
					demoURL:"https://www.et3arraf.com/"
				},
				{
					name:"Web Server",
					description:"Built a multi-threaded functioning HTTP web server which processes requests and returns basic as well as dynamic web pages",
					tools:"Java, Networks",
					imageURL:"",
					githubURL:"https://github.com/marc-hayek/HTTP-Web-Server",
					demoURL:""
				},
				{
					name:"Car Repair Service",
					description:"Built a console application which reads, stores, and processes user requests for car maintenance and repair",
					tools:"C++, Data Structures",
					imageURL:"",
					githubURL:"https://github.com/marc-hayek/Car-Repair-Shop-Project",
					demoURL:""
				},
				{
					name:"Gobbler Game",
					description:"Developed a small arcade style web game where the player collects falling food and shoots them back at enemies",
					tools:"JavaScript, HTML5, Web Games",
					imageURL:"",
					githubURL:"https://github.com/marc-hayek/Gobble-Game",
					demoURL:"http://www.marchayek.me/static/gobble/index.html"
				},
				{
					name:"Bumper Jumper",
					description:"Developed a multiplayer HTML5 game where players race and battle for points",
					tools:"HTML5, Phaser Game Engine, Web Games",
					imageURL:"",
					githubURL:"",
					demoURL:"http://www.marchayek.me/static/bumper-jumper/index.html"
				}

			],
			getAll:function(){
				return this.info;
			}
		};

		return Projects;
}


]);