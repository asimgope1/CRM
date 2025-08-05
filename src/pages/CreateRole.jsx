import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function CreateRole() {
	return (
		<Layout title='Create Role' showHeader={false}>
			<div className='container mt-4'>
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							Create Role
							<span className='badge badge-soft-primary ms-2'>New</span>
						</h4>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb mb-0 p-0'>
								<li className='breadcrumb-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='breadcrumb-item'>
									<Link to='/roles'>Roles</Link>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Create Role
								</li>
							</ol>
						</nav>
					</div>
					<div>
						<Link to='/roles' className='btn btn-outline-secondary'>
							<i className='fas fa-arrow-left me-2'></i> Back to Roles
						</Link>
					</div>
				</div>

				<div className='card'>
					<div className='card-header bg-white border-bottom'>
						<h5 className='mb-0'>Role Information</h5>
					</div>
					<div className='card-body'>
						<form>
							<div className='mb-3'>
								<label htmlFor='roleName' className='form-label'>
									Role Name
								</label>
								<input
									type='text'
									className='form-control'
									id='roleName'
									placeholder='Enter role name (e.g., Admin, Editor)'
									required
								/>
							</div>

							<div className='mb-3'>
								<label htmlFor='roleDescription' className='form-label'>
									Description
								</label>
								<textarea
									className='form-control'
									id='roleDescription'
									rows='3'
									placeholder='Enter role description'></textarea>
							</div>

							<div className='mb-4'>
								<label className='form-label'>Permissions</label>
								<div className='border rounded p-3'>
									<div className='row'>
										<div className='col-md-6'>
											<div className='form-check mb-2'>
												<input
													className='form-check-input'
													type='checkbox'
													id='usersManage'
												/>
												<label
													className='form-check-label'
													htmlFor='usersManage'>
													Manage Users
												</label>
											</div>
											<div className='form-check mb-2'>
												<input
													className='form-check-input'
													type='checkbox'
													id='rolesManage'
												/>
												<label
													className='form-check-label'
													htmlFor='rolesManage'>
													Manage Roles
												</label>
											</div>
											<div className='form-check mb-2'>
												<input
													className='form-check-input'
													type='checkbox'
													id='contentCreate'
												/>
												<label
													className='form-check-label'
													htmlFor='contentCreate'>
													Create Content
												</label>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-check mb-2'>
												<input
													className='form-check-input'
													type='checkbox'
													id='contentEdit'
												/>
												<label
													className='form-check-label'
													htmlFor='contentEdit'>
													Edit Content
												</label>
											</div>
											<div className='form-check mb-2'>
												<input
													className='form-check-input'
													type='checkbox'
													id='contentDelete'
												/>
												<label
													className='form-check-label'
													htmlFor='contentDelete'>
													Delete Content
												</label>
											</div>
											<div className='form-check mb-2'>
												<input
													className='form-check-input'
													type='checkbox'
													id='settingsAccess'
												/>
												<label
													className='form-check-label'
													htmlFor='settingsAccess'>
													Access Settings
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='d-flex justify-content-end gap-2'>
								<button type='button' className='btn btn-outline-secondary'>
									Cancel
								</button>
								<button type='submit' className='btn btn-primary'>
									<i className='fas fa-save me-2'></i> Create Role
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default CreateRole;
