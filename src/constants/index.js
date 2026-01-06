import {
	mobile,
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	threejs,
	mui,
	nextjs,
	nestjs,
	python,
	firebase,
	radicalx,
	hiLlo,
	youtube,
	weatherjournal,
	tictactoe,
	freelance,
	mmit,
	gurugeeks,
	dokta,
	ggacademy,
	doktaps,
	behive,
	mently,
	mentlypup,
	mmitsite,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	// {
	// 	id: "bio",
	// 	title: "My Bio",
	// },
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: web,
	},
	{
		title: "Mobile Developer",
		icon: mobile,
	},
	// {
	// 	title: "Backend Developer",
	// 	icon: backend,
	// },
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "Material UI",
		icon: mui,
	},
	{
		name: "Next JS",
		icon: nextjs,
	},
	{
		name: "Nest JS",
		icon: nestjs,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "Firebase",
		icon: firebase,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Frontend Developer",
		company_name: "Mently Technologies",
		icon: mentlypup,
		iconBg: "#000000",
		date: "December 2024 - Present",
		points: [
			"Led frontend development for the mentor-led platform; built course creation, curriculum editor, and in-app collaboration features used by over 2k users.",
			"Implemented and maintained Next.js + TypeScript frontend with SSR/ISR and dynamic imports, reducing time-to-interactive and FCP (improved TTI by 20%; decreased initial bundle size by ~ 25%).",
			"Built real-time learning features (video conferencing, live group calls, screen sharing) and integrated Pusher for signals; supported over 500 concurrent sessions.",
			"Designed and shipped an in-app, WhatsApp-style chat supporting group messaging, read receipts, media (image/video/file) uploads, and offline message sync used by over 1k users.",
			"Collaborated closely with designers, backend developers, and product teams to deliver intuitive and scalable UI/UX solutions aligned with business goals.",
			"Partnered with product & backend to ship features in 2-week sprints; authored component library and style system that reduced new page dev time by 25%.",
		],
	},
	{
		title: "Software Developer",
		company_name: "Gurugeeks Royalty",
		icon: gurugeeks,
		iconBg: "#ffffff",
		date: "June 2024 - November 2024",
		points: [
			"Led a 3-person team to rebuild the company site and academy using Next.js; improved Lighthouse performance score by 30+ points and reduced page load by ~53%.",
			"Architected LMS modules (auth, course management, analytics) as decoupled services; cut deployment rollback frequency by ~60% and simplified testing/deployment.",
			"Managed and fulfilled client requests, overseeing the development of new pages, features, and customizations on the client's website using WordPress, ensuring timely delivery and client satisfaction.",
			"Delivered client customizations on WordPress, handling ~5 client requests/month and improving client satisfaction/turnaround time (average delivery time 3 days).",
			"Coordinated with DevOps to resolve CI/CD and environment issues, reducing average deployment downtime.",
		],
	},
	{
		title: "Mobile App Developer",
		company_name: "Dokta Health",
		icon: dokta,
		iconBg: "#ffffff",
		date: "Febuary 2024 - June 2024",
		points: [
			"Optimized React Native app architecture for iOS & Android; reduced cold start time by ~45%, improving retention on first session.",
			"Integrated RESTful APIs and improved offline handling/caching strategies, reducing API error surface and improving perceived app reliability.",
			"Optimized application performance for both Android and iOS platforms, improving load times and responsiveness.",
			"Implemented feature work (booking flows, push notifications, in-app ecommerce) that increased user signups by 30%.",
			"Maintained compatibility across OS updates and device families; triaged & fixed high-priority crashes, lowering crash rate.",
		],
	},
	{
		title: "Frontend Developer",
		company_name: "MentorMeInTech",
		icon: mmit,
		iconBg: "#000000",
		date: "January 2023 - Febuary 2024",
		points: [
			"Designed and shipped scalable frontend for mentor matching and scheduling; launched calendar & session booking that increased successful bookings by ~60%.",
			"Implemented calendar availability and mentor session booking features, enhancing scheduling efficiency and user engagement.",
			"Collaborated with backend to design APIs and reduce payload sizes, lowering average API response time.",
			"Introduced client-side form validation and UX improvements that reduced user drop-off in booking flow.",
		],
	},
	{
		title: "Web Developer Intern",
		company_name: "RadicalX",
		icon: radicalx,
		iconBg: "#383E56",
		date: "September 2022 - December 2022",
		points: [
			"Collaborated with a team of developers to create a fully functional internship website using React js and Node js.",
			"Translated Figma designs into responsive front-end components and implemented back-end functionalities including handling HTTP requests, managing databases, and server-side.",
			"Worked with team of designers, developers, and project managers and participated in Agile-based project management, contributing to sprint planning, and retrospective meetings.",
		],
	},
];

