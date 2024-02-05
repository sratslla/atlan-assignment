import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

import ModelContainer from "../Components/ModelContainer";
import TagComponent from "../Components/TagComponent";

const Explore = () => {
	const [data, setData] = useState([]);
	const [loadedItems, setLoadedItems] = useState(0);
	useEffect(() => {
		const getData = async () => {
			loadMoreData();
		};
		getData();
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = async () => {
		if (
			window.innerHeight + document.documentElement.scrollTop + 1 >=
			document.documentElement.scrollHeight
		) {
			loadMoreData();
		}
	};
	const searchModel = async (query) => {
		const response = await fetch(
			`http://localhost:5000/api/models?search=${query}`
		);
		const result = await response.json();
		setData(result);
	};

	const loadMoreData = async () => {
		const response = await fetch(
			`http://localhost:5000/api/models?offset=${loadedItems}`
		);
		const newData = await response.json();
		setData([...data, ...newData]);
		setLoadedItems(loadedItems + newData.length);
	};

	const resetData = () => {
		setData([]);
		setLoadedItems(0);
		loadMoreData();
	};
	return (
		<>
			<Navbar />
			<div className="w-full m-0 p-0 flex flex-row overflow-hidden ">
				<div className="w-[27vw] h-[90vh] overflow-y-scroll bg-[#f3f4f4] pt-1">
					<div className="flex justify-end pr-4">
						<span
							onClick={resetData}
							className="font-serif text-black underline underline-offset-2 hover:text-[grey] cursor-pointer"
						>
							Reset All
						</span>
					</div>
					<TagComponent
						TagTitle={"Multimodal"}
						TagList={[
							"Feature Extraction",
							"Text-to-Image",
							"Image-to-Text",
							"Depth Estimation",
						]}
						setData={setData}
					/>
					<TagComponent
						TagTitle={"Computer Vision"}
						TagList={[
							"Image Classification",
							"Object Detection",
							"Image Segmentation",
							"Image-to-Image",
						]}
						setData={setData}
					/>
					<TagComponent
						TagTitle={"Natural Language Processing"}
						TagList={[
							"Text Classification",
							"Token Classification",
							"Translation",
							"Summarization",
						]}
						setData={setData}
					/>
				</div>
				<div className="flex flex-col w-[77vw] h-[90vh] overflow-y-scroll overflow-x-hidden">
					<div className="flex flex-col items-center">
						<div className="w-full md:w-1/3 px-4 pt-2 flex justify-center">
							<input
								className="flex h-10 w-full rounded-full border border-gray-700 bg-white px-4 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 ease-in-out"
								type="text"
								placeholder="Search for a Model"
								onChange={(e) => {
									searchModel(e.target.value);
								}}
							/>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 p-4">
							{data.map(
								({
									id,
									name,
									description,
									category,
									likes,
									imageURL,
								}) => (
									<ModelContainer
										key={id}
										modelId={id}
										modelName={name}
										modelDescription={description}
										modelTag={category}
										modelLikes={likes}
										modelURL={imageURL}
									/>
								)
							)}
						</div>
					</div>
					<button
						onClick={loadMoreData}
						className="font-black hover:text-red-700"
					>
						Load Next Group
					</button>
				</div>
			</div>
		</>
	);
};

export default Explore;
