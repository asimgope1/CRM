import React, { useState, useMemo } from "react";
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
	IconListTree,
	IconGridDots,
	IconMail,
	IconPhone,
	IconMapPin,
	IconStarFilled,
	IconPhoneCheck,
	IconMessageCircleShare,
	IconBrandFacebook,
	IconLoader,
	IconUser,
	IconChevronRight,
	IconGenderMale,
	IconGenderFemale,
} from "@tabler/icons-react";
import ContactModal from "../components/ContactModal";

function Contacts() {
	const [showModal, setShowModal] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [nameFilterTerm, setNameFilterTerm] = useState("");
	const [selectedTags, setSelectedTags] = useState([]);
	const [selectedStatus, setSelectedStatus] = useState([]);
	const [modalMode, setModalMode] = useState("add");
	const [currentContact, setCurrentContact] = useState(null);
	const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

	const handleShow =
		(mode = "add", contact = null) =>
		() => {
			setModalMode(mode);
			setCurrentContact(contact);
			setShowModal(true);
		};

	const handleHide = () => setShowModal(false);

	const handleDelete = (id) => {
		console.log("Delete contact", id);
		// Actual delete implementation would go here
	};

	const contacts = [
	    {
            id: 1,
            name: "John Doe",
            position: "Software Engineer",
            email: " ",
            phone: "123-456-7890",
            location: "New York, USA",
            tags: ["Collab", "VIP"],
            status: "Active",
            // avatar: "avatar1.jpg",
            owner: "owner1.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Project Manager",
            email: " ", 
            phone: "987-654-3210",
            location: "San Francisco, USA",
            tags: ["Promotion"],
            status: "Inactive",
            // avatar: "avatar2.jpg",
            owner: "owner2.jpg",
        },
        {
            id: 3,
            name: "Alice Johnson",
            position: "UX Designer",
            email: " ",
            phone: "555-123-4567",
            location: "Los Angeles, USA",
            tags: ["Collab"],
            status: "Active",
            // avatar: "avatar3.jpg",
            // owner: "owner3.jpg",
        },
        {
            id: 4,
            name: "Bob Brown",
            position: "Data Scientist",
            email: " ",
            phone: "444-555-6666",
            location: "Chicago, USA",
            tags: ["VIP"],
            status: "Inactive",
            // avatar: "avatar4.jpg",
            // owner: "owner4.jpg",
        },
        {
            id: 5,
            name: "Charlie Green",
            position: "DevOps Engineer",
            email: " ",
            phone: "333-222-1111",
            location: "Seattle, USA",
            tags: ["Collab", "Promotion"],
            status: "Active",
            // avatar: "avatar5.jpg",
            // owner: "owner5.jpg",
        },
        {
            id: 6,
            name: "Diana Prince",
            position: "Product Owner",
            email: " ",
            phone: "222-333-4444",
            location: "Miami, USA",
            tags: ["VIP"],
            status: "Inactive",
            // avatar: "avatar6.jpg",
            // owner: "owner6.jpg",
        },
	];

	const filteredContacts = useMemo(() => {
		return contacts.filter((contact) => {
			const matchesSearch = searchTerm
				? Object.values(contact).some((value) =>
						Array.isArray(value)
							? value.some((v) =>
									v.toLowerCase().includes(searchTerm.toLowerCase()),
							  )
							: String(value).toLowerCase().includes(searchTerm.toLowerCase()),
				  )
				: true;

			const matchesNameFilter = nameFilterTerm
				? contact.name.toLowerCase().includes(nameFilterTerm.toLowerCase())
				: true;

			const matchesTags =
				selectedTags.length > 0
					? selectedTags.some((tag) => contact.tags.includes(tag))
					: true;

			const matchesStatus =
				selectedStatus.length > 0
					? selectedStatus.includes(contact.status)
					: true;

			return matchesSearch && matchesNameFilter && matchesTags && matchesStatus;
		});
	}, [contacts, searchTerm, nameFilterTerm, selectedTags, selectedStatus]);

	const handleTagToggle = (tag) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
		);
	};

	const handleStatusToggle = (status) => {
		setSelectedStatus((prev) =>
			prev.includes(status)
				? prev.filter((s) => s !== status)
				: [...prev, status],
		);
	};

	const resetFilters = () => {
		setSearchTerm("");
		setNameFilterTerm("");
		setSelectedTags([]);
		setSelectedStatus([]);
	};
