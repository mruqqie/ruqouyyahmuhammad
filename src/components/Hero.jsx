import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
		mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-purple-600" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi! I'm{" "}
						<span className="text-purple-600">Ruqouyyah</span>.
					</h1>
					<p
						className={`${styles.heroSubText} mt-2 text-white-100 w-[70%]`}
					>
						I transform ideas into delightful websites with a dash
						of creativity and coding magic, making the web more
						engaging. Let's embark on a digital adventure together!
					</p>
				</div>
			</div>
			<ComputersCanvas />
		</section>
	);
};

export default Hero;
