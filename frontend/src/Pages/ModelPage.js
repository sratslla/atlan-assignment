import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import data from "../Data/data";
import Navbar from "../Components/Navbar";
import ModelContainer from "../Components/ModelContainer";
import toast from "react-hot-toast";

const ModelPage = () => {
	const modelId = useParams().modelId;
	const [data, setData] = useState({ model: {}, suggestionModel: [] });
	useEffect(() => {
		const getModelData = async () => {
			const response = await fetch(
				process.env.REACT_APP_API_URL +
					`/api/modelsPage/?modelId=${modelId}`
			);
			const result = await response.json();
			setData(result);
		};

		getModelData();
	}, []);
	const [liked, setLiked] = useState(false);
	const [like, setLike] = useState(data.model.likes);

	useEffect(() => {
		const favModel = JSON.parse(localStorage.getItem("favoriteModel"));
		if (favModel && favModel.includes(data.model.id)) {
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
		// favData = JSON.parse(favData)
		const indexToRemove = favData.indexOf(id);
		favData.splice(indexToRemove, 1);
		localStorage.setItem("favoriteModel", JSON.stringify(favData));
		setLiked(false);
		setLike(like - 1);
	}
	return (
		<>
			<Navbar />
			<div className="flex flex-col md:flex-row justify-center items-center p-4 font-[Outfit,sans-serif] overflow-hidden">
				<img
					src={data.model.imageURL}
					alt="Laptop"
					className="rounded-lg object-cover w-1/3 basis-1/3 ml-6 mt-6 hidden md:block"
				/>
				<div className="my-10 p-6 flex flex-col justify-around group w-full md:w-2/3">
					<div className="flex justify-between items-center mb-4">
						<div>
							<h2 className="text-sm font-semibold tracking-widest text-gray-500">
								{data.model.provider}
							</h2>
							<h1 className="text-4xl font-bold">
								{data.model.name}
							</h1>
							<span className="mb-2 inline-block rounded-full bg-gray-100 p-2 py-1 text-[15px] font-semibold text-gray-900">
								{data.model.category}
							</span>
						</div>
						<div>
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
								</button>
							)}
							<div className="text-lg font-bold">
								{data.model.likes}
							</div>
						</div>
					</div>
					<div className="mb-4">
						<p className="text-lg">{data.model.description}</p>
					</div>
					<div className="shadow-lg rounded-2xl p-2 bg-slate-100 font-mono">
						<pre style={{ whiteSpace: "pre-wrap" }}>
							{data.model.codeSnippet}
						</pre>
					</div>
				</div>
			</div>
			<div className="flex font-bold justify-center font-[Outfit,sans-serif]">
				{" "}
				Recommended Models
			</div>
			<div className="grid md:grid-cols-3 lg:grid-cols-4 p-4 font-[Outfit,sans-serif]">
				{data.suggestionModel.map((model) => (
					<ModelContainer
						key={model.id}
						modelId={model.id}
						modelName={model.name}
						modelDescription={model.description}
						modelTag={model.category}
						modelLikes={model.likes}
						modelURL={model.imageURL}
					/>
				))}
			</div>
		</>
	);
};

export default ModelPage;
