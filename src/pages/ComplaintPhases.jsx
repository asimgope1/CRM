import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function ComplaintPhases() {
	// Phase type options
	const phaseTypes = [
		"Initial",
		"In Progress",
		"Resolved",
		"Reopened",
		"Complete",
		"Cancelled",
	];

	// State for phases and form
	const [phases, setPhases] = useState([
		{
			id: 1,
			name: "Initial",
			type: "Initial",
			description: "Complaint has been received",
			isActive: true,
			slaHours: 24,
		},
		{
			id: 2,
			name: "In Progress",
			type: "In Progress",
			description: "Complaint is being reviewed",
			isActive: true,
			slaHours: 48,
		},
		{
			id: 3,
			name: "Resolved",
			type: "Resolved",
			description: "Complaint has been resolved",
			isActive: true,
			slaHours: 0,
		},
	]);

	const [newPhase, setNewPhase] = useState({
		name: "",
		type: "Initial",
		description: "",
		slaHours: 24,
		isActive: true,
	});

	const [editingId, setEditingId] = useState(null);

	// Handle form input changes
	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setNewPhase({
			...newPhase,
			[name]: type === "checkbox" ? checked : value,
		});

		// Auto-fill name when type changes
		if (name === "type") {
			setNewPhase((prev) => ({
				...prev,
				name: value,
			}));
		}
	};

	// Submit new or updated phase
	const handleSubmit = (e) => {
		e.preventDefault();

		if (editingId) {
			// Update existing phase
			setPhases(
				phases.map((phase) =>
					phase.id === editingId ? { ...newPhase, id: editingId } : phase,
				),
			);
			setEditingId(null);
		} else {
			// Add new phase
			const phaseToAdd = {
				...newPhase,
				id: phases.length > 0 ? Math.max(...phases.map((p) => p.id)) + 1 : 1,
			};
			setPhases([...phases, phaseToAdd]);
		}

		// Reset form
		setNewPhase({
			name: "",
			type: "Initial",
			description: "",
			slaHours: 24,
			isActive: true,
		});
	};

	// Edit a phase
	const handleEdit = (phase) => {
		setNewPhase(phase);
		setEditingId(phase.id);
	};

	// Delete a phase
	const handleDelete = (id) => {
		setPhases(phases.filter((phase) => phase.id !== id));
	};

	// Toggle phase status
	const toggleStatus = (id) => {
		setPhases(
			phases.map((phase) =>
				phase.id === id ? { ...phase, isActive: !phase.isActive } : phase,
			),
		);
	};

	// Move phase up in order
	const movePhaseUp = (index) => {
		if (index === 0) return;
		const newPhases = [...phases];
		[newPhases[index], newPhases[index - 1]] = [
			newPhases[index - 1],
			newPhases[index],
		];
		setPhases(newPhases);
	};

	// Move phase down in order
	const movePhaseDown = (index) => {
		if (index === phases.length - 1) return;
		const newPhases = [...phases];
		[newPhases[index], newPhases[index + 1]] = [
			newPhases[index + 1],
			newPhases[index],
		];
		setPhases(newPhases);
	};

	return (
		<Layout title='Complaint Phases' showHeader={false}>
			<div className='container mt-4'>
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							Complaint Phases
							<span className='badge badge-soft-primary ms-2'>
								{phases.length}
							</span>
						</h4>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb mb-0 p-0'>
								<li className='breadcrumb-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Complaint Phases
								</li>
							</ol>
						</nav>
					</div>
				</div>

				<div className='card mb-4'>
					<div className='card-header'>
						<h5 className='mb-0'>
							{editingId ? "Edit Phase" : "Add New Phase"}
						</h5>
					</div>
					<div className='card-body'>
						<form onSubmit={handleSubmit}>
							<div className='mb-3'>
								<label htmlFor='phaseType' className='form-label'>
									Phase Type
								</label>
								<select
									className='form-select'
									id='phaseType'
									name='type'
									value={newPhase.type}
									onChange={handleInputChange}
									required>
									{phaseTypes.map((type) => (
										<option key={type} value={type}>
											{type}
										</option>
									))}
								</select>
							</div>

							<div className='mb-3'>
								<label htmlFor='phaseName' className='form-label'>
									Phase Name
								</label>
								<input
									type='text'
									className='form-control'
									id='phaseName'
									name='name'
									value={newPhase.name}
									onChange={handleInputChange}
									required
								/>
							</div>

							<div className='mb-3'>
								<label htmlFor='phaseDescription' className='form-label'>
									Description
								</label>
								<textarea
									className='form-control'
									id='phaseDescription'
									name='description'
									rows='3'
									value={newPhase.description}
									onChange={handleInputChange}
								/>
							</div>

							<div className='mb-3'>
								<label htmlFor='slaHours' className='form-label'>
									SLA (Hours)
								</label>
								<input
									type='number'
									className='form-control'
									id='slaHours'
									name='slaHours'
									min='0'
									value={newPhase.slaHours}
									onChange={handleInputChange}
									required
								/>
							</div>

							<div className='mb-3 form-check'>
								<input
									type='checkbox'
									className='form-check-input'
									id='isActive'
									name='isActive'
									checked={newPhase.isActive}
									onChange={handleInputChange}
								/>
								<label className='form-check-label' htmlFor='isActive'>
									Active Phase
								</label>
							</div>

							<div className='d-grid gap-2'>
								<button type='submit' className='btn btn-primary'>
									{editingId ? "Update Phase" : "Add Phase"}
								</button>
								{editingId && (
									<button
										type='button'
										className='btn btn-outline-secondary'
										onClick={() => {
											setNewPhase({
												name: "",
												type: "Initial",
												description: "",
												slaHours: 24,
												isActive: true,
											});
											setEditingId(null);
										}}>
										Cancel
									</button>
								)}
							</div>
						</form>
					</div>
				</div>

				<div className='card'>
					<div className='card-header'>
						<h5 className='mb-0'>Workflow Phases</h5>
					</div>
					<div className='card-body'>
						{phases.length === 0 ? (
							<div className='text-center py-4'>
								<p>No phases added yet</p>
							</div>
						) : (
							<div className='d-flex flex-column gap-3'>
								{phases.map((phase, index) => (
									<div
										key={phase.id}
										className={`card ${!phase.isActive ? "bg-light" : ""}`}>
										<div className='card-body'>
											<div className='d-flex justify-content-between align-items-start mb-2'>
												<div>
													<h5 className='mb-1'>
														{phase.name}
														<span className='badge bg-secondary ms-2'>
															{phase.type}
														</span>
														{phase.isActive ? (
															<span className='badge bg-success ms-2'>
																Active
															</span>
														) : (
															<span className='badge bg-danger ms-2'>
																Inactive
															</span>
														)}
													</h5>
													<p className='mb-2 text-muted'>{phase.description}</p>
													<span className='badge bg-info'>
														SLA: {phase.slaHours} hours
													</span>
												</div>
												<div className='d-flex gap-2'>
													<button
														className='btn btn-sm btn-outline-primary'
														onClick={() => handleEdit(phase)}>
														Edit
													</button>
													<button
														className='btn btn-sm btn-outline-secondary'
														onClick={() => toggleStatus(phase.id)}>
														{phase.isActive ? "Deactivate" : "Activate"}
													</button>
													<button
														className='btn btn-sm btn-outline-danger'
														onClick={() => handleDelete(phase.id)}>
														Delete
													</button>
												</div>
											</div>
											<div className='d-flex gap-2 mt-2'>
												<button
													className='btn btn-sm btn-outline-secondary'
													onClick={() => movePhaseUp(index)}
													disabled={index === 0}>
													Move Up
												</button>
												<button
													className='btn btn-sm btn-outline-secondary'
													onClick={() => movePhaseDown(index)}
													disabled={index === phases.length - 1}>
													Move Down
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ComplaintPhases;
