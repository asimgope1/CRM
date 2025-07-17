import React from "react";
import {
	IconCalendarDue,
	IconRefresh,
	IconTransitionTop,
} from "@tabler/icons-react";

const PageHeader = ({ title, showDatePicker = true }) => {
	const today = new Date();
	const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

	return (
		<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
			<div>
				<h4 className='mb-0 fw-semibold text-dark'>{title}</h4>
			</div>

			{showDatePicker && (
				<div className='gap-2 d-flex align-items-center flex-wrap'>
					{/* Date Range Picker (styled placeholder) */}
					<div
						className='daterangepick form-control w-auto d-flex align-items-center shadow-sm'
						style={{ backgroundColor: "#f5f5f5", border: "1px solid #ddd" }}>
						<IconCalendarDue size={16} className='text-dark me-2' />
						<span className='reportrange-picker-field text-dark'>
							{today.toLocaleDateString()} - {nextWeek.toLocaleDateString()}
						</span>
					</div>

					{/* Refresh Button */}
					<button
						className='btn btn-icon btn-outline-light shadow'
						data-bs-toggle='tooltip'
						title='Refresh'>
						<IconRefresh size={18} />
					</button>

					{/* Collapse Button */}
					<button
						className='btn btn-icon btn-outline-light shadow'
						data-bs-toggle='tooltip'
						title='Collapse'
						id='collapse-header'>
						<IconTransitionTop size={18} />
					</button>
				</div>
			)}
		</div>
	);
};

export default PageHeader;
