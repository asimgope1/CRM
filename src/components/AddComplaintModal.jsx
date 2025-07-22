import React from "react";
import {
	IconUserPlus,
	IconMapPinCog,
	IconSocial,
	IconAccessible,
	IconPhoto,
	IconFileBroken,
	IconStar,
	IconX,
} from "@tabler/icons-react";

const AddComplaintModal = () => {
	return (
		<div
			className='offcanvas offcanvas-end offcanvas-large'
			tabIndex='-1'
			id='add_complaint'>
			<div className='offcanvas-header border-bottom'>
				<h5 className='mb-0'>Add New Complaint</h5>
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
										<div className='col-md-12'>
											<div className='mb-3'>
												<label className='form-label'>
													Complaint Subject
													<span className='text-danger'>*</span>
												</label>
												<input type='text' className='form-control' />
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Company<span className='text-danger'>*</span>
												</label>
												<select className='form-select'>
													<option>Select Company</option>
													<option>NovaWave LLC</option>
													<option>TechSolutions Inc</option>
													<option>Global Enterprises</option>
												</select>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Contact Person<span className='text-danger'>*</span>
												</label>
												<select className='form-select'>
													<option>Select Contact</option>
													<option>John Doe</option>
													<option>Jane Smith</option>
													<option>Robert Johnson</option>
												</select>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Priority<span className='text-danger'>*</span>
												</label>
												<select className='form-select'>
													<option>Select Priority</option>
													<option>Low</option>
													<option>Medium</option>
													<option>High</option>
													<option>Critical</option>
												</select>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Status<span className='text-danger'>*</span>
												</label>
												<select className='form-select'>
													<option>Select Status</option>
													<option>Open</option>
													<option>In Progress</option>
													<option>Resolved</option>
													<option>Closed</option>
												</select>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Complaint Date<span className='text-danger'>*</span>
												</label>
												<input type='date' className='form-control' />
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>
													Due Date<span className='text-danger'>*</span>
												</label>
												<input type='date' className='form-control' />
											</div>
										</div>
										<div className='col-md-12'>
											<div className='mb-3'>
												<label className='form-label'>
													Description<span className='text-danger'>*</span>
												</label>
												<textarea className='form-control' rows='4'></textarea>
											</div>
										</div>
										<div className='col-md-12'>
											<div className='d-flex align-items-center mb-3'>
												<div className='avatar avatar-xxl border border-dashed me-3 flex-shrink-0'>
													<div className='position-relative d-flex align-items-center'>
														<IconPhoto className='text-dark fs-16' />
													</div>
												</div>
												<div className='d-inline-flex flex-column align-items-start'>
													<div className='drag-upload-btn btn btn-sm btn-primary position-relative mb-2'>
														<IconFileBroken className='me-1' size={16} />
														Upload file
														<input
															type='file'
															className='form-control image-sign'
															multiple=''
														/>
													</div>
													<span>JPG, GIF or PNG. Max size of 800K</span>
												</div>
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
									Additional Details
								</a>
							</div>
							<div
								className='accordion-collapse collapse'
								id='additional_details'
								data-bs-parent='#complaint_accordion'>
								<div className='accordion-body border-top'>
									<div className='row'>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Assigned To</label>
												<select className='form-select'>
													<option>Select Assignee</option>
													<option>Support Team</option>
													<option>Technical Team</option>
													<option>Sarah Johnson</option>
													<option>Michael Brown</option>
												</select>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Department</label>
												<select className='form-select'>
													<option>Select Department</option>
													<option>Technical Support</option>
													<option>Billing</option>
													<option>Sales</option>
													<option>Customer Service</option>
												</select>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Category</label>
												<select className='form-select'>
													<option>Select Category</option>
													<option>Technical Issue</option>
													<option>Billing Problem</option>
													<option>Service Request</option>
													<option>General Inquiry</option>
												</select>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3 position-relative'>
												<label className='form-label'>Severity Level</label>
												<div className='input-group w-auto input-group-flat'>
													<select className='form-select'>
														<option>Select Severity</option>
														<option>Minor</option>
														<option>Moderate</option>
														<option>Major</option>
														<option>Critical</option>
													</select>
													<span className='input-group-text'>
														<IconStar size={16} />
													</span>
												</div>
											</div>
										</div>
										<div className='col-md-12'>
											<div className='mb-3'>
												<label className='form-label'>Tags</label>
												<input
													className='input-tags form-control border-0 h-100'
													data-choices
													data-choices-limit='infinite'
													data-choices-removeItem
													type='text'
													value='Urgent, Customer'
												/>
												<span className='fs-13'>
													Enter value separated by comma
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Resolution Details */}
						<div className='accordion-item border-top rounded mb-3'>
							<div className='accordion-header'>
								<a
									href='#'
									className='accordion-button accordion-custom-button rounded'
									data-bs-toggle='collapse'
									data-bs-target='#resolution_details'>
									<span className='avatar avatar-md rounded me-1'>
										<IconSocial size={18} />
									</span>
									Resolution Details
								</a>
							</div>
							<div
								className='accordion-collapse collapse'
								id='resolution_details'
								data-bs-parent='#complaint_accordion'>
								<div className='accordion-body border-top'>
									<div className='row'>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Resolution Date</label>
												<input type='date' className='form-control' />
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Resolved By</label>
												<select className='form-select'>
													<option>Select Resolver</option>
													<option>Support Team</option>
													<option>Technical Team</option>
													<option>Sarah Johnson</option>
												</select>
											</div>
										</div>
										<div className='col-md-12'>
											<div className='mb-3'>
												<label className='form-label'>Resolution Summary</label>
												<textarea className='form-control' rows='3'></textarea>
											</div>
										</div>
										<div className='col-md-12'>
											<div className='mb-0'>
												<label className='form-label'>Customer Feedback</label>
												<textarea className='form-control' rows='3'></textarea>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Access Control */}
						<div className='accordion-item border-top rounded mb-3'>
							<div className='accordion-header'>
								<a
									href='#'
									className='accordion-button accordion-custom-button rounded'
									data-bs-toggle='collapse'
									data-bs-target='#access_control'>
									<span className='avatar avatar-md rounded me-1'>
										<IconAccessible size={18} />
									</span>
									Access Control
								</a>
							</div>
							<div
								className='accordion-collapse collapse'
								id='access_control'
								data-bs-parent='#complaint_accordion'>
								<div className='accordion-body border-top'>
									<div className='row'>
										<div className='col-md-12'>
											<div className='mb-0'>
												<label className='form-label'>Visibility</label>
												<div className='d-flex flex-wrap gap-2'>
													<div className='form-check'>
														<input
															type='radio'
															id='visibility_public'
															name='visibility'
															className='form-check-input'
														/>
														<label
															className='form-check-label'
															htmlFor='visibility_public'>
															Public
														</label>
													</div>
													<div className='form-check'>
														<input
															type='radio'
															id='visibility_private'
															name='visibility'
															className='form-check-input'
														/>
														<label
															className='form-check-label'
															htmlFor='visibility_private'>
															Private
														</label>
													</div>
													<div className='form-check'>
														<input
															type='radio'
															id='visibility_custom'
															name='visibility'
															className='form-check-input'
															checked
														/>
														<label
															className='form-check-label'
															htmlFor='visibility_custom'>
															Select People
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='d-flex align-items-center justify-content-end'>
						<button
							type='button'
							data-bs-dismiss='offcanvas'
							className='btn btn-light me-2'>
							Cancel
						</button>
						<button type='button' className='btn btn-primary'>
							Submit Complaint
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddComplaintModal;
