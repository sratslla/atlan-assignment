const data = require("./Data");
const fs = require("fs");
// console.log(data);

const tag = [
	"Feature Extraction",
	"Text-to-Image",
	"Image-to-Text",
	"Depth Estimation",
	"Image Classification",
	"Object Detection",
	"Image Segmentation",
	"Image-to-Image",
	"Text Classification",
	"Token Classification",
	"Translation",
	"Summarization",
];
let length = data.length;
for (let i = 0; i < length; i++) {
	const randomInt = Math.floor(Math.random() * 12);
	data[i]["category"] = tag[randomInt];
}
console.log(data);

const data2String = `const data = ${JSON.stringify(
	data,
	null,
	2
)};\n\nmodule.exports = data;`;

// Write the data to the data2.js file
fs.writeFileSync("./datafinal.js", data2String, "utf-8");

// console.log("Data has been written to data3.js");
