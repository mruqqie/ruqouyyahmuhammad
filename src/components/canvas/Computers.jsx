import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const useMediaQuery = (query, callback) => {
	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		callback(mediaQuery.matches);
		const handleMediaQueryChange = (e) => {
			callback(e.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);
};

const Computers = ({ isMobile, isMdScreen, isXsScreen, isSmScreen }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");
	let scale = 0.65;
	let position = [0, -3.0, -1.0];
	if (isMobile) {
		scale = 0.4;
		position = [0, -3.26, -0.6];
	}
	if (isMdScreen) {
		scale = 0.6;
		position = [0, -2.56, -1.0];
	}
	if (isSmScreen) {
		scale = 0.5;

		position = [0, -3.19, -1.5];
	}
	if (isXsScreen) {
		scale = 0.5;
		position = [0, -3.15, -0.89];
	}
	return (
		<mesh>
			<hemisphereLight intensity={2} groundColor="black" />
			<directionalLight
				position={[-20, 50, 10]}
				intensity={2}
				castshadow
			/>
			<pointLight intensity={2} />
			<primitive
				object={computer.scene}
				scale={scale}
				position={position}
				rotation={[-0.01, -0.2, -0.04]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isMdScreen, setIsMdScreen] = useState(false);
	const [isXsScreen, setIsXsScreen] = useState(false);
	const [isSmScreen, setIsSmScreen] = useState(false);
	useMediaQuery("(max-width: 449.9px)", setIsMobile);
	useMediaQuery("(min-width: 769px) and (max-width: 1023px)", setIsMdScreen);
	useMediaQuery("(min-width: 450px) and (max-width: 639.9px)", setIsXsScreen);
	useMediaQuery("(min-width: 640px) and (max-width: 768px)", setIsSmScreen);
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<Loader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers
					isMobile={isMobile}
					isMdScreen={isMdScreen}
					isXsScreen={isXsScreen}
					isSmScreen={isSmScreen}
				/>
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
