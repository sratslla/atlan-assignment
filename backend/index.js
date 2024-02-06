require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const data = require("./Data");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.get("/api/models", (req, res) => {
	const query = req.query.search;
	const tag = req.query.tag;
	if (query && query.length > 2 && tag == undefined) {
		searchedData = [...data].filter((m) =>
			m.name.toLowerCase().includes(query.toLowerCase())
		);
		res.json(searchedData);
	} else if (tag && tag.length > 0) {
		if (query && query.length > 2) {
			filterData = [...data].filter((m) => m.category == tag);
			searchedData = [...filterData].filter((m) =>
				m.name.toLowerCase().includes(query.toLowerCase())
			);
			res.json(searchedData);
		} else {
			filterData = [...data].filter((m) => m.category == tag);
			res.json(filterData);
		}
	} else {
		const offset = parseInt(req.query.offset) || 0;
		const batchSize = 10;
		const slicedData = data.slice(offset, offset + batchSize);
		res.json(slicedData);
	}
});
app.get("/api/numberOfModels", (req, res) => {
	const numberOfModels = data.length;
	res.json(numberOfModels);
});
app.get("/api/topModel", (req, res) => {
	const topModelData = [...data]
		.sort((a, b) => b.likes - a.likes)
		.slice(0, 20);
	res.json(topModelData);
});

app.post("/api/favoriteModel", (req, res) => {
	const filteredData = [...data].filter((item) => req.body.includes(item.id));
	res.json(filteredData);
});

app.get("/api/modelsPage", (req, res) => {
	const id = parseInt(req.query.modelId);
	const model = data.find((m) => m.id === id);
	const suggestionModel = [...data]
		.filter((m) => m.id !== id && m.category === model.category)
		.sort((a, b) => b.likes - a.likes)
		.slice(0, 4);
	res.json({ model, suggestionModel });
});

app.post("/api/like/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const model = data.find((m) => m.id === id);
	if (model) {
		model.likes = model.likes + 1;
		res.json({
			success: true,
			message: "Like count updated successfully.",
		});
	} else {
		res.status(404).json({ success: false, message: "Model not found." });
	}
});
app.post("/api/dislike/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const model = data.find((m) => m.id === id);
	if (model) {
		model.likes = model.likes - 1;
		res.json({
			success: true,
			message: "Like count updated successfully.",
		});
	} else {
		res.status(404).json({ success: false, message: "Model not found." });
	}
});
app.post("/api/uploadModel", (req, res) => {
	data.push(req.body);
	res.status(200).json({ success: true, message: "Model uploaded" });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
