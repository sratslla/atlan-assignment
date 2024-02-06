import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";

import ModelContainer from "../Components/ModelContainer";
import TagComponent from "../Components/TagComponent";

const Explore = () => {
	const [data, setData] = useState([]);
	const [scroll, setscroll] = useState(true);
	const [loadedItems, setLoadedItems] = useState(0);
	const containerRef = useRef(null);
	useEffect(() => {
		const getData = async () => {
			await loadMoreData();
		};
		getData();
	}, []);

	const searchModel = async (query) => {
		if (query.length > 2) {
			setscroll(false);
			const response = await fetch(
				process.env.REACT_APP_API_URL + `/api/models?search=${query}`
			);
			const result = await response.json();
			setData(result);
			setLoadedItems(0);
		} else if (query.length <= 2) {
			setscroll(true);
			const response = await fetch(
				process.env.REACT_APP_API_URL + `/api/models?search=${query}`
			);
			const result = await response.json();
			setData(result);
		}
	};

	const loadMoreData = async () => {
		const response = await fetch(
			process.env.REACT_APP_API_URL + `/api/models?offset=${loadedItems}`
		);
		const newData = await response.json();
		setData([...data, ...newData]);
		setLoadedItems(loadedItems + newData.length);
	};

	const handleScroll = () => {
		if (containerRef) {
			const { scrollTop, scrollHeight, clientHeight } =
				containerRef.current;
			if (scrollTop + clientHeight >= scrollHeight && scroll) {
				loadMoreData();
			}
		}
	};

	useEffect(() => {
		if (containerRef.current && scroll) {
			containerRef.current.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener(
					"scroll",
					handleScroll
				);
			}
		};
	}, [containerRef, loadedItems, scroll]);

	const resetData = async () => {
		setLoadedItems(0);
		const response = await fetch(
			process.env.REACT_APP_API_URL + `/api/models?offset=${0}`
		);
		setData(await response.json());
		setLoadedItems(10);
		setscroll(true);
	};
	return (
		<>
			<Navbar />
			<div className="w-full m-0 p-0 flex flex-row overflow-hidden ">
				<div className="w-[27vw] h-[90vh] overflow-y-scroll bg-[#f3f4f4] pt-1 ">
					<div className="flex justify-end pr-3">
						<button
							className="ml-2 flex h-7 items-center whitespace-nowrap rounded-full border bg-white px-3 text-sm text-gray-600 decoration-gray-300 shadow-sm hover:bg-gray-50 hover:text-gray-800 justify-end"
							type="button"
							onClick={resetData}
						>
							<svg
								className="mr-1.5 text-xs"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								role="img"
								width="1em"
								height="1em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 32 32"
							>
								<path
									d="M25.95 7.65l.005-.004c-.092-.11-.197-.206-.293-.312c-.184-.205-.367-.41-.563-.603c-.139-.136-.286-.262-.43-.391c-.183-.165-.366-.329-.558-.482c-.16-.128-.325-.247-.49-.367c-.192-.14-.385-.277-.585-.406a13.513 13.513 0 0 0-.533-.324q-.308-.179-.625-.341c-.184-.094-.37-.185-.56-.27c-.222-.1-.449-.191-.678-.28c-.19-.072-.378-.145-.571-.208c-.246-.082-.498-.15-.75-.217c-.186-.049-.368-.102-.556-.143c-.29-.063-.587-.107-.883-.15c-.16-.023-.315-.056-.476-.073A12.933 12.933 0 0 0 6 7.703V4H4v8h8v-2H6.811A10.961 10.961 0 0 1 16 5a11.111 11.111 0 0 1 1.189.067c.136.015.268.042.403.061c.25.037.501.075.746.128c.16.035.315.08.472.121c.213.057.425.114.633.183c.164.054.325.116.486.178c.193.074.384.15.57.235c.162.072.32.15.477.23q.268.136.526.286c.153.09.305.18.453.276c.168.11.33.224.492.342c.14.102.282.203.417.312c.162.13.316.268.47.406c.123.11.248.217.365.332c.167.164.323.338.479.512A10.993 10.993 0 1 1 5 16H3a13 13 0 1 0 22.95-8.35z"
									fill="currentColor"
								></path>
							</svg>
							Reset Tasks
						</button>
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
						setscroll={setscroll}
					/>
					<TagComponent
						TagTitle={"Computer Vision"}
						TagList={[
							"Image Classification",
							"Image Segmentation",
							"Object Detection",
							"Image-to-Image",
						]}
						setData={setData}
						setscroll={setscroll}
					/>
					<TagComponent
						TagTitle={"Natural Language Processing"}
						TagList={[
							"Text Classification",
							"Translation",
							"Token Classification",
							"Summarization",
						]}
						setData={setData}
						setscroll={setscroll}
					/>
				</div>
				<div
					className="flex flex-col w-[77vw] h-[90vh] overflow-y-scroll overflow-x-hidden"
					ref={containerRef}
				>
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
				</div>
			</div>
		</>
	);
};

export default Explore;
