import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import data from "../Data/data";
import Navbar from "../Components/Navbar";
import ModelContainer from "../Components/ModelContainer";

const ModelPage = () => {
	const modelId = useParams().modelId;
	console.log(modelId);
	const [data, setData] = useState({ model: {}, suggestionModel: [] });
	// const model = data.find((m) => m.id === modelId);
	useEffect(() => {
		const getModelData = async () => {
			const response = await fetch(
				`http://localhost:5000/api/modelsPage/?modelId=${modelId}`
			);
			const result = await response.json();
			setData(result);
			// const result = response.json();
			console.log(modelId, data);
		};

		getModelData();
	}, []);

	// console.log(model);
	return (
		<>
			<Navbar />
			<div>{data.model.id}</div>
			<div>{data.model.name}</div>
			<div>{data.model.category}</div>
			<div>{data.model.description}</div>
			<div>{data.model.provider}</div>
			<div>{data.model.codeSnippet}</div>
			<div class=" flex flex-row justify-around items-center group">
				<pre>
					<code>{data.codeSnippet}</code>
				</pre>
				<button className="bg-red-500 transition group-hover:opacity-80 hover:text-white">
					<svg
						class=""
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						fill="currentColor"
						focusable="false"
						role="img"
						width="0.9em"
						height="0.9em"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 32 32"
					>
						<path
							d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"
							transform="translate(0)"
						></path>
						<path
							d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"
							transform="translate(0)"
						></path>
						<rect fill="none" width="32" height="32"></rect>
					</svg>
				</button>
			</div>
			<div className="flex font-bold justify-center">
				{" "}
				Recommended Models
			</div>
			<div className="grid grid-cols-4 p-4">
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
