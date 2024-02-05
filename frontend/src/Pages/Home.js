import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sphere from "../Components/Sphere";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const [numberOfModels, setNumberOfModels] = useState(0);
	useEffect(() => {
		const init = async () => {
			const response = await fetch(
				"http://localhost:5000/api/numberOfModels"
			);
			setNumberOfModels(await response.json());
		};
		init();
	}, []);

	return (
		<div className="bg-[#264658] m-0 p-0">
			<Navbar />
			<div className="flex flex-wrap justify-center items-center">
				<Sphere />
				<h4 className=" font-serif text-3xl  home-bottom-text text-[#D3FBD8]">
					<div class="circle-word-container">
						<span class="circle-word-long">
							{numberOfModels} Models
						</span>
					</div>
					Ready to dive into the world of AI models?
					<div className="home-bottom-buttons">
						<button
							onClick={() => {
								navigate("/explore");
							}}
						>
							Explore
						</button>
						<button> Upload your own Model</button>
					</div>
				</h4>
			</div>
			<div className="mx-auto max-w-7xl px-2 pb-4 lg:px-8">
				<div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
					<div className="font-serif">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full  bg-blue-100">
							<svg
								className="h-9 w-9 text-blue-600 bg-transparent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
								/>
							</svg>
						</div>
						<h3 className="mt-8 text-lg font-semibold text-[#f26822] font-color">
							Innovate with Confidence
						</h3>
						<p className="mt-4 text-sm text-[#93cbf1]">
							Each model comes with a detailed description, code
							snippets, and provider information, empowering you
							to integrate AI seamlessly into your projects.
						</p>
					</div>
					<div className="font-serif">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
							<svg
								className="h-9 w-9 text-orange-600 bg-transparent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<h3 className="mt-8 text-lg font-semibold text-[#f26822]">
							Fast & Easy to Load
						</h3>
						<p className="mt-4 text-sm text-[#93cbf1]">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit.
						</p>
					</div>
					<div className="font-serif">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
							<svg
								className="h-9 w-9 text-green-600 bg-transparent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						</div>
						<h3 className="mt-8 text-lg font-semibold text-[#f26822]">
							Light & Dark Version
						</h3>
						<p className="mt-4 text-sm text-[#93cbf1]">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit.
						</p>
					</div>
					<div className="font-serif">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
							<svg
								className="h-9 w-9 text-red-600 bg-transparent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
								/>
							</svg>
						</div>
						<h3 className="mt-8 text-lg font-semibold text-[#f26822]">
							Filter Blocks
						</h3>
						<p className="mt-4 text-sm text-[#93cbf1]">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
