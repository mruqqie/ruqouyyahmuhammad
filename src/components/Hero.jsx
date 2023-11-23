import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl
		mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-purple-600" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi! I'm <br className="md:hidden" />
						<span className="text-purple-600">Ruqouyyah</span>.
					</h1>
					<p
						className={`${styles.heroSubText} mt-2 text-white-100 xs:w-[300px] md:w-[65%] sm:w-[65%] w-[219px]`}
					>
						I transform ideas into delightful websites with a dash
						of creativity and coding magic. Let's embark on a
						digital adventure together!
					</p>
				</div>
			</div>
			{/* <ComputersCanvas /> */}{" "}
			<img
					src="https://camo.githubusercontent.com/854abab80b1a8e70f616b87dc8f9e6f3fe84acd0c697a417ec2acb7ed355a415/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4e5a4741785678664f764f7a45686a51374d2f67697068792e676966"
					alt="Animated GIF"
					className="absolute w-[350px] xs:w-[60%] sm:w-[55%] md:w-[50%] lg:w-[40%] right-0 bottom-12 xs:bottom-0 object-cover"
				/>
			<div
				className="absolute bottom-1 w-full flex justify-center
				items-center "
			>
				<a href="#about">
					<div
						className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
						flex justify-center items-start p-2"
					>
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
