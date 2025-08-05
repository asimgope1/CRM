import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function UserRoleAssignment() {
	// Sample data
	const [users, setUsers] = useState([
		{ id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
		{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
		{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer" },
		{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor" },
		{
			id: 5,
			name: "Charlie Wilson",
			email: "charlie@example.com",
			role: "Viewer",
		},
	]);

	const [roles, setRoles] = useState([
		"Admin",
		"Editor",
		"Viewer",
		"Moderator",
	]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedRole, setSelectedRole] = useState("All");
	const [editingUserId, setEditingUserId] = useState(null);
	const [newRole, setNewRole] = useState("");

	// Filter users based on search and role selection
	const filteredUsers = users.filter((user) => {
		const matchesSearch =
			user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.email.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesRole = selectedRole === "All" || user.role === selectedRole;
		return matchesSearch && matchesRole;
	});

	// Handle role assignment
	const assignRole = (userId) => {
		if (!newRole) return;

		setUsers(
			users.map((user) =>
				user.id === userId ? { ...user, role: newRole } : user,
			),
		);
		setEditingUserId(null);
		setNewRole("");
	};

	return (
		<Layout title='User Role Assignment' showHeader={false}>
			<div className='container mt-4'>
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							User Role Assignment
							<span className='badge badge-soft-primary ms-2'>
								{users.length}
							</span>
						</h4>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb mb-0 p-0'>
								<li className='breadcrumb-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='breadcrumb-item'>
									<Link to='/users'>Users</Link>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Role Assignment
								</li>
							</ol>
						</nav>
					</div>
				</div>

				<div className='card mb-4'>
					<div className='card-body'>
						<div className='row'>
							<div className='col-md-6 mb-3 mb-md-0'>
								<label htmlFor='search' className='form-label'>
									Search Users
								</label>
								<input
									type='text'
									className='form-control'
									id='search'
									placeholder='Search by name or email'
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
							</div>
							<div className='col-md-6'>
								<label htmlFor='roleFilter' className='form-label'>
									Filter by Role
								</label>
								<select
									className='form-select'
									id='roleFilter'
									value={selectedRole}
									onChange={(e) => setSelectedRole(e.target.value)}>
									<option value='All'>All Roles</option>
									{roles.map((role) => (
										<option key={role} value={role}>
											{role}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
				</div>

				<div className='card'>
					<div className='card-header bg-white border-bottom'>
						<h5 className='mb-0'>User List</h5>
					</div>
					<div className='card-body p-0'>
						<div className='table-responsive'>
							<table className='table table-hover mb-0'>
								<thead>
									<tr>
										<th>Name</th>
										<th>Email</th>
										<th>Current Role</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{filteredUsers.length > 0 ? (
										filteredUsers.map((user) => (
											<tr key={user.id}>
												<td>{user.name}</td>
												<td>{user.email}</td>
												<td>
													<span
														className={`badge ${
															user.role === "Admin"
																? "bg-primary"
																: user.role === "Editor"
																? "bg-success"
																: user.role === "Moderator"
																? "bg-warning"
																: "bg-secondary"
														}`}>
														{user.role}
													</span>
												</td>
												<td>
													{editingUserId === user.id ? (
														<div className='d-flex gap-2'>
															<select
																className='form-select form-select-sm'
																value={newRole}
																onChange={(e) => setNewRole(e.target.value)}>
																<option value=''>Select role</option>
																{roles.map((role) => (
																	<option key={role} value={role}>
																		{role}
																	</option>
																))}
															</select>
															<button
																className='btn btn-sm btn-success'
																onClick={() => assignRole(user.id)}
																disabled={!newRole}>
																Save
															</button>
															<button
																className='btn btn-sm btn-outline-secondary'
																onClick={() => {
																	setEditingUserId(null);
																	setNewRole("");
																}}>
																Cancel
															</button>
														</div>
													) : (
														<button
															className='btn btn-sm btn-primary'
															onClick={() => {
																setEditingUserId(user.id);
																setNewRole(user.role);
															}}>
															Change Role
														</button>
													)}
												</td>
											</tr>
										))
									) : (
										<tr>
											<td colSpan='4' className='text-center py-4'>
												No users found matching your criteria
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default UserRoleAssignment;
