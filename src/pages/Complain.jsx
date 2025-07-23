import React, { useState, useEffect } from "react";
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
import AddComplaintModal from "../components/AddComplaintModal";
import EditComplainModal from "../components/EditCompLainModal";
import DeleteModal from "../components/DeleteModal";
import Layout from "../Layout/Layout";
import StatusCheckModal from "../components/StatusCheckModal";

function Complain() {
	const [showAddModal, setShowAddModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	 const [showModal, setShowModal] = useState(false);

	// Sample data
	const initialComplaints = [
		{
			id: "COMP-001",
			date: new Date("2025-02-25"),
			department: "Finance",
			issueType: "Payment Issue",
			status: "Pending",
			priority: "High",
			lastContact: new Date("2025-02-27"),
		},
		{
			id: "COMP-002",
			date: new Date("2025-03-10"),
			department: "IT Support",
			issueType: "Login Problem",
			status: "Resolved",
			priority: "Medium",
			lastContact: new Date("2025-03-12"),
		},
		{
			id: "COMP-003",
			date: new Date("2025-01-15"),
			department: "Quality Control",
			issueType: "Product Defect",
			status: "In Progress",
			priority: "High",
			lastContact: new Date("2025-01-20"),
		},
		{
			id: "COMP-004",
			date: new Date("2025-03-05"),
			department: "Accounts",
			issueType: "Billing Inquiry",
			status: "Pending",
			priority: "Low",
			lastContact: new Date("2025-03-08"),
		},
		{
			id: "COMP-005",
			date: new Date("2025-02-28"),
			department: "Product Team",
			issueType: "Feature Request",
			status: "New",
			priority: "Medium",
			lastContact: new Date("2025-03-01"),
		},
	];

	const [complaints, setComplaints] = useState(initialComplaints);
	const [filteredComplaints, setFilteredComplaints] =
		useState(initialComplaints);
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [priorityFilter, setPriorityFilter] = useState("All");
	const [dateRange, setDateRange] = useState("All");
	const [sortBy, setSortBy] = useState("Newest First");

	const handleAddSubmit = (formData) => {
		console.log("Add form submitted:", formData);
		setShowAddModal(false);
	};

	const handleEditSubmit = (formData) => {
		console.log("Edit form submitted:", formData);
		setShowEditModal(false);
	};

	const handleDelete = () => {
		console.log("Complaint deleted");
		setShowDeleteModal(false);
	};

	// Filter and sort complaints
	useEffect(() => {
		let result = [...complaints];

		// Apply search filter
		if (searchTerm) {
			result = result.filter(
				(complaint) =>
					complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
					complaint.department
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					complaint.issueType.toLowerCase().includes(searchTerm.toLowerCase()),
			);
		}

		// Apply status filter
		if (statusFilter !== "All") {
			result = result.filter((complaint) => complaint.status === statusFilter);
		}

		// Apply priority filter
		if (priorityFilter !== "All") {
			result = result.filter(
				(complaint) => complaint.priority === priorityFilter,
			);
		}

		// Apply date range filter
		if (dateRange !== "All") {
			const today = new Date();
			switch (dateRange) {
				case "Today":
					result = result.filter(
						(complaint) =>
							complaint.date.toDateString() === today.toDateString(),
					);
					break;
				case "This Week":
					const weekStart = new Date(
						today.setDate(today.getDate() - today.getDay()),
					);
					result = result.filter((complaint) => complaint.date >= weekStart);
					break;
				case "This Month":
					const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
					result = result.filter((complaint) => complaint.date >= monthStart);
					break;
				case "Last 30 Days":
					const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30));
					result = result.filter(
						(complaint) => complaint.date >= thirtyDaysAgo,
					);
					break;
				default:
					break;
			}
		}

		// Apply sorting
		switch (sortBy) {
			case "Newest First":
				result.sort((a, b) => b.date - a.date);
				break;
			case "Oldest First":
				result.sort((a, b) => a.date - b.date);
				break;
			case "Priority":
				const priorityOrder = { High: 1, Medium: 2, Low: 3 };
				result.sort(
					(a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
				);
				break;
			default:
				break;
		}

		setFilteredComplaints(result);
	}, [complaints, searchTerm, statusFilter, priorityFilter, dateRange, sortBy]);

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleStatusFilter = (status) => {
		setStatusFilter(status);
	};

	const handlePriorityFilter = (priority) => {
		setPriorityFilter(priority);
	};

	const handleDateRangeChange = (range) => {
		setDateRange(range);
	};

	const handleSort = (sortOption) => {
		setSortBy(sortOption);
	};

	const handleRefresh = () => {
		setSearchTerm("");
		setStatusFilter("All");
		setPriorityFilter("All");
		setDateRange("All");
		setSortBy("Newest First");
	};

	const formatDate = (date) => {
		return date.toLocaleDateString("en-US", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	};

	return (
		<Layout title='Complaints' showHeader={false}>
			<div className='container mt-4'>
				<AddComplaintModal
					show={showAddModal}
					onClose={() => setShowAddModal(false)}
					onSubmit={handleAddSubmit}
				/>
				<EditComplainModal
					show={showEditModal}
					onClose={() => setShowEditModal(false)}
					onSubmit={handleEditSubmit}
				/>
				{showModal && (
					<StatusCheckModal
						id='check_status_modal' // Add this prop
						show={showModal}
						onClose={() => setShowModal(false)}
					/>
				)}

				<DeleteModal
					show={showDeleteModal}
					onClose={() => setShowDeleteModal(false)}
					onConfirm={handleDelete}
				/>
				{/* Header */}
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>Complaint Booking</h4>
					</div>
					<div className='gap-2 d-flex align-items-center flex-wrap'>
						<div className='dropdown'>
							<button
								className='btn btn-outline-light shadow px-2'
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
							title='Refresh'
							onClick={handleRefresh}>
							<IconRefresh size={18} />
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
								placeholder='Search complaint...'
								value={searchTerm}
								onChange={handleSearch}
							/>
						</div>
						<div className='d-flex align-items-center gap-2 flex-wrap'>
							<Link
								to='#'
								className='btn btn-primary'
								data-bs-toggle='offcanvas'
								data-bs-target='#add_complaint'
								onClick={() => setShowAddModal(true)}>
								<IconSquareRoundedPlusFilled className='me-1' size={18} />
								Add New Complaint
							</Link>
							<Link
								to='#'
								className='btn btn-primary'
								data-bs-toggle='offcanvas'
								data-bs-target='#check_status_modal' // Changed to target status modal
								onClick={(e) => {
									e.preventDefault();
									setShowModal(true);
								}}>
								<IconSearch className='me-1' size={18} />
								Check Status
							</Link>
						</div>
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
									<div className='dropdown-menu'>
										<div className='p-2'>
											<h6 className='dropdown-header'>Status</h6>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='statusFilter'
													id='statusAll'
													checked={statusFilter === "All"}
													onChange={() => handleStatusFilter("All")}
												/>
												<label className='form-check-label' htmlFor='statusAll'>
													All Statuses
												</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='statusFilter'
													id='statusPending'
													checked={statusFilter === "Pending"}
													onChange={() => handleStatusFilter("Pending")}
												/>
												<label
													className='form-check-label'
													htmlFor='statusPending'>
													Pending
												</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='statusFilter'
													id='statusInProgress'
													checked={statusFilter === "In Progress"}
													onChange={() => handleStatusFilter("In Progress")}
												/>
												<label
													className='form-check-label'
													htmlFor='statusInProgress'>
													In Progress
												</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='statusFilter'
													id='statusResolved'
													checked={statusFilter === "Resolved"}
													onChange={() => handleStatusFilter("Resolved")}
												/>
												<label
													className='form-check-label'
													htmlFor='statusResolved'>
													Resolved
												</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='statusFilter'
													id='statusNew'
													checked={statusFilter === "New"}
													onChange={() => handleStatusFilter("New")}
												/>
												<label className='form-check-label' htmlFor='statusNew'>
													New
												</label>
											</div>
										</div>
										<div className='dropdown-divider'></div>
										<div className='p-2'>
											<h6 className='dropdown-header'>Priority</h6>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='priorityFilter'
													id='priorityAll'
													checked={priorityFilter === "All"}
													onChange={() => handlePriorityFilter("All")}
												/>
												<label
													className='form-check-label'
													htmlFor='priorityAll'>
													All Priorities
												</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='priorityFilter'
													id='priorityHigh'
													checked={priorityFilter === "High"}
													onChange={() => handlePriorityFilter("High")}
												/>
												<label
													className='form-check-label'
													htmlFor='priorityHigh'>
													High
												</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='priorityFilter'
													id='priorityMedium'
													checked={priorityFilter === "Medium"}
													onChange={() => handlePriorityFilter("Medium")}
												/>
												<label
													className='form-check-label'
													htmlFor='priorityMedium'>
													Medium
												</label>
											</div>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='priorityFilter'
													id='priorityLow'
													checked={priorityFilter === "Low"}
													onChange={() => handlePriorityFilter("Low")}
												/>
												<label
													className='form-check-label'
													htmlFor='priorityLow'>
													Low
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className='dropdown'>
									<button
										className='btn btn-outline-light shadow px-2'
										data-bs-toggle='dropdown'>
										<IconCalendarDue className='me-1' size={18} />
										{dateRange === "All" ? "Date Range" : dateRange}
										<IconChevronDown className='ms-2' size={14} />
									</button>
									<div className='dropdown-menu'>
										<ul>
											<li>
												<a
													className='dropdown-item'
													href='#'
													onClick={() => handleDateRangeChange("All")}>
													All Dates
												</a>
											</li>
											<li>
												<a
													className='dropdown-item'
													href='#'
													onClick={() => handleDateRangeChange("Today")}>
													Today
												</a>
											</li>
											<li>
												<a
													className='dropdown-item'
													href='#'
													onClick={() => handleDateRangeChange("This Week")}>
													This Week
												</a>
											</li>
											<li>
												<a
													className='dropdown-item'
													href='#'
													onClick={() => handleDateRangeChange("This Month")}>
													This Month
												</a>
											</li>
											<li>
												<a
													className='dropdown-item'
													href='#'
													onClick={() => handleDateRangeChange("Last 30 Days")}>
													Last 30 Days
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='d-flex align-items-center gap-2 flex-wrap'>
								<div className='dropdown'>
									<button
										className='btn btn-outline-light shadow px-2'
										data-bs-toggle='dropdown'>
										<IconSortAscending2 className='me-2' size={18} />
										{sortBy}
									</button>
									<div className='dropdown-menu'>
										<ul>
											<li>
												<a
													className='dropdown-item'
													// href='#'
													onClick={() => handleSort("Newest First")}>
													Newest First
												</a>
											</li>
											<li>
												<a
													className='dropdown-item'
													// href='#'
													onClick={() => handleSort("Oldest First")}>
													Oldest First
												</a>
											</li>
											<li>
												<a
													className='dropdown-item'
													// href='#'
													onClick={() => handleSort("Priority")}>
													Priority
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Table */}
						<div className='table-responsive custom-table'>
							<table className='table table-nowrap'>
								<thead className='table-light'>
									<tr>
										<th>Date</th> {/* Moved Date to first column */}
										<th>ID</th> {/* ID now second */}
										<th>Department</th>
										<th>Issue Type</th>
										<th>Status</th>
										<th>Priority</th>
										<th>Last Contact</th>
										<th style={{ textAlign: "right", paddingRight: "4rem" }}>
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									{filteredComplaints.map((complaint) => (
										<tr key={complaint.id}>
											<td>{formatDate(complaint.date)}</td> {/* Date first */}
											<td>#{complaint.id}</td> {/* ID second */}
											<td>{complaint.department}</td>
											<td>{complaint.issueType}</td>
											<td>
												<span
													className={`badge ${
														complaint.status === "Pending"
															? "bg-warning"
															: complaint.status === "Resolved"
															? "bg-success"
															: complaint.status === "In Progress"
															? "bg-info"
															: "bg-secondary"
													}`}>
													{complaint.status}
												</span>
											</td>
											<td>
												<span
													className={`badge ${
														complaint.priority === "High"
															? "bg-danger"
															: complaint.priority === "Medium"
															? "bg-warning"
															: "bg-success"
													}`}>
													{complaint.priority}
												</span>
											</td>
											<td>{formatDate(complaint.lastContact)}</td>
											<td className='text-end'>
												<div className='d-flex justify-content-end gap-2'>
													<button
														className='btn btn-icon btn-outline-light shadow'
														onClick={() => 
															// setShowViewModal(true)
															{}

														}
														title='View'>
														<IconEye size={16} />
													</button>
													<button
														className='btn btn-icon btn-outline-light shadow'
														onClick={() => setShowEditModal(true)}
														title='Edit'>
														<IconEdit size={16} />
													</button>
													<button
														className='btn btn-icon btn-outline-light shadow'
														onClick={() => {
															/* Change status logic */
														}}
														title='Change Status'>
														<IconRefresh size={16} />
													</button>
													<button
														className='btn btn-icon btn-outline-light shadow'
														onClick={() => {
															/* Call logic */
														}}
														title='Call'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															width='16'
															height='16'
															viewBox='0 0 24 24'
															fill='none'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'>
															<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
														</svg>
													</button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						{/* Pagination */}
						<div className='row align-items-center mt-3'>
							<div className='col-md-6'>
								Showing 1 to {filteredComplaints.length} of{" "}
								{filteredComplaints.length} entries
							</div>
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
