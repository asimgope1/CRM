import { IconCircleCheck } from "@tabler/icons-react";
import React from "react";

const ConfirmSubmitModal = ({ show, onClose, onConfirm }) => {
	return (
		<>
			{show && (
				<div className='offcanvas-backdrop fade show' onClick={onClose}></div>
			)}

			<div
				className={`modal fade ${show ? "show" : ""}`}
				style={{ display: show ? "block" : "none" }}>
				<div className='modal-dialog modal-dialog-centered modal-sm rounded-0'>
					<div className='modal-content rounded-0'>
						<div className='modal-body p-4 text-center position-relative'>
							<div className='mb-3 position-relative z-1'>
								<span className='avatar avatar-xl badge-soft-success border-0 text-success rounded-circle'>
									<IconCircleCheck className='fs-24' />
								</span>
							</div>
							<h5 className='mb-1'>Submit Confirmation</h5>
							<p className='mb-3'>
								Are you sure you want to submit this form? Once submitted,
								changes may not be reversible.
							</p>
							<div className='d-flex justify-content-center'>
								<button
									className='btn btn-light position-relative z-1 me-2 w-100'
									onClick={onClose}>
									Cancel
								</button>
								<button
									className='btn btn-success position-relative z-1 w-100'
									onClick={onConfirm}>
									Yes, Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ConfirmSubmitModal;
