import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computers = ({ isMobile, isMdScreen, isXsScreen, isSmScreen }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");
	let scale = 0.65;
	let position = [0, -2.9, -1.0];
	if (isMobile) {
		scale = 0.4;
		position = [0, -3.26, -0.6];
	}
	if (isMdScreen) {
		scale = 0.6;
		position = [0, -2.56, -1.0];
	}
	if (isSmScreen) {
		scale = 0.5
		
		position = [0, -3.15, -1.5];
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
	const [isSmScreen, setIsSmScreen] = useState(false)
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 449.9px)");
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (e) => {
			setIsMobile(e.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);
	useEffect(() => {
		const mediaQuery = window.matchMedia(
			"(min-width: 768px) and (max-width: 1024px)"
		);
		setIsMdScreen(mediaQuery.matches);
		const handleMediaQueryChange = (e) => {
			setIsMdScreen(e.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);
	useEffect(() => {
		const mediaQuery = window.matchMedia(
			"(min-width: 450px) and (max-width: 639.9px)"
		);
		setIsXsScreen(mediaQuery.matches);
		const handleMediaQueryChange = (e) => {
			setIsXsScreen(e.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);
	useEffect(() => {
		const mediaQuery = window.matchMedia(
			"(min-width: 640px) and (max-width: 767.9px)"
		);
		setIsSmScreen(mediaQuery.matches);
		const handleMediaQueryChange = (e) => {
			setIsSmScreen(e.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);
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
