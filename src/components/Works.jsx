import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, link } from "../assets";
import { SecWrapper } from "../higherOrderComp";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project, index }) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={project.image}
						alt={project.name}
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
				<div className="absolute inset-3 flex gap-1 justify-end m-3 card-img_hover">
					{project.source_code_link && (
						<div
							onClick={() =>
								window.open(project.source_code_link, "_blank")
							}
							className="black-gradient w-7 h-7 xs:w-10 xs:h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt="github"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					)}
					{project.project_link && (
						<div
							onClick={() =>
								window.open(project.project_link, "_blank")
							}
							className="black-gradient w-7 h-7 xs:w-10 xs:h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={link}
								alt="github"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					)}
				</div>
				<div className="mt-5">
					<h3 className="font-bold text-[24px]">{project.name}</h3>
					<p className="mt-2 text-secondary text-[14px]">
						{project.description}
					</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<p
							key={tag.name}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>
			{/* <div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Brief description
				</motion.p>
			</div> */}
			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						project={project}
					/>
				))}
			</div>
		</>
	);
};

export default SecWrapper(Works, "projects");
