import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function AssignDepartment() {
	// State for form fields
	const [selectedUser, setSelectedUser] = useState("");
	const [selectedDepartment, setSelectedDepartment] = useState("");
	const [role, setRole] = useState("member");

	// Mock data for users and departments
	const users = [
		{ id: 1, name: "John Doe", email: "john@example.com" },
		{ id: 2, name: "Jane Smith", email: "jane@example.com" },
		{ id: 3, name: "Robert Johnson", email: "robert@example.com" },
	];

	const departments = [
		{ id: 1, name: "Human Resources" },
		{ id: 2, name: "Information Technology" },
		{ id: 3, name: "Finance" },
		{ id: 4, name: "Operations" },
	];

	const roles = [
		{ value: "manager", label: "Manager" },
		{ value: "supervisor", label: "Supervisor" },
		{ value: "member", label: "Member" },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log({
			userId: selectedUser,
			departmentId: selectedDepartment,
			role,
		});
		// Add your API call or state management logic here
	};

	return (
		<Layout title='Assign Department' showHeader={false}>
			<div className='container mt-4'>
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							Assign Department
							<span className='badge badge-soft-primary ms-2'>15</span>
						</h4>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb mb-0 p-0'>
								<li className='breadcrumb-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Assign Department
								</li>
							</ol>
						</nav>
					</div>
				</div>

				<div className='card p-4'>
					<h5 className='mb-4'>Assign User to Department</h5>

					<form onSubmit={handleSubmit}>
						{/* User Selection Dropdown */}
						<div className='mb-3'>
							<label htmlFor='userSelect' className='form-label'>
								Select User
							</label>
							<select
								className='form-select'
								id='userSelect'
								value={selectedUser}
								onChange={(e) => setSelectedUser(e.target.value)}
								required>
								<option value=''>Select a user</option>
								{users.map((user) => (
									<option key={user.id} value={user.id}>
										{user.name} ({user.email})
									</option>
								))}
							</select>
						</div>

						{/* Department Selection Dropdown */}
						<div className='mb-3'>
							<label htmlFor='departmentSelect' className='form-label'>
								Select Department
							</label>
							<select
								className='form-select'
								id='departmentSelect'
								value={selectedDepartment}
								onChange={(e) => setSelectedDepartment(e.target.value)}
								required>
								<option value=''>Select a department</option>
								{departments.map((dept) => (
									<option key={dept.id} value={dept.id}>
										{dept.name}
									</option>
								))}
							</select>
						</div>

						{/* Role Selection Dropdown */}
						<div className='mb-3'>
							<label htmlFor='roleSelect' className='form-label'>
								Assign Role
							</label>
							<select
								className='form-select'
								id='roleSelect'
								value={role}
								onChange={(e) => setRole(e.target.value)}
								required>
								{roles.map((roleOption) => (
									<option key={roleOption.value} value={roleOption.value}>
										{roleOption.label}
									</option>
								))}
							</select>
						</div>

						<div className='mt-4'>
							<button type='submit' className='btn btn-primary me-2'>
								Assign Department
							</button>
							<button type='button' className='btn btn-outline-secondary'>
								Cancel
							</button>
						</div>
					</form>

					{/* Current assignments table can be added here */}
					<div className='mt-5'>
						<h5>Current Department Assignments</h5>
						<div className='table-responsive'>
							<table className='table table-striped table-hover'>
								<thead>
									<tr>
										<th>User</th>
										<th>Department</th>
										<th>Role</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>John Doe (john@example.com)</td>
										<td>Human Resources</td>
										<td>Manager</td>
										<td>
											<button className='btn btn-sm btn-outline-primary me-2'>
												Edit
											</button>
											<button className='btn btn-sm btn-outline-danger'>
												Remove
											</button>
										</td>
									</tr>
									<tr>
										<td>Jane Smith (jane@example.com)</td>
										<td>Information Technology</td>
										<td>Member</td>
										<td>
											<button className='btn btn-sm btn-outline-primary me-2'>
												Edit
											</button>
											<button className='btn btn-sm btn-outline-danger'>
												Remove
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default AssignDepartment;
