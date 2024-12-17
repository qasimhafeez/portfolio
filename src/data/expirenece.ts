interface experienceI {
	title: string
	content: {
		workingAsA: string
		workDuration: string
		workLocation: string
		website?: string
		learned: string[]
	}
}

export const experience: experienceI[] = [
	{
		title: "Emirates NBD",
		content: {
			workingAsA: "Senior Software Engineer",
			workDuration: "Sep 2022 - Present",
			workLocation: "UAE",
			website: "https://emiratesnbd.com/",
			learned: [
				"Developed and optimized APIs using Node.js and TypeScript for various crypto-related services within a microservices architecture.",
"Implemented a Reconciliation system for cash and transaction flows, ensuring accurate financial data processing with scheduled automation.",
"Built and maintained services for handling Crypto Market Data, including real-time price feeds and account transactions.",
"Integrated Kafka for notifications and messaging between microservices, improving event-driven communication and reliability.",
"Conducted a proof-of-concept (PoC) for AI integration to enhance financial systems, exploring predictive analytics and automation using Hugging Face and LangChain",
"Collaborated with the team on additional microservices supporting crypto buy and sell functionalities.",
"Configured webhooks to facilitate communication with external services, improving data synchronization across platforms.",
			],
		},
	},
	{
		title: "Deriv",
		content: {
			workingAsA: "Software Engineer",
			workDuration: "Oct 2022 - Aug 2024",
			workLocation: "UAE",
			website: "https://deriv.com/",
			learned: [
				"Collaborated with quant and trading teams to develop Sharkfin and Accumulators Trading Options using Golang, enhancing service communication and scalability with gRPC.",
				"Enhanced websocket layer efficiency and improved RPC performance by strategically reducing dependencies.",
"Transitioned from traditional RPC to gRPC, significantly boosting system efficiency and effectiveness across distributed computing networks.",
"Augmented trading performance and user experience through gRPC integration, enhancing event tracking, logging, and comprehensive monitoring.",
"Managed PostgreSQL databases with Golang, adding and modifying tables to support new features.",
"Implemented essential features in DTrader, leveraging gRPC for inter-service communication to enhance functionality.",
"Upgraded backoffice with core Risk Management features, collaborating with quants to meet requirements and boost efficiency.",
"Developed new features across multiple services with Golang, enhancing system scalability.",
"Optimized pricing service caching, significantly improving performance and reducing response times to enhance user experience.",
			],
		},
	},
	{
		title: "Zain Telecom.",
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
				"Document all related work per company’s methodology.",
			],
		},
	},
	{
		title: "Blue Raven Inc.",
		content: {
			workingAsA: "Full Stack Engineer",
			workDuration: "May 2018 - Jan 2020",
			website: "http://blueraveninc.com/",
			workLocation: "Pakistan",
			learned: [
				"Successfully developed a comprehensive B2B e-commerce store with a wide array of features, including product recommendation algorithms, robust payment gateway integration, meticulous product catalog management, streamlined order processing, and a seamless delivery module.",
				"Acted as a Backend Engineer, contributing significantly to a garage management system project. My role involved the creation of RESTful APIs and the development of key modules such as garage booking, invoice management, and the generation of comprehensive reports to enhance operational efficiency.",
				"Demonstrated versatility through a diverse project portfolio, which encompasses web scraping initiatives, data analytics projects utilizing advanced libraries such as NumPy, Pandas, and Matplotlib, and the adept creation of custom plugins, themes, and dynamic web applications for WordPress. These projects are now live and accessible on the internet.",
			],
		},
	},
]
