import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SecWrapper } from "../higherOrderComp";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img
						src={icon}
						alt={title}
						className="w-10 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px]
				max-w-3xl leading-[30px]"
			>
				I&apos;m a software developer specializing in frontend and
				mobile engineering, focused on building clean, scalable, and
				user-centered digital experiences. I&apos;ve worked with
				startups where I contributed to production-level platforms
				across health tech, edtech, automation, and consumer tools.
				I&apos;m known for turning complex ideas into intuitive
				interfaces and bringing clarity and structure to challenging or
				legacy codebases. <br />
				<br /> With a background in Biomedical Engineering, I&apos;m
				driven to grow as a product-minded engineer and take on
				opportunities that let me build meaningful products end-to-end
				while exploring new industries and technologies. Some of my key
				achievements include leading rebuilds for company platforms,
				significantly improving application performance across multiple
				projects, and developing features that increased user engagement
				and streamlined critical workflows.
			</motion.p>
			<motion.div
				variants={fadeIn("", "", 0.2, 1)}
				className="mt-8 w-full max-w-3xl aspect-video
             rounded-2xl backdrop-blur
             bg-white/5 border border-white/10
             flex flex-col items-center justify-center gap-2"
			>
				<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
					▶
				</div>
				<p className="text-secondary text-sm">
					Intro video dropping soon
				</p>
			</motion.div>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SecWrapper(About, "about");
