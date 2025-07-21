import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import "./style.css";
import Complain from "./pages/Complain";
import Report from "./pages/Report";
import Forms from "./pages/Forms";
import CallHistory from "./pages/CallHistory";
import ChatPage from "./pages/ChatPage";


function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/Complain' element={<Complain />} />
				<Route path='/Report' element={<Report />} />
				<Route path='/Forms' element={<Forms />} />
				<Route path='/CallHistory' element={<CallHistory />} />
				<Route path='/ChatPage' element={<ChatPage />} />
			</Routes>
		</Router>
	);
}

export default App;
