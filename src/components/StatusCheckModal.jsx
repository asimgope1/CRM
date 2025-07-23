import React, { useState } from "react";
import {
	IconUserPlus,
	IconMapPinCog,
	IconX,
	IconHash,
	IconCalendarTime,
	IconPhone,
	IconSearch,
	IconChevronDown,
} from "@tabler/icons-react";
import ConfirmSubmitModal from "./ConfirmSubmitModal";

const StatusCheckModal = () => {
	// Sample complaints data
	const sampleComplaints = [
		{
			id: "CMP-123456",
			ticketNo: "TKT-123456",
			date: "2023-05-15T10:30",
			phone: "555-123-4567",
			name: "John Doe",
			state: "California",
			city: "San Francisco",
			address: "123 Main St, Apt 4B",
			department: "Technical",
			type: "Service Issue",
			notes: "Internet connection drops frequently",
			history: [
				{
					date: "2023-05-15",
					followedBy: "John Smith",
					phase: "Initial Review",
					remarks: "Complaint registered and assigned to technical team",
				},
				{
					date: "2023-05-16",
					followedBy: "Sarah Johnson",
					phase: "Investigation",
					remarks: "Confirmed network connectivity issues in the area",
				},
			],
		},
		{
			id: "CMP-654321",
			ticketNo: "TKT-654321",
			date: "2023-05-16T14:15",
			phone: "555-987-6543",
			name: "Jane Smith",
			state: "New York",
			city: "New York City",
			address: "456 Broadway",
			department: "Billing",
			type: "Billing Problem",
			notes: "Incorrect charge on last invoice",
			history: [
				{
					date: "2023-05-16",
					followedBy: "Michael Brown",
					phase: "Initial Review",
					remarks: "Complaint registered and assigned to billing department",
				},
				{
					date: "2023-05-17",
					followedBy: "Emily Davis",
					phase: "Resolution",
					remarks: "Invoice corrected and credit issued",
				},
			],
		},
	];

	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const [searchId, setSearchId] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [foundComplaint, setFoundComplaint] = useState(null);
	const [formData, setFormData] = useState({
		complaintId: "CMP-" + Math.floor(100000 + Math.random() * 900000),
		ticketNo: "TKT-" + Date.now(),
		date: new Date().toISOString().slice(0, 16),
		phone: "",
		name: "",
		state: "",
		city: "",
		address: "",
		department: "Support",
		type: "Service Issue",
		notes: "",
	});

	const handleSubmit = () => {
		console.log("Complaint submitted!", formData);
		setShowConfirmModal(false);
	};

	const handleSearch = () => {
		const complaint = sampleComplaints.find((c) => c.id === searchId);
		if (complaint) {
			setFoundComplaint(complaint);
			setFormData({
				...formData,
				complaintId: complaint.id,
				ticketNo: complaint.ticketNo,
				date: complaint.date,
				phone: complaint.phone,
				name: complaint.name,
				state: complaint.state,
				city: complaint.city,
				address: complaint.address,
				department: complaint.department,
				type: complaint.type,
				notes: complaint.notes,
			});
		} else {
			alert("No complaint found with that ID");
		}
		setShowDropdown(false);
	};

	const handleSelectComplaint = (id) => {
		setSearchId(id);
		handleSearch(); // Automatically search when selecting from dropdown
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div
			className='offcanvas offcanvas-end offcanvas-large'
			tabIndex='-1'
			id='check_status_modal'>
			<ConfirmSubmitModal
				show={showConfirmModal}
				onClose={() => setShowConfirmModal(false)}
				onConfirm={handleSubmit}
			/>

			<div className='offcanvas-header border-bottom'>
				<h5 className='mb-0'>Check Status</h5>
				<button
					type='button'
					className='btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle'
					data-bs-dismiss='offcanvas'
					aria-label='Close'>
					<IconX size={18} />
				</button>
			</div>

			<div className='offcanvas-body'>
				<form>
					{/* Search Section with Dropdown */}
					<div className='card mb-3'>
						<div className='card-body'>
							<h6 className='mb-3'>Search Existing Complaint</h6>
							<div className='input-group'>
								<div className='dropdown flex-grow-1'>
									<div className='input-group'>
										<input
											type='text'
											className='form-control'
											placeholder='Select or enter Complaint ID'
											value={searchId}
											onChange={(e) => setSearchId(e.target.value)}
											onFocus={() => setShowDropdown(true)}
										/>
										<button
											className='btn btn-outline-secondary'
											type='button'
											onClick={() => setShowDropdown(!showDropdown)}>
											<IconChevronDown size={18} />
										</button>
									</div>
									{showDropdown && (
										<ul
											className='dropdown-menu w-100 show'
											style={{ maxHeight: "200px", overflowY: "auto" }}>
											{sampleComplaints.map((complaint) => (
												<li key={complaint.id}>
													<button
														className='dropdown-item'
														type='button'
														onClick={() => handleSelectComplaint(complaint.id)}>
														{complaint.id} - {complaint.name} (
														{complaint.department})
													</button>
												</li>
											))}
										</ul>
									)}
								</div>
								<button
									className='btn btn-primary'
									type='button'
									onClick={handleSearch}>
									<IconSearch size={18} />
								</button>
							</div>
							{foundComplaint && (
								<div className='alert alert-success mt-2 mb-0'>
									Complaint found! Fields auto-filled.
								</div>
							)}
						</div>
					</div>

					<div
						className='accordion accordion-bordered'
						id='complaint_accordion'>
						{/* Basic Info */}
						<div className='accordion-item rounded mb-3'>
							<div className='accordion-header'>
								<a
									href='#'
									className='accordion-button accordion-custom-button rounded'
									data-bs-toggle='collapse'
									data-bs-target='#basic_info'>
									<span className='avatar avatar-md rounded me-1'>
										<IconUserPlus size={18} />
									</span>
									Basic Information
								</a>
							</div>
							<div
								className='accordion-collapse collapse show'
								id='basic_info'
								data-bs-parent='#complaint_accordion'>
								<div className='accordion-body border-top'>
									<div className='row'>
										{/* Complaint ID (readonly) */}
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Complaint ID</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconHash size={16} />
													</span>
													<input
														type='text'
														className='form-control'
														name='complaintId'
														value={formData.complaintId}
														readOnly
													/>
												</div>
											</div>
										</div>

										{/* Ticket No (readonly) */}
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Ticket Number</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconHash size={16} />
													</span>
													<input
														type='text'
														className='form-control'
														name='ticketNo'
														value={formData.ticketNo}
														readOnly
													/>
												</div>
											</div>
										</div>

										{/* Complaint Date/Time */}
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Complaint Date & Time
												</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconCalendarTime size={16} />
													</span>
													<input
														type='datetime-local'
														className='form-control'
														name='date'
														value={formData.date}
														readOnly
													/>
												</div>
											</div>
										</div>

										{/* Phone Number */}
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Phone Number<span className='text-danger'>*</span>
												</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconPhone size={16} />
													</span>
													<input
														type='text'
														className='form-control'
														name='phone'
														placeholder='Enter phone number'
														value={formData.phone}
														onChange={handleInputChange}
														required
													/>
												</div>
											</div>
										</div>

										{/* Customer Name */}
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Customer Name<span className='text-danger'>*</span>
												</label>
												<input
													type='text'
													className='form-control'
													name='name'
													placeholder='Enter customer name'
													value={formData.name}
													onChange={handleInputChange}
													required
												/>
											</div>
										</div>

										{/* State */}
										<div className='col-md-3'>
											<div className='mb-3'>
												<label className='form-label'>State</label>
												<input
													type='text'
													className='form-control'
													name='state'
													placeholder='State'
													value={formData.state}
													onChange={handleInputChange}
												/>
											</div>
										</div>

										{/* City */}
										<div className='col-md-3'>
											<div className='mb-3'>
												<label className='form-label'>City</label>
												<input
													type='text'
													className='form-control'
													name='city'
													placeholder='City'
													value={formData.city}
													onChange={handleInputChange}
												/>
											</div>
										</div>

										{/* Address */}
										<div className='col-md-12'>
											<div className='mb-3'>
												<label className='form-label'>Address</label>
												<textarea
													className='form-control'
													rows='2'
													name='address'
													placeholder='Enter address'
													value={formData.address}
													onChange={handleInputChange}
												/>
											</div>
										</div>

										{/* Department */}
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Department<span className='text-danger'>*</span>
												</label>
												<select
													className='form-select'
													name='department'
													value={formData.department}
													onChange={handleInputChange}
													required>
													<option value='Support'>Support</option>
													<option value='Sales'>Sales</option>
													<option value='Technical'>Technical</option>
													<option value='Billing'>Billing</option>
												</select>
											</div>
										</div>

										{/* Complaint Type */}
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Complaint Type<span className='text-danger'>*</span>
												</label>
												<select
													className='form-select'
													name='type'
													value={formData.type}
													onChange={handleInputChange}
													required>
													<option value='Service Issue'>Service Issue</option>
													<option value='Product Defect'>Product Defect</option>
													<option value='Delay in Delivery'>
														Delay in Delivery
													</option>
													<option value='Miscommunication'>
														Miscommunication
													</option>
													<option value='Other'>Other</option>
												</select>
											</div>
										</div>

										{/* Additional Notes */}
										<div className='col-md-12'>
											<div className='mb-3'>
												<label className='form-label'>Other Notes</label>
												<textarea
													className='form-control'
													rows='3'
													name='notes'
													placeholder='Any additional information'
													value={formData.notes}
													onChange={handleInputChange}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Additional Details */}
						<div className='accordion-item border-top rounded mb-3'>
							<div className='accordion-header'>
								<a
									href='#'
									className='accordion-button accordion-custom-button rounded'
									data-bs-toggle='collapse'
									data-bs-target='#additional_details'>
									<span className='avatar avatar-md rounded me-1'>
										<IconMapPinCog size={18} />
									</span>
									History 
								</a>
							</div>
							<div
								className='accordion-collapse collapse'
								id='additional_details'
								data-bs-parent='#complaint_accordion'>
								<div className='accordion-body border-top'>
									<div className='col-md-12'>
										<div className='table-responsive'>
											<table className='table table-bordered table-hover'>
												<thead className='table-light'>
													<tr>
														<th width='20%'>Date</th>
														<th width='20%'>Followed By</th>
														<th width='20%'>Phase</th>
														<th width='40%'>Remarks</th>
													</tr>
												</thead>
												<tbody>
													{foundComplaint ? (
														foundComplaint.history.map((item, index) => (
															<tr key={index}>
																<td>{item.date}</td>
																<td>{item.followedBy}</td>
																<td>{item.phase}</td>
																<td>{item.remarks}</td>
															</tr>
														))
													) : (
														<tr>
															<td
																colSpan='4'
																className='text-center text-muted'>
																No complaint selected or no history available
															</td>
														</tr>
													)}
												</tbody>
											</table>
										</div>
								
									</div>
								</div>
							</div>
						</div>
					</div>

			
				</form>
			</div>
		</div>
	);
};

export default StatusCheckModal;
