import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import "./style.css";
import Complain from "./pages/Complain";
import Report from "./pages/Report";


function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/Complain' element={<Complain />} />
				<Route path='/Report' element={<Report />} />
			</Routes>
		</Router>
	);
}

export default App;
