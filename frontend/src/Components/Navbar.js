import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<nav className=" flex flex-row w-full h-[10vh] border-b items-center m-0 p-0 bg-[#264658] text-xl font-mono overflow-hidden">
			<div className=" flex flex-row justify-around basis-1/4">
				<button
					onClick={() => {
						navigate("/Explore");
					}}
					className="hover:cursor-pointer hover:font-bold hover:text-[#f26822] text-[#D3FBD8]"
				>
					Explore
				</button>
				<button
					onClick={() => {
						navigate("/Favorite");
					}}
					className="hover:cursor-pointer hover:font-bold hover:text-[#f26822] text-[#D3FBD8]"
				>
					Favorite
				</button>
				<button
					onClick={() => {
						navigate("/Top-Model");
					}}
					className="hover:cursor-pointer hover:font-bold hover:text-[#f26822] text-[#D3FBD8]"
				>
					Top Models
				</button>
			</div>
			<button
				className="hover:cursor-pointer hover:font-bold hover:text-[#f26822] text-[#D3FBD8] text-3xl basis-1/2"
				onClick={() => {
					navigate("/");
				}}
			>
				ModelHub
			</button>
			<button
				onClick={() => {
					navigate("/UploadModel");
				}}
				className="hover:cursor-pointer hover:font-bold text-[#D3FBD8] hover:text-[#f26822] basis-1/4"
			>
				Upload Models
			</button>
		</nav>
	);
};

export default Navbar;