const projects = [
	{
		name: "Mently",
		description:
			"An all-in-one platform for mentorships, programs, trainings, and building impactful communities.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "zustand",
				color: "green-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "pink-text-gradient",
			},
			{
				name: "pusher",
				color: "blue-text-gradient",
			},
			{
				name: "agora",
				color: "green-text-gradient",
			},
			{
				name: "firebase",
				color: "pink-text-gradient",
			},
		],
		image: mently,
		project_link: "https://mymently.com/",
	},
	{
		name: "MentorMeInTech Platform",
		description:
			"An online learning platform offering tech courses, designed with a user-friendly interface and efficient learning management features.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "redux",
				color: "green-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "pink-text-gradient",
			},
			{
				name: "javascript",
				color: "blue-text-gradient",
			},
			{
				name: "materialUI",
				color: "green-text-gradient",
			},
			{
				name: "framermotion",
				color: "pink-text-gradient",
			},
		],
		image: mmitsite,
		project_link: "https://mentormeintech.com/",
	},
	{
		name: "Gurugeeks Academy",
		description:
			"An online learning platform offering tech courses, designed with a user-friendly interface and efficient learning management features.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "redux",
				color: "green-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "pink-text-gradient",
			},
		],
		image: ggacademy,
		project_link: "https://gurugeeksacademy.com/",
	},
	{
		name: "Dokta",
		description:
			"A telemedicine mobile application enabling users to consult with doctors remotely, offering free consultations and a seamless user experience.",
		tags: [
			{
				name: "reactnative",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "green-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "pink-text-gradient",
			},
		],
		image: doktaps,
		project_link:
			"https://play.google.com/store/apps/details?id=com.zanantis.doktaapp",
	},
	{
		name: "Behive",
		description: "A community and lifestyle hub.",
		tags: [
			{
				name: "wordpress",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: behive,
		project_link: "https://behiveng.com/",
	},
	{
		name: "Hi-Llo Chat App",
		description:
			"Web-based platform that allows users to search and chat with their friends and loved ones in realtime.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "green-text-gradient",
			},
			{
				name: "sass",
				color: "pink-text-gradient",
			},
		],
		image: hiLlo,
		source_code_link: "https://github.com/mruqqie/Hi-Llo",
		project_link: "https://mruqqie.github.io/Hi-Llo",
	},
	// {
	// 	name: "Weather Journal",
	// 	description:
	// 		"A web application that provides weather and temperature conditions of a location (zip code) to users.",
	// 	tags: [
	// 		{
	// 			name: "nodejs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: weatherjournal,
	// 	source_code_link: "https://github.com/mruqqie/Weather-journal-app",
	// },
	{
		name: "TicTacToe",
		description:
			"Dive into timeless fun with our sleek web-based Tic-Tac-Toe game. Challenge friends or enjoy a quick match against the computer. Simple, strategic, and endlessly entertaining!",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tictactoe,
		source_code_link: "https://github.com/mruqqie/tictactoe",
		project_link: "https://mruqqie.github.io/tictactoe/",
	},
	// {
	// 	name: "Youtube Clone",
	// 	description:
	// 		"Allows users to experience a familiar world of video content with seamless video streaming.",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "materialUI",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: youtube,
	// 	source_code_link: "https://github.com/mruqqie/youtube_clone",
	// 	project_link: "https://mruqqie.github.io/youtube_clone/",
	// },
];

export { services, technologies, experiences, projects };
