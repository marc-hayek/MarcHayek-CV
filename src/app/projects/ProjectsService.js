angular.module('app')

.factory('Projects',['$q',
	function($q){

		var Projects={
			info:[
				{
					name:"Et3arraf",
					description:"Et3arraf is an online matchmaking platform, adapted specifically for the Arab world",
					tools:"Web Engineering",
					imageURL:"assets/img/et3arraf.png",
					githubURL:"",
					demoURL:"https://www.et3arraf.com/"
				},
				{
					name:"Bumper Jumper",
					description:"Developed a multiplayer HTML5 game where players race and battle for points",
					tools:"HTML5, Phaser Game Engine, Web Games",
					imageURL:"assets/img/bumper.png",
					githubURL:"",
					demoURL:"http://www.marchayek.me/static/bumper-jumper/index.html"
				},
				{
					name:"Gobbler Game",
					description:"Developed a small arcade style web game where the player collects falling food and shoots them back at enemies",
					tools:"JavaScript, HTML5, Web Games",
					imageURL:"assets/img/gobblegame.png",
					githubURL:"https://github.com/marc-hayek/Gobble-Game",
					demoURL:"http://www.marchayek.me/static/gobble/index.html"
				},
				{
					name:"Web Server",
					description:"Built a multi-threaded functioning HTTP web server which processes requests and returns basic as well as dynamic web pages",
					tools:"Java, Networks",
					imageURL:"assets/img/server.png",
					githubURL:"https://github.com/marc-hayek/HTTP-Web-Server",
					demoURL:""
				},
				{
					name:"Car Repair Service",
					description:"Built a console application which reads, stores, and processes user requests for car maintenance and repair",
					tools:"C++, Data Structures",
					imageURL:"assets/img/car-service.png",
					githubURL:"https://github.com/marc-hayek/Car-Repair-Shop-Project",
					demoURL:""
				},
				{
					name:"Error Shatter",
					description:"A small Chrome Extension I built for fun and to learn how to build and publish extensions. It makes the screen appear broken and makes a glass shattering sound if there is any error in the console",
					tools:"CHROME EXTENSIONS",
					imageURL:"assets/img/shatter.png",
					githubURL:"https://github.com/marc-hayek/Error-Shatter",
					demoURL:"https://chrome.google.com/webstore/detail/error-shatter/kfhbncpneonghiecgplhgdkfkfiddjde"
				}
				
				

			],
			getAll:function(){
				return this.info;
			}
		};

		return Projects;
}


]);