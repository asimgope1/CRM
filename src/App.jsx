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
import Contacts from "./pages/Contacts";
import AgentPerformance from "./pages/AgentPerformance";
import ComplaintManagement from "./pages/ComplaintManagement";
import CallSupportManagement from "./pages/CallSupportManagement";


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
				<Route path='/Contacts' element={<Contacts />} />
				<Route path='/AgentPerformance' element={<AgentPerformance />} />
				<Route path='/ComplaintManagement' element={<ComplaintManagement />} />
				<Route
					path='/CallSupportManagement'
					element={<CallSupportManagement />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
