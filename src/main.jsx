import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
