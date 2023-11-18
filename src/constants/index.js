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
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
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
		title: "Web Developer",
		company_name: "RadicalX",
		icon: radicalx,
		iconBg: "#383E56",
		date: "September 2022 - December 2022",
		points: [
			"Collaborated with a team of developers to create a fully functional internship website using React js and Node js.",
			"Translated Figma designs into responsive front-end components and implemented back-end functionalities including handling HTTP requests, managing databases, and server-side.",
			"Worked with team of designers, developers, and project managers and participated in Agile-based project management, contributing to sprint planning, and retrospective meetings",
		],
	},
	{
		title: "Web Developer",
		company_name: "Freelance",
		icon: freelance,
		iconBg: "#E6DEDD",
		date: "June 2022 - Present",
		points: [
			"Utilized a comprehensive tech stack to develop websites and web apps, including front-end technologies such as HTML, CSS, JavaScript, and React framework.",
			"Leveraged back-end technologies, such as Node.js and Python to build robust server-side functionalities, RESTful APIs, and database management systems with MongoDB and PostgreSQL.",
			"Implemented security measures to protect websites and applications from potential vulnerabilities, ensuring a secure user experience",
			"Demonstrated a strong ability to debug code, identify and resolve technical issues to maintain project timelines and minimize downtime.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},
];

const projects = [
	{
		name: "Hi-llo",
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
	},
	{
		name: "Weather Journal",
		description:
			"A web application that provides weather and temperature conditions of a location (zip code) to users.",
		tags: [
			{
				name: "nodejs",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: weatherjournal,
		source_code_link: "https://github.com/mruqqie/Weather-journal-app",
	},
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
	},
	{
		name: "Youtube Clone",
		description:
			"Allows users to experience a familiar world of video content with seamless video streaming.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "material ui",
				color: "pink-text-gradient",
			},
		],
		image: youtube,
		source_code_link: "https://github.com/mruqqie/youtube_clone",
	},
];

export { services, technologies, experiences, projects };
