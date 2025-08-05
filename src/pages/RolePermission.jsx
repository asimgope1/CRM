import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function RolePermission() {
	// Sample roles data
	const [roles, setRoles] = useState([
		{
			id: 1,
			name: "Administrator",
			description: "Full system access",
			permissions: {
				users: { view: true, create: true, edit: true, delete: true },
				roles: { view: true, create: true, edit: true, delete: true },
				content: { view: true, create: true, edit: true, delete: true },
				settings: { view: true, edit: true },
			},
		},
		{
			id: 2,
			name: "Editor",
			description: "Content management access",
			permissions: {
				users: { view: true, create: false, edit: false, delete: false },
				roles: { view: false, create: false, edit: false, delete: false },
				content: { view: true, create: true, edit: true, delete: true },
				settings: { view: false, edit: false },
			},
		},
		{
			id: 3,
			name: "Viewer",
			description: "Read-only access",
			permissions: {
				users: { view: true, create: false, edit: false, delete: false },
				roles: { view: false, create: false, edit: false, delete: false },
				content: { view: true, create: false, edit: false, delete: false },
				settings: { view: false, edit: false },
			},
		},
	]);

	const [selectedRole, setSelectedRole] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [newRole, setNewRole] = useState({
		name: "",
		description: "",
		permissions: {
			users: { view: false, create: false, edit: false, delete: false },
			roles: { view: false, create: false, edit: false, delete: false },
			content: { view: false, create: false, edit: false, delete: false },
			settings: { view: false, edit: false },
		},
	});

	// Handle permission toggle
	const togglePermission = (module, permission) => {
		if (!selectedRole) return;

		const updatedRoles = roles.map((role) => {
			if (role.id === selectedRole.id) {
				return {
					...role,
					permissions: {
						...role.permissions,
						[module]: {
							...role.permissions[module],
							[permission]: !role.permissions[module][permission],
						},
					},
				};
			}
			return role;
		});

		setRoles(updatedRoles);
		setSelectedRole(updatedRoles.find((role) => role.id === selectedRole.id));
	};

	// Handle new role input change
	const handleNewRoleChange = (e) => {
		const { name, value } = e.target;
		setNewRole({
			...newRole,
			[name]: value,
		});
	};

	// Add new role
	const addNewRole = () => {
		const roleToAdd = {
			...newRole,
			id: roles.length > 0 ? Math.max(...roles.map((r) => r.id)) + 1 : 1,
		};
		setRoles([...roles, roleToAdd]);
		setShowModal(false);
		setNewRole({
			name: "",
			description: "",
			permissions: {
				users: { view: false, create: false, edit: false, delete: false },
				roles: { view: false, create: false, edit: false, delete: false },
				content: { view: false, create: false, edit: false, delete: false },
				settings: { view: false, edit: false },
			},
		});
	};

	// Delete role
	const deleteRole = (id) => {
		setRoles(roles.filter((role) => role.id !== id));
		if (selectedRole && selectedRole.id === id) {
			setSelectedRole(null);
		}
	};

	return (
		<Layout title='Role Permissions' showHeader={false}>
			<div className='container mt-4'>
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							Role Permissions
							<span className='badge badge-soft-primary ms-2'>
								{roles.length}
							</span>
						</h4>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb mb-0 p-0'>
								<li className='breadcrumb-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='breadcrumb-item'>
									<Link to='/settings'>Settings</Link>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Role Permissions
								</li>
							</ol>
						</nav>
					</div>
					<button
						className='btn btn-primary'
						onClick={() => setShowModal(true)}>
						<i className='fas fa-plus me-2'></i> Add New Role
					</button>
				</div>

				<div className='row'>
					<div className='col-md-4'>
						<div className='card'>
							<div className='card-header bg-white border-bottom'>
								<h5 className='mb-0'>Roles</h5>
							</div>
							<div className='card-body p-0'>
								<div className='list-group list-group-flush'>
									{roles.map((role) => (
										<button
											key={role.id}
											className={`list-group-item list-group-item-action ${
												selectedRole?.id === role.id ? "active" : ""
											}`}
											onClick={() => setSelectedRole(role)}>
											<div className='d-flex justify-content-between align-items-center'>
												<div>
													<h6 className='mb-1'>{role.name}</h6>
													<small className='text-muted'>
														{role.description}
													</small>
												</div>
												<button
													className='btn btn-sm btn-outline-danger'
													onClick={(e) => {
														e.stopPropagation();
														deleteRole(role.id);
													}}>
													<i className='fas fa-trash'></i>
												</button>
											</div>
										</button>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className='col-md-8'>
						{selectedRole ? (
							<div className='card'>
								<div className='card-header bg-white border-bottom'>
									<h5 className='mb-0'>Permissions for {selectedRole.name}</h5>
								</div>
								<div className='card-body'>
									<div className='mb-4'>
										<h6>User Management</h6>
										<div className='d-flex flex-wrap gap-3'>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.users.view}
													onChange={() => togglePermission("users", "view")}
												/>
												<label className='form-check-label'>View Users</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.users.create}
													onChange={() => togglePermission("users", "create")}
												/>
												<label className='form-check-label'>Create Users</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.users.edit}
													onChange={() => togglePermission("users", "edit")}
												/>
												<label className='form-check-label'>Edit Users</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.users.delete}
													onChange={() => togglePermission("users", "delete")}
												/>
												<label className='form-check-label'>Delete Users</label>
											</div>
										</div>
									</div>

									<div className='mb-4'>
										<h6>Role Management</h6>
										<div className='d-flex flex-wrap gap-3'>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.roles.view}
													onChange={() => togglePermission("roles", "view")}
												/>
												<label className='form-check-label'>View Roles</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.roles.create}
													onChange={() => togglePermission("roles", "create")}
												/>
												<label className='form-check-label'>Create Roles</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.roles.edit}
													onChange={() => togglePermission("roles", "edit")}
												/>
												<label className='form-check-label'>Edit Roles</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.roles.delete}
													onChange={() => togglePermission("roles", "delete")}
												/>
												<label className='form-check-label'>Delete Roles</label>
											</div>
										</div>
									</div>

									<div className='mb-4'>
										<h6>Content Management</h6>
										<div className='d-flex flex-wrap gap-3'>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.content.view}
													onChange={() => togglePermission("content", "view")}
												/>
												<label className='form-check-label'>View Content</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.content.create}
													onChange={() => togglePermission("content", "create")}
												/>
												<label className='form-check-label'>
													Create Content
												</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.content.edit}
													onChange={() => togglePermission("content", "edit")}
												/>
												<label className='form-check-label'>Edit Content</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.content.delete}
													onChange={() => togglePermission("content", "delete")}
												/>
												<label className='form-check-label'>
													Delete Content
												</label>
											</div>
										</div>
									</div>

									<div className='mb-4'>
										<h6>System Settings</h6>
										<div className='d-flex flex-wrap gap-3'>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.settings.view}
													onChange={() => togglePermission("settings", "view")}
												/>
												<label className='form-check-label'>
													View Settings
												</label>
											</div>
											<div className='form-check form-switch'>
												<input
													className='form-check-input'
													type='checkbox'
													checked={selectedRole.permissions.settings.edit}
													onChange={() => togglePermission("settings", "edit")}
												/>
												<label className='form-check-label'>
													Edit Settings
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className='card'>
								<div className='card-body text-center py-5'>
									<i className='fas fa-user-shield fa-3x text-muted mb-3'></i>
									<h5>Select a role to manage permissions</h5>
									<p className='text-muted'>
										Choose a role from the list to view and edit its permissions
									</p>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Add Role Modal */}
				{showModal && (
					<div
						className='modal fade show'
						style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
						<div className='modal-dialog modal-dialog-centered'>
							<div className='modal-content'>
								<div className='modal-header'>
									<h5 className='modal-title'>Add New Role</h5>
									<button
										type='button'
										className='btn-close'
										onClick={() => setShowModal(false)}></button>
								</div>
								<div className='modal-body'>
									<div className='mb-3'>
										<label className='form-label'>Role Name</label>
										<input
											type='text'
											className='form-control'
											name='name'
											value={newRole.name}
											onChange={handleNewRoleChange}
											required
										/>
									</div>
									<div className='mb-3'>
										<label className='form-label'>Description</label>
										<textarea
											className='form-control'
											name='description'
											value={newRole.description}
											onChange={handleNewRoleChange}
											rows='3'></textarea>
									</div>
								</div>
								<div className='modal-footer'>
									<button
										type='button'
										className='btn btn-secondary'
										onClick={() => setShowModal(false)}>
										Cancel
									</button>
									<button
										type='button'
										className='btn btn-primary'
										onClick={addNewRole}
										disabled={!newRole.name}>
										Add Role
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
}

export default RolePermission;
