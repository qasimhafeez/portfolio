interface experienceI {
	title: string
	content: {
		workingAsA: string
		workDuration: string
		learned: string[]
	}
}

export const experience: experienceI[] = [
	{
		title: "Deriv",
		content: {
			workingAsA: "Senior Software Engineer",
			workDuration: "Oct 2022 - Present",
			workLocation: "UAE",
			website: "https://deriv.com/",
			learned: [
				"Collaborated with multiple servers to optimize trading performance and enhance the user experience, leveraging various tools and technologies.",
				"Implemented event tracking and logging using DataDog, seamlessly integrating it with the trading application for comprehensive monitoring and analysis.",
				"Made modifications to existing databases in PostgresSQL, including adding and modifying tables, to support the integration of new features and ensure efficient data management.",
				"Developed and added essential features in D-Trader to enhance its production functionality and provide a seamless trading experience.",
				"Enhanced the backoffice by adding core features and closely collaborating with the quants team to meet their specific requirements and improve overall efficiency.",
				"Implemented new features across various services, improving their functionality and expanding the capabilities of the trading ecosystem.",
				"Optimized caching on the pricing service, significantly improving performance and reducing response times for better user experience."
			],
		},
	},
	{
		title: "Zain Telecommunications",
		content: {
			workingAsA: "Software Engineer",
			workDuration: "Feb 2020 - Sep 2022",
			workLocation: "UAE",
			learned: [
				"Developing recharged based application portal by using major distributer APIs.",
				"Working on Local and International recharge suppliers and creating RESTFUL APIs and micro-services.",
				"Built a payment gateway for sending recharge from card to different users.",
				"Developed and maintained their existing portal and added different features to it and made it 30% faster and efficient.",
				"Develop web apps using CI/CD tools like: GitHub, docker and kubernetes.",
				"Code optimization and load balancing using docker, kubernetes, NGINX.",
				"Contribute to robust and scalable software architecture.",
				"Document all related work per company’s methodology."
			],
		},
	},
	{
		title: "Blue Raven Inc.",
		content: {
			workingAsA: "Full Stack Engineer",
			workDuration: "May 2018 - Jan 2020",
			website: "http://blueraveninc.com/",
			workLocation: "UAE",
			learned: [
				"Successfully developed a comprehensive B2B e-commerce store with a wide array of features, including product recommendation algorithms, robust payment gateway integration, meticulous product catalog management, streamlined order processing, and a seamless delivery module.",
				"Acted as a Backend Engineer, contributing significantly to a garage management system project. My role involved the creation of RESTful APIs and the development of key modules such as garage booking, invoice management, and the generation of comprehensive reports to enhance operational efficiency.",
				"Demonstrated versatility through a diverse project portfolio, which encompasses web scraping initiatives, data analytics projects utilizing advanced libraries such as NumPy, Pandas, and Matplotlib, and the adept creation of custom plugins, themes, and dynamic web applications for WordPress. These projects are now live and accessible on the internet.",
			],
		},
	},
]
