import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Sphere = () => {
	const tagCloudOptions = (w) => ({
		radius: Math.min(w.innerWidth, w.innerHeight) / 2,
		maxSpeed: "fast",
	});

	const handleClick = (tag, ev) => {
		alert(tag);
	};

	return (
		<div className="Sphere hidden md:block">
			<TagCloud
				options={tagCloudOptions}
				onClick={handleClick}
				onClickOptions={{ passive: true }}
				style={{
					fontWeight: "bold",
					color: "#93cbf1",
					fontFamily: "Outfit, sans-serif",
					textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)", // Adding text shadow for better visibility
				}}
			>
				{[
					"GPT-3",
					"BERT",
					"ResNet",
					"VGG16",
					"Inception",
					"LSTM",
					"GRU",
					"YOLO",
					"Transformer",
					"AlexNet",
					"MobileNet",
					"U-Net",
					"XGBoost",
					"Random Forest",
					"SVM",
					"CapsNet",
					"GPT-4",
					"EfficientNet",
					"WaveNet",
					"DCGAN",
				]}
			</TagCloud>
		</div>
	);
};

export default Sphere;
