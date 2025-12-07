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
			"Developed and maintained a dynamic web platform for hosting mentor-led programs, designed to support both short- and long-term learning engagements.",
			"Implemented robust frontend architecture using modern frameworks to support features such as curriculum management, program creation, group and forum segmentation, and real-time video conferencing with screen sharing.",
			"Built and integrated custom components to support seamless video meetings, live group calls, and collaborative learning spaces within mentor-led programs.",
			"Engineered a flexible role-based access control (RBAC) system to distinctly manage permissions for admins, mentors, and students, enhancing platform security and user experience.",
			"Collaborated closely with designers, backend developers, and product teams to deliver intuitive and scalable UI/UX solutions aligned with business goals.",
			"Ensured full responsiveness and cross-device compatibility while optimizing performance for rich, interactive experiences.",
		],
	},
	{
		title: "Frontend Developer",
		company_name: "MentorMeInTech",
		icon: mmit,
		iconBg: "#000000",
		date: "January 2024 - December 2024",
		points: [
			"Designed and implemented scalable frontend architecture for the Mentormeintech web application, ensuring efficient performance and seamless feature integration.",
			"Implemented calendar availability and mentor session booking features, enhancing scheduling efficiency and user engagement.",
			"Implemented responsive design principles for optimal user experience across diverse devices.",
			"Collaborated closely with backend developers to ensure seamless integration and enhanced functionality.",
		],
	},
	{
		title: "Software Developer",
		company_name: "Gurugeeks Royalty",
		icon: gurugeeks,
		iconBg: "#ffffff",
		date: "June 2024 - September 2024",
		points: [
			"Led a team of developers to successfully rebuild the company website from the ground up using Next.js, resulting in improved performance, enhanced user experience, and streamlined maintenance.",
			"Spearheaded the development of an online academy platform, collaborating closely with backend developers, UI/UX designers, project managers, and product managers to deliver a fully functional and user-friendly learning management system.",
			"Managed and fulfilled client requests, overseeing the development of new pages, features, and customizations on the client's website using WordPress, ensuring timely delivery and client satisfaction.",
			"Collaborated with cross-functional teams to align technical solutions with business needs, implementing microservices-like practices for managing user authentication, course management, and analytics as independent modules.",
			"Coordinated with DevOps engineers to troubleshoot deployment issues, ensuring compatibility between various service layers.",
		],
	},
	{
		title: "Mobile App Developer",
		company_name: "Dokta Health",
		icon: dokta,
		iconBg: "#ffffff",
		date: "April 2024 - July 2024",
		points: [
			"Optimized the mobile application architecture for enhanced performance on both iOS and Android platforms.",
			"Collaborated with cross-functional teams to implement new features and improve existing ones, ensuring a seamless user experience.",
			"Optimized application performance for both Android and iOS platforms, improving load times and responsiveness.",
			"Integrated RESTful APIs to facilitate communication between mobile app modules and backend services, adhering to microservices principles.",
			"Regularly updated the application to ensure compatibility with the latest mobile operating systems and devices.",
			"Worked with the team to troubleshoot and resolve issues efficiently.",
		],
	},
	{
		title: "Software Developer",
		company_name: "Freelancer",
		icon: freelance,
		iconBg: "#E6DEDD",
		date: "January 2022 - December 2023",
		points: [
			"Designed and implemented scalable web applications using the MERN stack, incorporating reusable components and ensuring maintainability.",
			"Built RESTful APIs and database schemas, aligning with principles of distributed systems and modular design.",
			"Implemented security measures to protect websites and applications from potential vulnerabilities, ensuring a secure user experience",
			"Ensured secure database management systems using MongoDB and PostgreSQL.",
			"Demonstrated a strong ability to debug code, identify and resolve technical issues to maintain project timelines and minimize downtime.",
			"Implemented responsive design and ensuring cross-browser compatibility.",
			"Created email templates with responsive design and cross-platform compatibility.",
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
