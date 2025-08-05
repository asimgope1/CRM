import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css"; // Import your CSS file for global styles
import Complain from "./pages/Complain";
import Report from "./pages/Report";
import Forms from "./pages/Forms";
import CallHistory from "./pages/CallHistory";
import ChatPage from "./pages/ChatPage";
import Contacts from "./pages/Contacts";
import AgentPerformance from "./pages/AgentPerformance";
import ComplaintManagement from "./pages/ComplaintManagement";
import CallSupportManagement from "./pages/CallSupportManagement";
import AddComplaintPage from "./components/AddComplaintPage";
import CreateUser from "./pages/CreateUser";
import CreateRole from "./pages/CreateRole";
import RolePermission from "./pages/RolePermission";
import UserRoleAssignment from "./pages/UserRoleAssignment";
import Department from "./pages/Department";
import AssignDepartment from "./pages/AssignDepartment";
import ComplaintType from "./pages/ComplaintType";
import ComplaintPhases from "./pages/ComplaintPhases";


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
				<Route path='/AddComplaintPage' element={<AddComplaintPage />} />
				<Route path='/CreateUser' element={<CreateUser />} />
				<Route path='/CreateRole' element={<CreateRole />} />
				<Route path='/RolePermission' element={<RolePermission />} />
				<Route path='/UserRoleAssignment' element={<UserRoleAssignment />} />
				<Route path='/Department' element={<Department />} />
				<Route path='/AssignDepartment' element={<AssignDepartment />} />
				<Route path='/ComplaintType' element={<ComplaintType />} />
				<Route path='/ComplaintPhases' element={<ComplaintPhases />} />
			</Routes>
		</Router>
	);
}

export default App;
