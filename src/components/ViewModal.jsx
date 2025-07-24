import React from "react";
import {
	IconX,
	IconHash,
	IconCalendarTime,
	IconPhone,
	IconUser,
	IconMapPin,
	IconFileDescription,
	IconBuilding,
	IconTag,
} from "@tabler/icons-react";

const ViewModal = ({ complaint, onClose }) => {
	if (!complaint) return null;

	return (
		<>
			<div
				className='offcanvas-backdrop fade show'
				style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
				onClick={onClose}></div>
			<div
				className='offcanvas offcanvas-end offcanvas-large show'
				style={{ width: "800px" }}>
				<div className='offcanvas-header border-bottom'>
					<h5 className='mb-0'>Complaint Details</h5>
					<button
						type='button'
						className='btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle'
						onClick={onClose}
						aria-label='Close'>
						<IconX size={18} />
					</button>
				</div>

				<div className='offcanvas-body'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconHash className='me-2' size={18} />
									Complaint ID
								</label>

								<p className='form-control-plaintext'>{complaint.id}</p>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconHash className='me-2' size={18} />
									Ticket Number
								</label>
								<p className='form-control-plaintext'>{complaint.ticketNo}</p>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconCalendarTime className='me-2' size={18} />
									Date & Time
								</label>
								<p className='form-control-plaintext'>
									{new Date(complaint.date).toLocaleString()}
								</p>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconPhone className='me-2' size={18} />
									Phone Number
								</label>
								<p className='form-control-plaintext'>{complaint.phone}</p>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconUser className='me-2' size={18} />
									Customer Name
								</label>
								<p className='form-control-plaintext'>{complaint.name}</p>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconMapPin className='me-2' size={18} />
									Location
								</label>
								<p className='form-control-plaintext'>
									{complaint.city}, {complaint.state}
								</p>
							</div>
						</div>
						<div className='col-12'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconMapPin className='me-2' size={18} />
									Address
								</label>
								<p className='form-control-plaintext'>{complaint.address}</p>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconBuilding className='me-2' size={18} />
									Department
								</label>
								<p className='form-control-plaintext'>{complaint.department}</p>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconTag className='me-2' size={18} />
									Complaint Type
								</label>
								<p className='form-control-plaintext'>{complaint.type}</p>
							</div>
						</div>
						<div className='col-12'>
							<div className='mb-3'>
								<label className='form-label d-flex align-items-center text-dark'>
									<IconFileDescription className='me-2' size={18} />
									Notes
								</label>
								<div className='border rounded p-3 bg-light'>
									{complaint.notes || "No additional notes"}
								</div>
							</div>
						</div>
					</div>

					{/* History Section */}
					<div className='mt-4'>
						<h6 className='mb-3 d-flex align-items-center'>
							<IconCalendarTime className='me-2' size={18} />
							Complaint History
						</h6>
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
									{complaint.history?.length > 0 ? (
										complaint.history.map((item, index) => (
											<tr key={index}>
												<td>{item.date}</td>
												<td>{item.followedBy}</td>
												<td>{item.phase}</td>
												<td>{item.remarks}</td>
											</tr>
										))
									) : (
										<tr>
											<td colSpan='4' className='text-center text-dark'>
												No history available
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className='offcanvas-footer border-top p-3'>
					<button type='button' className='btn btn-secondary' onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</>
	);
};

export default ViewModal;
