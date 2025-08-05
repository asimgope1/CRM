import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function Department() {
	// State for form fields
	const [departmentName, setDepartmentName] = useState("");
	const [departmentType, setDepartmentType] = useState("parent");
	const [selectedParent, setSelectedParent] = useState("");

	// Mock data for parent departments
	const parentDepartments = [
		{ id: 1, name: "Human Resources" },
		{ id: 2, name: "Information Technology" },
		{ id: 3, name: "Finance" },
		{ id: 4, name: "Operations" },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log({
			departmentName,
			departmentType,
			parentDepartment: departmentType === "child" ? selectedParent : null,
		});
		// Add your API call or state management logic here
	};

	return (
		<Layout title='Department' showHeader={false}>
			<div className='container mt-4'>
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							Department
							<span className='badge badge-soft-primary ms-2'>15</span>
						</h4>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb mb-0 p-0'>
								<li className='breadcrumb-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Department
								</li>
							</ol>
						</nav>
					</div>
				</div>

				<div className='card p-4'>
					<h5 className='mb-4'>Add New Department</h5>

					<form onSubmit={handleSubmit}>
						{/* Department Name Input */}
						<div className='mb-3'>
							<label htmlFor='departmentName' className='form-label'>
								Department Name
							</label>
							<input
								type='text'
								className='form-control'
								id='departmentName'
								value={departmentName}
								onChange={(e) => setDepartmentName(e.target.value)}
								required
								placeholder='Enter department name'
							/>
						</div>

						{/* Department Type Dropdown */}
						<div className='mb-3'>
							<label htmlFor='departmentType' className='form-label'>
								Department Type
							</label>
							<select
								className='form-select'
								id='departmentType'
								value={departmentType}
								onChange={(e) => setDepartmentType(e.target.value)}
								required>
								<option value='parent'>Parent Department</option>
								<option value='child'>Child Department</option>
							</select>
						</div>

						{/* Parent Department Dropdown (only shown when type is child) */}
						{departmentType === "child" && (
							<div className='mb-3'>
								<label htmlFor='parentDepartment' className='form-label'>
									Parent Department
								</label>
								<select
									className='form-select'
									id='parentDepartment'
									value={selectedParent}
									onChange={(e) => setSelectedParent(e.target.value)}
									required>
									<option value=''>Select parent department</option>
									{parentDepartments.map((dept) => (
										<option key={dept.id} value={dept.id}>
											{dept.name}
										</option>
									))}
								</select>
							</div>
						)}

						<div className='mt-4'>
							<button type='submit' className='btn btn-primary me-2'>
								Save Department
							</button>
							<button type='button' className='btn btn-outline-secondary'>
								Cancel
							</button>
						</div>
					</form>

					{/* Existing departments table can be added here */}
				</div>
			</div>
		</Layout>
	);
}

export default Department;
