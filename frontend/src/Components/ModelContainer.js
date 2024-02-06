import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ModelContainer = ({
	modelId,
	modelName,
	modelDescription,
	modelTag,
	modelLikes,
	modelURL,
}) => {
	const [liked, setLiked] = useState(false);
	const [like, setLike] = useState(modelLikes);
	const navigate = useNavigate();

	useEffect(() => {
		const favModel = JSON.parse(localStorage.getItem("favoriteModel"));
		if (favModel && favModel.includes(modelId)) {
			setLiked(true);
		}
	}, []);

	async function likeModel(id) {
		const response = await fetch(
			process.env.REACT_APP_API_URL + `/api/like/${id}`,
			{
				method: "POST",
			}
		);
		const result = await response.json();
		if (result.success) {
			toast.success("Favorite Added");
		} else {
			toast.error("Error Please try again");
		}
		setLike(like + 1);
		setLiked(true);
		const favData = localStorage.getItem("favoriteModel");
		if (favData) {
			localStorage.setItem(
				"favoriteModel",
				JSON.stringify([...JSON.parse(favData), id])
			);
		} else {
			localStorage.setItem("favoriteModel", JSON.stringify([id]));
		}
	}
	async function dislikeModel(id) {
		const response = await fetch(
			process.env.REACT_APP_API_URL + `/api/dislike/${id}`,
			{
				method: "POST",
			}
		);
		const result = await response.json();
		if (result.success) {
			toast.success("Favorite Removed");
		} else {
			toast.error("Error Please try again");
		}
		let favData = JSON.parse(localStorage.getItem("favoriteModel"));
		const indexToRemove = favData.indexOf(id);
		favData.splice(indexToRemove, 1);
		localStorage.setItem("favoriteModel", JSON.stringify(favData));
		setLiked(false);
		setLike(like - 1);
	}

	return (
		<div className="rounded-md border border-[#b5b3b3] backdrop-blur-xl p-2 m-2 font-[Outfit,sans-serif]">
			<div className="p-4">
				<div className="flex flex-row justify-between">
					<h1 className="text-lg font-semibold">{modelName}</h1>
					{liked ? (
						<button
							onClick={() => {
								dislikeModel(modelId);
							}}
						>
							<svg
								className="text-red-400 w-6 h-auto fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
							</svg>
							<div>{like}</div>
						</button>
					) : (
						<button
							onClick={() => {
								likeModel(modelId);
							}}
						>
							<svg
								className="text-red-400 w-6 h-auto fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
							</svg>
							<div>{like}</div>
						</button>
					)}
				</div>
				<p className="mt-3 text-sm text-gray-600">{modelDescription}</p>
				<div className="mt-4 flex flex-row justify-between ">
					<span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
						{modelTag}
					</span>
					<button
						type="button"
						className="rounded-md bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
						onClick={() => navigate(`/Models/${modelId}`)}
					>
						Explore
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModelContainer;
