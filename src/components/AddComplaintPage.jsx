import React, { useState } from "react";
import {
	IconUserPlus,
	IconMapPinCog,
	IconPhoto,
	IconFileBroken,
	IconHash,
	IconCalendarTime,
	IconPhone,
	IconUser,
} from "@tabler/icons-react";
import ConfirmSubmitModal from "./ConfirmSubmitModal";

const AddComplaintPage = () => {
	const complaintId = "CMP-" + Math.floor(100000 + Math.random() * 900000);
	const now = new Date().toISOString().slice(0, 16);
	const [showConfirmModal, setShowConfirmModal] = useState(false);

	const handleSubmit = () => {
		console.log("Complaint submitted!");
		setShowConfirmModal(false);
	};

	return (
		<div className='d-flex align-items-center justify-content-center min-vh-100 bg-light p-3'>
			<div className='card shadow-lg w-100' style={{ maxWidth: "960px" }}>
				{/* Header */}
				<div className='card-header bg-white border-bottom d-flex align-items-center justify-content-between'>
					<h5 className='mb-0 fw-bold text-black d-flex align-items-center'>
						<IconUserPlus className='me-2' size={20} />
						Add New Complaint
					</h5>
					<button
						className='btn-close'
						aria-label='Close'
						onClick={() => window.history.back()}></button>
				</div>

				{/* Body */}
				<div className='card-body'>
					<ConfirmSubmitModal
						show={showConfirmModal}
						onClose={() => setShowConfirmModal(false)}
						onConfirm={handleSubmit}
					/>

					<form>
						<div className='row'>
							{/* Complaint ID */}
							<div className='col-md-6 mb-3'>
								<label className='form-label text-black'>
									<IconHash size={16} className='me-1' />
									Complaint ID
								</label>
								<input
									type='text'
									className='form-control'
									value={complaintId}
									readOnly
								/>
							</div>

							{/* Complaint Date */}
							<div className='col-md-6 mb-3'>
								<label className='form-label text-black'>
									<IconCalendarTime size={16} className='me-1' />
									Complaint Date & Time
								</label>
								<input
									type='datetime-local'
									className='form-control'
									value={now}
									readOnly
								/>
							</div>

							{/* Phone Number */}
							<div className='col-md-6 mb-3'>
								<label className='form-label text-black'>
									<IconPhone size={16} className='me-1' />
									Phone Number <span className='text-danger'>*</span>
								</label>
								<input
									type='text'
									className='form-control'
									placeholder='Enter phone number'
									required
								/>
							</div>

							{/* Customer Name */}
							<div className='col-md-6 mb-3'>
								<label className='form-label text-black'>
									<IconUser size={16} className='me-1' />
									Customer Name <span className='text-danger'>*</span>
								</label>
								<input
									type='text'
									className='form-control'
									placeholder='Enter customer name'
									required
								/>
							</div>

							{/* State */}
							<div className='col-md-6 mb-3'>
								<label className='form-label text-black'>State</label>
								<input
									type='text'
									className='form-control'
									placeholder='Enter state'
								/>
							</div>

							{/* City */}
							<div className='col-md-6 mb-3'>
								<label className='form-label text-black'>City</label>
								<input
									type='text'
									className='form-control'
									placeholder='Enter city'
								/>
							</div>

							{/* Address */}
							<div className='col-md-12 mb-3'>
								<label className='form-label text-black'>Address</label>
								<textarea
									className='form-control'
									rows='2'
									placeholder='Enter address'
								/>
							</div>

							{/* Department */}
							<div className='col-md-6 mb-3'>
								<label className='form-label text-black'>
									Department <span className='text-danger'>*</span>
								</label>
								<select className='form-select' required>
									<option value=''>Select Department</option>
									<option>Support</option>
									<option>Sales</option>
									<option>Technical</option>
									<option>Billing</option>
								</select>
							</div>

							{/* Complaint Type */}
							<div className='col-md-6 mb-3'>
								<label className='form-label text-black'>
									Complaint Type <span className='text-danger'>*</span>
								</label>
								<select className='form-select' required>
									<option value=''>Select Type</option>
									<option>Service Issue</option>
									<option>Product Defect</option>
									<option>Delay in Delivery</option>
									<option>Miscommunication</option>
									<option>Other</option>
								</select>
							</div>

							{/* Additional Notes */}
							<div className='col-md-12 mb-3'>
								<label className='form-label text-black'>Other Notes</label>
								<textarea
									className='form-control'
									rows='3'
									placeholder='Any additional information'></textarea>
							</div>

							{/* Upload Section */}
							<div className='col-md-12 mb-3'>
								<label className='form-label text-black d-flex align-items-center'>
									<IconMapPinCog className='me-2' size={18} />
									Additional Details
								</label>
								<div className='d-flex align-items-center'>
									<div className='avatar avatar-xxl border border-dashed me-3 flex-shrink-0'>
										<div className='position-relative d-flex align-items-center justify-content-center h-100'>
											<IconPhoto className='text-dark fs-16' />
										</div>
									</div>
									<div className='d-inline-flex flex-column align-items-start'>
										<label className='btn btn-sm btn-primary mb-2'>
											<IconFileBroken className='me-1' size={16} />
											Upload file
											<input
												type='file'
												className='form-control d-none'
												multiple
											/>
										</label>
										<span>JPG, GIF or PNG. Max size of 800K</span>
									</div>
								</div>
							</div>
						</div>

						{/* Buttons */}
						<div className='d-flex justify-content-end mt-4'>
							<button
								type='button'
								className='btn btn-light me-2'
								onClick={() => window.history.back()}>
								Cancel
							</button>
							<button
								type='button'
								className='btn btn-primary'
								onClick={() => setShowConfirmModal(true)}>
								Submit Complaint
							</button>
						</div>
					</form>
				</div>

				{/* Footer */}
				<div className='card-footer bg-white border-top text-muted text-center small'>
					© {new Date().getFullYear()} Complaint Management System
				</div>
			</div>
		</div>
	);
};

export default AddComplaintPage;