const getGenderIcon = (name) => {
	// Simple heuristic - in a real app you'd want actual gender data
	const femaleNames = ["Jane", "Alice", "Diana"];
	return femaleNames.some((fn) => name.includes(fn)) ? (
		<IconGenderFemale className='text-pink' size={16} />
	) : (
		<IconGenderMale className='text-blue' size={16} />
	);
};
	return (
		<Layout title='Contacts' showHeader={false}>
			<ContactModal
				show={showModal}
				onHide={handleHide}
				mode={modalMode}
				contact={currentContact}
			/>

			<div className='container mt-4'>
				{/* Header */}
				<div className='d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap'>
					<div>
						<h4 className='mb-1'>
							Contacts
							<span className='badge badge-soft-primary ms-2'>
								{contacts.length}
							</span>
						</h4>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb mb-0 p-0'>
								<li className='breadcrumb-item d-flex align-items-center'>
									<Link to='/'>Home</Link>
									<IconChevronRight className='mx-2' size={14} />
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Contacts
								</li>
							</ol>
						</nav>
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

				{/* Filters and View Toggle */}
				<div className='d-flex align-items-center justify-content-between gap-2 mb-3'>
					<div className='d-flex align-items-center gap-2 flex-nowrap'>
						<div className='dropdown'>
							<button
								className='btn btn-outline-light shadow px-2'
								data-bs-toggle='dropdown'>
								<IconFilter className='me-2' size={18} />
								Filter
								<IconChevronDown className='ms-2' size={14} />
							</button>
							<div className='dropdown-menu dropdown-menu-lg p-0'>
								<div className='filter-header d-flex align-items-center justify-content-between border-bottom p-3'>
									<h6 className='mb-0'>
										<IconFilter className='me-1' size={18} />
										Filter
									</h6>
									<button
										type='button'
										className='btn-close'
										data-bs-dismiss='dropdown'
										aria-label='Close'></button>
								</div>
								<div className='filter-set-view p-3'>
									<div className='accordion' id='accordionExample'>
										<div className='filter-set-content'>
											<div className='filter-set-content-head'>
												<a
													href='#'
													data-bs-toggle='collapse'
													data-bs-target='#collapseTwo'
													aria-expanded='true'
													aria-controls='collapseTwo'>
													Name
												</a>
											</div>
											<div
												className='filter-set-contents accordion-collapse collapse show'
												id='collapseTwo'
												data-bs-parent='#accordionExample'>
												<div className='filter-content-list bg-light rounded border p-2 shadow mt-2'>
													<div className='mb-2'>
														<div className='input-icon-start input-icon position-relative'>
															<span className='input-icon-addon fs-12'>
																<IconSearch size={14} />
															</span>
															<input
																type='text'
																className='form-control form-control-md'
																placeholder='Search names'
																value={nameFilterTerm}
																onChange={(e) =>
																	setNameFilterTerm(e.target.value)
																}
															/>
														</div>
													</div>
													<ul className='mb-0'>
														{contacts.slice(0, 5).map((contact) => (
															<li className='mb-1' key={contact.id}>
																<label className='dropdown-item px-2 d-flex align-items-center'>
																	<input
																		className='form-check-input m-0 me-1'
																		type='checkbox'
																		checked={nameFilterTerm === contact.name}
																		onChange={() => {
																			setNameFilterTerm((prev) =>
																				prev === contact.name
																					? ""
																					: contact.name,
																			);
																		}}
																	/>
																	<span className='avatar avatar-xs rounded-circle me-2'>
																		{contact.avatar ? (
																			<img
																				// src={`assets/img/profiles/${contact.avatar}`}
																				className='flex-shrink-0 rounded-circle'
																				alt='img'
																			/>
																		) : (
																			<div
																				className='bg-light rounded-circle d-flex align-items-center justify-content-center'
																				style={{
																					width: "24px",
																					height: "24px",
																				}}>
																				<IconUser size={14} />
																			</div>
																		)}
																	</span>
																	{contact.name}
																</label>
															</li>
														))}

														<li>
															<a
																href='javascript:void(0);'
																className='link-primary text-decoration-underline p-2 d-flex'>
																Load More
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className='filter-set-content'>
											<div className='filter-set-content-head'>
												<a
													href='#'
													className='collapsed'
													data-bs-toggle='collapse'
													data-bs-target='#collapseThree'
													aria-expanded='false'
													aria-controls='collapseThree'>
													Tags
												</a>
											</div>
											<div
												className='filter-set-contents accordion-collapse collapse'
												id='collapseThree'
												data-bs-parent='#accordionExample'>
												<div className='filter-content-list bg-light rounded border p-2 shadow mt-2'>
													<ul>
														{["Collab", "Promotion", "VIP"].map((tag) => (
															<li key={tag}>
																<label className='dropdown-item px-2 d-flex align-items-center'>
																	<input
																		className='form-check-input m-0 me-1'
																		type='checkbox'
																		checked={selectedTags.includes(tag)}
																		onChange={() => handleTagToggle(tag)}
																	/>
																	{tag}
																</label>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>
										<div className='filter-set-content'>
											<div className='filter-set-content-head'>
												<a
													href='#'
													className='collapsed'
													data-bs-toggle='collapse'
													data-bs-target='#Status'
													aria-expanded='false'
													aria-controls='Status'>
													Status
												</a>
											</div>
											<div
												className='filter-set-contents accordion-collapse collapse'
												id='Status'
												data-bs-parent='#accordionExample'>
												<div className='filter-content-list bg-light rounded border p-2 shadow mt-2'>
													<ul>
														{["Active", "Inactive"].map((status) => (
															<li key={status}>
																<label className='dropdown-item px-2 d-flex align-items-center'>
																	<input
																		className='form-check-input m-0 me-1'
																		type='checkbox'
																		checked={selectedStatus.includes(status)}
																		onChange={() => handleStatusToggle(status)}
																	/>
																	{status}
																</label>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className='d-flex align-items-center gap-2 mt-3'>
										<button
											className='btn btn-outline-light w-100'
											onClick={resetFilters}>
											Reset
										</button>
										<button
											className='btn btn-primary w-100'
											data-bs-dismiss='dropdown'>
											Apply
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='input-icon input-icon-start position-relative'>
							<span className='input-icon-addon text-dark'>
								<IconSearch size={18} />
							</span>
							<input
								type='text'
								className='form-control'
								placeholder='Search contacts...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
					</div>
					<div className='d-flex align-items-center gap-2 flex-wrap'>
						<div className='d-flex align-items-center shadow p-1 rounded border bg-white view-icons'>
							<button
								className={`btn btn-sm p-1 border-0 fs-14 ${
									viewMode === "list" ? "active" : ""
								}`}
								onClick={() => setViewMode("list")}>
								<IconListTree size={18} />
							</button>
							<button
								className={`btn btn-sm p-1 border-0 ms-1 fs-14 ${
									viewMode === "grid" ? "active" : ""
								}`}
								onClick={() => setViewMode("grid")}>
								<IconGridDots size={18} />
							</button>
						</div>
						<button
							className='btn btn-primary'
							onClick={handleShow("add", null)}>
							<IconSquareRoundedPlusFilled className='me-1' size={18} />
							Add Contact
						</button>
					</div>
				</div>

				{viewMode === "grid" ? (
					<>
						{/* Contact Grid */}
						<div className='row'>
							{filteredContacts.map((contact) => (
								<div className='col-xxl-3 col-xl-4 col-md-6' key={contact.id}>
									<div className='card border shadow'>
										<div className='card-body'>
											<div className='d-flex align-items-center justify-content-between mb-3'>
												<div className='d-flex align-items-center'>
													<Link
														to='contact-details.html'
														className='avatar avatar-md flex-shrink-0 me-2'>
														{contact.avatar ? (
															<img
																// src={`assets/img/profiles/${contact.avatar}`}
																alt='img'
																className='rounded-circle'
															/>
														) : (
															<div className='position-relative'>
																<div
																	className='bg-light rounded-circle d-flex align-items-center justify-content-center'
																	style={{ width: "40px", height: "40px" }}>
																	<IconUser size={20} />
																</div>
																<span className='position-absolute bottom-0 end-0'>
																	{getGenderIcon(contact.name)}
																</span>
															</div>
														)}
													</Link>
													<div>
														<h6 className='fs-14'>
															<Link
																to='contact-details.html'
																className='fw-medium'>
																{contact.name}
															</Link>
														</h6>
														<p className='text-default mb-0'>
															{contact.position}
														</p>
													</div>
												</div>
												<div className='dropdown table-action'>
													<button
														className='action-icon btn btn-icon btn-sm btn-outline-light shadow'
														data-bs-toggle='dropdown'
														aria-expanded='false'>
														<IconDotsVertical size={18} />
													</button>
													<div className='dropdown-menu dropdown-menu-right'>
														<button
															className='dropdown-item'
															onClick={handleShow("edit", contact)}>
															<IconEdit className='text-blue me-1' size={16} />{" "}
															Edit
														</button>
														<button
															className='dropdown-item'
															onClick={() => handleDelete(contact.id)}>
															<IconTrash className='me-1' size={16} /> Delete
														</button>
														<Link
															className='dropdown-item'
															to={`/contact-details/${contact.id}`}>
															<IconEye
																className='text-blue-light me-1'
																size={16}
															/>{" "}
															Preview
														</Link>
													</div>
												</div>
											</div>
											<div className='d-block'>
												<div className='d-flex flex-column'>
													<p className='text-default d-inline-flex align-items-center mb-2'>
														<IconMail className='text-dark me-1' size={18} />
														<a href={`mailto:${contact.email}`}>
															{contact.email}
														</a>
													</p>
													<p className='text-default d-inline-flex align-items-center mb-2'>
														<IconPhone className='text-dark me-1' size={18} />
														{contact.phone}
													</p>
													<p className='text-default d-inline-flex align-items-center'>
														<IconMapPin className='text-dark me-1' size={18} />
														{contact.location}
													</p>
												</div>
												<div className='d-flex align-items-center mt-2'>
													{contact.tags.map((tag, index) => (
														<span
															key={index}
															className={`badge badge-tag badge-soft-${
																tag === "VIP" ? "warning" : "success"
															} me-2`}>
															{tag}
														</span>
													))}
												</div>
											</div>
											<div className='d-flex justify-content-between align-items-center mt-3 pt-3 border-top'>
												<div className='d-flex align-items-center grid-social-links'>
													<a
														href='#'
														className='avatar avatar-xs text-dark rounded-circle me-1'>
														<IconMail size={14} />
													</a>
													<a
														href='#'
														className='avatar avatar-xs text-dark rounded-circle me-1'>
														<IconPhoneCheck size={14} />
													</a>
													<a
														href='#'
														className='avatar avatar-xs text-dark rounded-circle me-1'>
														<IconMessageCircleShare size={14} />
													</a>
													<a
														href='#'
														className='avatar avatar-xs text-dark rounded-circle'>
														<IconBrandFacebook size={14} />
													</a>
												</div>
												<div className='d-flex align-items-center'>
													<a
														href='javascript:void(0);'
														className='avatar avatar-xs'>
														{contact.owner ? (
															<img
																src={`assets/img/profiles/${contact.owner}`}
																alt='img'
																className='rounded-circle'
															/>
														) : (
															<div
																className='bg-light rounded-circle d-flex align-items-center justify-content-center'
																style={{ width: "24px", height: "24px" }}>
																<IconUser size={12} />
															</div>
														)}
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{filteredContacts.length === 0 && (
							<div className='text-center py-5'>
								<p className='text-muted'>
									No contacts found matching your filters
								</p>
							</div>
						)}
					</>
				) : (
					<>
						{/* Table View */}
						<div className='card border-0 rounded-0'>
							<div className='card-body'>
								<div className='table-responsive custom-table'>
									<table className='table table-nowrap'>
										<thead className='table-light'>
											<tr>
												<th>
													<input type='checkbox' />
												</th>
												<th>Name</th>
												<th>Position</th>
												<th>Email</th>
												<th>Phone</th>
												<th>Location</th>
												<th>Tags</th>
												<th className='text-end'>Action</th>
											</tr>
										</thead>
										<tbody>
											{filteredContacts.length > 0 ? (
												filteredContacts.map((contact) => (
													<tr key={contact.id}>
														<td>
															<input
																type='checkbox'
																className='form-check-input'
															/>
														</td>
														<td>
															<div className='d-flex align-items-center'>
																<div className='position-relative me-2'>
																	{contact.avatar ? (
																		<img
																			// src={`assets/img/profiles/${contact.avatar}`}
																			alt={contact.name}
																			className='rounded-circle'
																			width='32'
																			height='32'
																		/>
																	) : (
																		<div
																			className='bg-light rounded-circle d-flex align-items-center justify-content-center'
																			style={{ width: "32px", height: "32px" }}>
																			<IconUser size={16} />
																		</div>
																	)}
																	<span className='position-absolute bottom-0 end-0 bg-white rounded-circle p-1'>
																		{getGenderIcon(contact.name)}
																	</span>
																</div>
																<span>{contact.name}</span>
															</div>
														</td>
														<td>{contact.position}</td>
														<td>
															<a href={`mailto:${contact.email}`}>
																{contact.email}
															</a>
														</td>
														<td>{contact.phone}</td>
														<td>{contact.location}</td>
														<td>
															{contact.tags.map((tag, index) => (
																<span
																	key={index}
																	className={`badge badge-tag badge-soft-${
																		tag === "VIP" ? "warning" : "success"
																	} me-1`}>
																	{tag}
																</span>
															))}
														</td>
														<td className='text-end'>
															<div className='dropdown'>
																<button
																	className='btn btn-icon btn-outline-light shadow'
																	type='button'
																	data-bs-toggle='dropdown'
																	aria-expanded='false'>
																	<IconDotsVertical size={18} />
																</button>
																<div className='dropdown-menu dropdown-menu-end'>
																	<button
																		className='dropdown-item'
																		type='button'
																		onClick={handleShow("edit", contact)}>
																		<IconEdit
																			className='text-blue me-1'
																			size={16}
																		/>
																		Edit
																	</button>

																	<button
																		className='dropdown-item'
																		type='button'
																		onClick={() => handleDelete(contact.id)}>
																		<IconTrash
																			className='text-danger me-1'
																			size={16}
																		/>
																		Delete
																	</button>
																	<Link
																		className='dropdown-item'
																		to={`/contact-details/${contact.id}`}>
																		<IconEye
																			className='text-blue-light me-1'
																			size={16}
																		/>
																		Preview
																	</Link>
																</div>
															</div>
														</td>
													</tr>
												))
											) : (
												<tr>
													<td
														colSpan='8'
														className='text-center text-muted py-4'>
														No contacts found with the current filters.
													</td>
												</tr>
											)}
										</tbody>
									</table>
								</div>

								{/* Pagination */}
								<div className='row align-items-center mt-3'>
									<div className='col-md-6'>
										Showing 1 to {filteredContacts.length} of{" "}
										{filteredContacts.length} entries
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
					</>
				)}
			</div>
		</Layout>
	);
}

export default Contacts;
