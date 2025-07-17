import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import {
	IconSearch,
	IconSquareRoundedPlusFilled,
	IconFilter,
	IconChevronDown,
	IconCalendarDue,
	IconSortAscending2,
	IconColumns3,
	IconDotsVertical,
	IconEdit,
	IconTrash,
	IconEye,
	IconX,
	IconRefresh,
	IconFileTypePdf,
	IconFileTypeXls,
	IconPackageExport,
} from "@tabler/icons-react";

function Complain() {
	return (
		<Layout title='Complain' showHeader={false}>
			<div className='container mt-4'>
				{/* Header */}
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							Complaints
							<span className='badge badge-soft-primary ms-2'>15</span>
						</h4>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb mb-0 p-0'>
								<li className='breadcrumb-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Complaints
								</li>
							</ol>
						</nav>
					</div>
					<div className='gap-2 d-flex align-items-center flex-wrap'>
						<div className='dropdown'>
							<button
								className='dropdown-toggle btn btn-outline-light px-2 shadow'
								data-bs-toggle='dropdown'>
								<IconPackageExport className='me-2' size={18} />
								Export
							</button>
							<div className='dropdown-menu dropdown-menu-end'>
								<ul>
									<li>
										<a className='dropdown-item' href='#'>
											<IconFileTypePdf className='me-1' size={18} />
											Export as PDF
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='#'>
											<IconFileTypeXls className='me-1' size={18} />
											Export as Excel
										</a>
									</li>
								</ul>
							</div>
						</div>
						<button
							className='btn btn-icon btn-outline-light shadow'
							title='Refresh'>
							<IconRefresh size={18} />
						</button>
						<button
							className='btn btn-icon btn-outline-light shadow'
							title='Collapse'
							id='collapse-header'>
							<IconX size={18} />
						</button>
					</div>
				</div>

				{/* Card */}
				<div className='card border-0 rounded-0'>
					<div className='card-header d-flex align-items-center justify-content-between gap-2 flex-wrap'>
						<div className='input-icon input-icon-start position-relative'>
							<span className='input-icon-addon text-dark'>
								<IconSearch size={18} />
							</span>
							<input
								type='text'
								className='form-control'
								placeholder='Search complaints...'
							/>
						</div>
						<Link
							to='#'
							className='btn btn-primary'
							data-bs-toggle='offcanvas'
							data-bs-target='#add_complaint'>
							<IconSquareRoundedPlusFilled className='me-1' size={18} />
							Add New Complaint
						</Link>
					</div>

					<div className='card-body'>
						{/* Filters */}
						<div className='d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3'>
							<div className='d-flex align-items-center gap-2 flex-wrap'>
								<div className='dropdown'>
									<button
										className='btn btn-outline-light shadow px-2'
										data-bs-toggle='dropdown'>
										<IconFilter className='me-2' size={18} />
										Filter
										<IconChevronDown className='ms-2' size={14} />
									</button>
								</div>
								<div
									id='reportrange'
									className='reportrange-picker d-flex align-items-center shadow'>
									<IconCalendarDue className='text-dark fs-14 me-1' size={18} />
									<span className='reportrange-picker-field'>Today</span>
								</div>
							</div>

							<div className='d-flex align-items-center gap-2 flex-wrap'>
								<div className='dropdown'>
									<button
										className='dropdown-toggle btn btn-outline-light px-2 shadow'
										data-bs-toggle='dropdown'>
										<IconSortAscending2 className='me-2' size={18} />
										Sort By
									</button>
									<div className='dropdown-menu'>
										<ul>
											<li>
												<a className='dropdown-item' href='#'>
													Newest First
												</a>
											</li>
											<li>
												<a className='dropdown-item' href='#'>
													Oldest First
												</a>
											</li>
											<li>
												<a className='dropdown-item' href='#'>
													Priority
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className='dropdown'>
									<button
										className='btn bg-soft-indigo px-2 border-0'
										data-bs-toggle='dropdown'>
										<IconColumns3 className='me-2' size={18} />
										Manage Columns
									</button>
								</div>
							</div>
						</div>

						{/* Table */}
						<div className='table-responsive custom-table'>
							<table className='table table-nowrap'>
								<thead className='table-light'>
									<tr>
										<th>
											<input type='checkbox' />
										</th>
										<th>ID</th>
										<th>Subject</th>
										<th>Company</th>
										<th>Status</th>
										<th>Priority</th>
										<th>Date</th>
										<th className='text-end'>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<input type='checkbox' />
										</td>
										<td>#COMP-001</td>
										<td>Payment not processed</td>
										<td>NovaWave LLC</td>
										<td>
											<span className='badge bg-warning'>Pending</span>
										</td>
										<td>
											<span className='badge bg-danger'>High</span>
										</td>
										<td>25 Feb 2025</td>
										<td className='text-end'>
											<div className='dropdown'>
												<button
													className='btn btn-icon btn-outline-light shadow'
													data-bs-toggle='dropdown'>
													<IconDotsVertical />
												</button>
												<div className='dropdown-menu dropdown-menu-end'>
													<a className='dropdown-item' href='#'>
														<IconEdit className='me-1' size={16} />
														Edit
													</a>
													<a className='dropdown-item' href='#'>
														<IconTrash className='me-1' size={16} />
														Delete
													</a>
													<a className='dropdown-item' href='#'>
														<IconEye className='me-1' size={16} />
														View
													</a>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						{/* Pagination */}
						<div className='row align-items-center mt-3'>
							<div className='col-md-6'>Showing 1 to 5 of 15 entries</div>
							<div className='col-md-6'>
								<ul className='pagination justify-content-end'>
									<li className='page-item disabled'>
										<a className='page-link' href='#'>
											Previous
										</a>
									</li>
									<li className='page-item active'>
										<a className='page-link' href='#'>
											1
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#'>
											2
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#'>
											Next
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Complain;
