import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Favorite from "./Pages/Favorite";
import TopModel from "./Pages/TopModel";
import Explore from "./Pages/Explore";
import ModelPage from "./Pages/ModelPage";
import UploadModel from "./Pages/UploadModel";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/Explore", element: <Explore /> },
	{ path: "/Favorite", element: <Favorite /> },
	{ path: "/Top-Model", element: <TopModel /> },
	{ path: "/Models/:modelId", element: <ModelPage /> },
	{ path: "/UploadModel", element: <UploadModel /> },
]);
root.render(
	<React.StrictMode>
		<div>
			<Toaster
				position="top-right"
				toastOptions={{
					success: {
						theme: {
							primary: "#4aed88",
						},
					},
				}}
			></Toaster>
		</div>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
