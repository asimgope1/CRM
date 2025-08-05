import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function CreateUser() {
	return (
		<Layout title='Create User' showHeader={false}>
			<div className='container mt-4'>
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							Create User / Edit User
							<span className='badge badge-soft-primary ms-2'>New</span>
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
									Create User
								</li>
							</ol>
						</nav>
					</div>
					<div>
						<Link to='/users' className='btn btn-outline-secondary'>
							<i className='fas fa-arrow-left me-2'></i> Back to Users
						</Link>
					</div>
				</div>

				<div className='card'>
					<div className='card-header bg-white border-bottom'>
						<h5 className='mb-0'>User Information</h5>
					</div>
					<div className='card-body'>
						<form>
							<div className='row'>
								<div className='col-md-6 mb-3'>
									<label htmlFor='firstName' className='form-label'>
										First Name
									</label>
									<input
										type='text'
										className='form-control'
										id='firstName'
										placeholder='Enter first name'
										required
									/>
								</div>
								<div className='col-md-6 mb-3'>
									<label htmlFor='lastName' className='form-label'>
										Last Name
									</label>
									<input
										type='text'
										className='form-control'
										id='lastName'
										placeholder='Enter last name'
										required
									/>
								</div>
							</div>

							<div className='mb-3'>
								<label htmlFor='email' className='form-label'>
									Email Address
								</label>
								<input
									type='email'
									className='form-control'
									id='email'
									placeholder='Enter email'
									required
								/>
							</div>

							<div className='row'>
								<div className='col-md-6 mb-3'>
									<label htmlFor='password' className='form-label'>
										Password
									</label>
									<input
										type='password'
										className='form-control'
										id='password'
										placeholder='Enter password'
										required
									/>
								</div>
								<div className='col-md-6 mb-3'>
									<label htmlFor='confirmPassword' className='form-label'>
										Confirm Password
									</label>
									<input
										type='password'
										className='form-control'
										id='confirmPassword'
										placeholder='Confirm password'
										required
									/>
								</div>
							</div>

							<div className='mb-3'>
								<label htmlFor='phone' className='form-label'>
									Phone Number
								</label>
								<input
									type='tel'
									className='form-control'
									id='phone'
									placeholder='Enter phone number'
								/>
							</div>

							<div className='mb-3'>
								<label htmlFor='role' className='form-label'>
									Role
								</label>
								<select className='form-select' id='role' required>
									<option value=''>Select role</option>
									<option value='admin'>Admin</option>
									<option value='user'>User</option>
									<option value='editor'>Editor</option>
									<option value='viewer'>Viewer</option>
								</select>
							</div>

							<div className='mb-3'>
								<div className='form-check'>
									<input
										className='form-check-input'
										type='checkbox'
										id='activeStatus'
									/>
									<label className='form-check-label' htmlFor='activeStatus'>
										Active User
									</label>
								</div>
							</div>

							<div className='d-flex justify-content-end gap-2'>
								<button type='button' className='btn btn-outline-secondary'>
									Cancel
								</button>
								<button type='submit' className='btn btn-primary'>
									<i className='fas fa-save me-2'></i> Save User
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default CreateUser;
