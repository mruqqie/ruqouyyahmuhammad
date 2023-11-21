import React from "react";
import Tilt from "react-parallax-tilt";
import { SecWrapper } from "../higherOrderComp";
import { technologies } from "../constants";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => (
				<Tilt>
					<div
						className="w-28 violet-gradient h-28 relative rounded-md decagon shadow-md"
						key={technology.name}
					>
						<img
							src={technology.icon}
							alt=""
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
						w-4/5 h-4/5 rounded-full"
						/>
					</div>
				</Tilt>
			))}
		</div>
	);
};

export default SecWrapper(Tech, "");
