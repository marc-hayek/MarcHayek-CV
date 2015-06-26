angular.module('app')

.factory('Work',['$q',
	function($q){

		var Work={
			info:[
				{
					company_name:"Et3arraf.com",
					position:"Software Engineer",
					date:"October 2013 - Present",
					logo:"assets/img/et3arraf-logo.png",
					accomplishments:[
						"Responsible for the planning, development, and implementation of the web platform (front-end + back-end), as well as database and system administration for one of the fastest growing social network startups in the Middle East, serving over 210,000 registered users.",
						"Implemented a complete redesign of the front-end and the back-end of the web platform. Executed the successful migration from the Backbone JS framework to Angular JS in less than a month.",
						"Redesigned and built a new scalable real-time chat system, currently housing over 5 million messages sent, in less than two months. Increased efficiency of the system by 90% and decreased cost by 70% compared to previous system.",
						"Designed and developed a custom analytics tool to gather and quantify user activity and identify areas of improvement to the web platform and customer experience."
					],
				},
				{
					company_name:"Et3arraf.com",
					position:"Part Time Developer",
					date:"March 2013 - June 2013",
					logo:"assets/img/et3arraf-logo.png",
					accomplishments:[
						"Built a prototype mobile app using Backbone JS and Phonegap."
					],
				},
				{
					company_name:"Expeditors International",
					position:"Management Training Program",
					date:"October 2012 - October 2013",
					logo:"assets/img/Expeditors-logo.png",
					accomplishments:[
						"One of 3 people selected from over 200 candidates to join Expeditors' leadership and management rotational program at EMAIR regional HQ in Beirut. Held rotational positions in sales, warehousing and distribution, import/export operations.",
						"Due to heightened security situation (civil unrest), supervised and coordinated an emergency warehouse relocation. Oversaw a team of 12 pick, pack, move, and reconcile entire stock to a new 3rd party warehouse, while continuing to take and ship orders. Ensured reconciliation and digitization of all items into the new warehouse system in 3 days.",
						"Trained new employees on system and company procedures within 2 months of joining the company."
					],
				},
				{
					company_name:"Petrofac Engineering and Construction",
					position:"Electrical Engineer, Intern",
					date:"July 2011 - August 2011",
					logo:"assets/img/petrofac-logo.jpg",
					accomplishments:[
						"Supervised the installation of various electrical equipment and modules across the site while ensuring that proper safety precautions were followed."
					],
				}
			],
			getAll:function(){
				return this.info;
			}
		};

		return Work;
}


]);