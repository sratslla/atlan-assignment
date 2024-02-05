import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Sphere = () => {
	const tagCloudOptions = (w) => ({
		radius: Math.min(500, w.innerWidth, w.innerHeight) / 1.5,
		maxSpeed: "fast",
	});

	const handleClick = (tag, ev) => {
		alert(tag);
	};

	return (
		<div className="Sphere">
			<TagCloud
				options={tagCloudOptions}
				onClick={handleClick}
				onClickOptions={{ passive: true }}
				style={{
					fontWeight: "bold",
					color: "#93cbf1",
					fontFamily: "sans-serif",
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
					"XGBoost ",
					"Random Forest",
					"SVM ",
				]}
			</TagCloud>
		</div>
	);
};

export default Sphere;
