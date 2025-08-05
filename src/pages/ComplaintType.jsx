import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function ComplaintType() {
	// State for form fields
	const [complaintType, setComplaintType] = useState("");
	const [description, setDescription] = useState("");
	const [priority, setPriority] = useState("medium");
	const [complaintTypes, setComplaintTypes] = useState([
		{
			id: 1,
			name: "Technical Issue",
			description: "Problems with software or hardware",
			priority: "high",
		},
		{
			id: 2,
			name: "Billing Query",
			description: "Questions about payments or invoices",
			priority: "medium",
		},
		{
			id: 3,
			name: "Service Request",
			description: "General service inquiries",
			priority: "low",
		},
	]);

	const priorities = [
		{ value: "low", label: "Low" },
		{ value: "medium", label: "Medium" },
		{ value: "high", label: "High" },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add new complaint type
		const newComplaintType = {
			id: complaintTypes.length + 1,
			name: complaintType,
			description,
			priority,
		};
		setComplaintTypes([...complaintTypes, newComplaintType]);
		// Reset form
		setComplaintType("");
		setDescription("");
		setPriority("medium");
	};

	const handleDelete = (id) => {
		setComplaintTypes(complaintTypes.filter((type) => type.id !== id));
	};

	return (
		<Layout title='Complaint Types' showHeader={false}>
			<div className='container mt-4'>
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							Complaint Types
							<span className='badge badge-soft-primary ms-2'>
								{complaintTypes.length}
							</span>
						</h4>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb mb-0 p-0'>
								<li className='breadcrumb-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Complaint Types
								</li>
							</ol>
						</nav>
					</div>
				</div>

				<div className='card p-4 mb-4'>
					<h5 className='mb-4'>Add New Complaint Type</h5>

					<form onSubmit={handleSubmit}>
						<div className='row'>
							<div className='col-md-6 mb-3'>
								<label htmlFor='complaintType' className='form-label'>
									Complaint Type Name
								</label>
								<input
									type='text'
									className='form-control'
									id='complaintType'
									value={complaintType}
									onChange={(e) => setComplaintType(e.target.value)}
									required
									placeholder='Enter complaint type'
								/>
							</div>

							<div className='col-md-6 mb-3'>
								<label htmlFor='priority' className='form-label'>
									Priority
								</label>
								<select
									className='form-select'
									id='priority'
									value={priority}
									onChange={(e) => setPriority(e.target.value)}
									required>
									{priorities.map((p) => (
										<option key={p.value} value={p.value}>
											{p.label}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className='mb-3'>
							<label htmlFor='description' className='form-label'>
								Description
							</label>
							<textarea
								className='form-control'
								id='description'
								rows='3'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder='Enter description'
							/>
						</div>

						<div className='mt-4'>
							<button type='submit' className='btn btn-primary me-2'>
								Save Complaint Type
							</button>
							<button
								type='button'
								className='btn btn-outline-secondary'
								onClick={() => {
									setComplaintType("");
									setDescription("");
									setPriority("medium");
								}}>
								Clear
							</button>
						</div>
					</form>
				</div>

				<div className='card p-4'>
					<div className='d-flex justify-content-between align-items-center mb-3'>
						<h5>Existing Complaint Types</h5>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='Search complaint types...'
							/>
						</div>
					</div>

					<div className='table-responsive'>
						<table className='table table-striped table-hover'>
							<thead>
								<tr>
									<th>#</th>
									<th>Type Name</th>
									<th>Description</th>
									<th>Priority</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{complaintTypes.map((type) => (
									<tr key={type.id}>
										<td>{type.id}</td>
										<td>{type.name}</td>
										<td>{type.description}</td>
										<td>
											<span
												className={`badge bg-${
													type.priority === "high"
														? "danger"
														: type.priority === "medium"
														? "warning"
														: "success"
												}`}>
												{type.priority}
											</span>
										</td>
										<td>
											<button className='btn btn-sm btn-outline-primary me-2'>
												Edit
											</button>
											<button
												className='btn btn-sm btn-outline-danger'
												onClick={() => handleDelete(type.id)}>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ComplaintType;
