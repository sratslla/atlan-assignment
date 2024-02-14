import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../Components/Navbar";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UploadModel = () => {
	const navigate = useNavigate();
	const imageArray = [
		"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
		"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
		"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
		"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
		"https://www.bitsathy.ac.in/wp-content/uploads/ew-what-is-generative-ai-model-1.png",
		"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
		"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
		"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
		"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	];
	const randomNumber = Math.floor(Math.random() * 9);
	const randomId = Math.floor(Math.random() * 1e10) + 150;
	const [formData, setFormData] = useState({
		id: randomId,
		name: "",
		category: "",
		description: "",
		provider: "",
		codeSnippet: "",
		likes: 0,
		imageURL: imageArray[randomNumber],
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const init = async () => {
		const response = await fetch(
			process.env.REACT_APP_API_URL + "/api/uploadModel",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			}
		);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			formData.name.trim() === "" ||
			formData.category.trim() === "" ||
			formData.description.trim() === "" ||
			formData.provider.trim() === "" ||
			formData.codeSnippet.trim() === ""
		) {
			toast.error("Please fill in all fields");
			return;
		}
		init();
		toast.success("Model Added");
		setTimeout(() => {
			navigate(`/Models/${formData.id}`);
		}, 1000);
	};

	return (
		<>
			<Navbar />
			<div className="container mx-auto bg-[#f3f4f4]">
				<form
					onSubmit={handleSubmit}
					className="max-w-md mx-auto bg-white p-8 rounded shadow-md font-serif"
				>
					<h2 className="text-2xl font-semibold mb-4">
						Enter Your Model
					</h2>

					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-600"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="mt-1 p-2 w-full border border-black rounded-md"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="provider"
							className="block text-sm font-medium text-gray-600"
						>
							Provider
						</label>
						<input
							type="text"
							id="provider"
							name="provider"
							value={formData.provider}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md border-black "
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="category"
							className="block text-sm font-medium text-gray-600"
						>
							Category
						</label>
						<select
							id="category"
							name="category"
							value={formData.category}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md border-black "
						>
							<option value="">Select a category</option>
							<option value="Feature Extraction">
								Feature Extraction
							</option>
							<option value="Text-to-Image">Text-to-Image</option>
							<option value="Image-to-Text">Image-to-Text</option>
							<option value="Depth Estimation">
								Depth Estimation
							</option>
							<option value="Image Classification">
								Image Classification
							</option>
							<option value="Object Detection">
								Object Detection
							</option>
							<option value="Image Segmentation">
								Image Segmentation
							</option>
							<option value="Image-to-Image">
								Image-to-Image
							</option>
							<option value="Text Classification">
								Text Classification
							</option>
							<option value="Token Classification">
								Token Classification
							</option>
							<option value="Translation">Translation</option>
							<option value="Summarization">Summarization</option>
							{/* Add more options as needed */}
						</select>
					</div>

					<div className="mb-4">
						<label
							htmlFor="description"
							className="block text-sm font-medium text-gray-600"
						>
							Description
						</label>
						<textarea
							id="description"
							name="description"
							value={formData.description}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md border-black "
							rows="4"
						></textarea>
					</div>

					<div className="mb-4">
						<label
							htmlFor="codeSnippet"
							className="block text-sm font-medium text-gray-600"
						>
							Code Snippet
						</label>
						<textarea
							id="codeSnippet"
							name="codeSnippet"
							value={formData.codeSnippet}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md border-black "
							rows="2"
						></textarea>
					</div>

					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default UploadModel;
