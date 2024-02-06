import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ModelContainer from "../Components/ModelContainer";

const TopModel = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getTopModel = async () => {
			const response = await fetch(
				process.env.REACT_APP_API_URL + "/api/topModel"
			);
			const result = await response.json();
			setData(result);
		};

		getTopModel();
	}, []);

	return (
		<>
			<Navbar />
			<div className="flex flex-col items-center">
				<p className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl font-[Outfit,sans-serif] underline underline-offset-4 ">
					TOP 20 Most Liked Models
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 pt-6 pl-4 pr-4">
					{data.map(
						({
							id,
							name,
							category,
							description,
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
		</>
	);
};

export default TopModel;
