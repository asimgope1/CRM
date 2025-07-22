import React, { useState, useEffect } from "react";
import {
  IconUserPlus,
  IconMapPin,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandSkype,
  IconPhoto,
  IconFileBroken,
  IconTrash,
  IconAccessible,
  IconCalendar,
  IconStar,
  IconSocial,
  IconMapPin as IconMapPinCog,
  IconX,
  IconChevronDown,
  IconPlus,
} from "@tabler/icons-react";

const ContactModal = ({ show, onHide, mode = "add", contact = null }) => {
  const defaultFormData = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    email: "",
    phone1: "",
    phone2: "",
    fax: "",
    deals: "",
    dob: "",
    reviews: "",
    owner: "",
    tags: "",
    source: "",
    industry: "",
    currency: "",
    language: "",
    description: "",
    streetAddress: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    facebook: "",
    skype: "",
    linkedin: "",
    twitter: "",
    whatsapp: "",
    instagram: "",
    visibility: "select-people",
    emailOptOut: false,
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [openSections, setOpenSections] = useState({
    basic: true,
    address: false,
    social: false,
    access: false,
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    } else {
      setFormData(defaultFormData);
    }
  }, [contact]);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onHide();
  };

  return (
		<div>
			{show && (
				<div className='offcanvas-backdrop fade show' onClick={onHide}></div>
			)}
			<div
				className={`offcanvas offcanvas-end offcanvas-large ${
					show ? "show" : ""
				}`}
				tabIndex='-1'
				style={{ visibility: show ? "visible" : "hidden" }}>
				<div className='offcanvas-header border-bottom'>
					<h5 className='offcanvas-title'>
						{mode === "add" ? "Add New Contact" : "Edit Contact"}
					</h5>
					<button
						type='button'
						className='btn-close'
						onClick={onHide}
						aria-label='Close'></button>
				</div>
				<div className='offcanvas-body'>
					<form onSubmit={handleSubmit}>
						<div className='accordion accordion-bordered' id='main_accordion'>
							{/* Basic Info */}
							<div className='accordion-item rounded mb-3'>
								<div className='accordion-header'>
									<button
										type='button'
										className='accordion-button accordion-custom-button rounded d-flex justify-content-between w-100'
										onClick={() => toggleSection("basic")}
										aria-expanded={openSections.basic}>
										<div className='d-flex align-items-center'>
											<span className='avatar avatar-md rounded me-1 d-flex align-items-center justify-content-center'>
												<IconUserPlus size={16} />
											</span>
											<span>Basic Info</span>
										</div>
										<IconChevronDown
											size={16}
											className={`transition-transform ${
												openSections.basic ? "rotate-180" : ""
											}`}
										/>
									</button>
								</div>
								<div
									className={`accordion-collapse collapse ${
										openSections.basic ? "show" : ""
									}`}>
									<div className='accordion-body border-top p-4'>
										<div className='row'>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>First Name</label>
												<input
													type='text'
													className='form-control'
													name='firstName'
													value={formData.firstName}
													onChange={handleChange}
													required
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Last Name</label>
												<input
													type='text'
													className='form-control'
													name='lastName'
													value={formData.lastName}
													onChange={handleChange}
													required
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Job Title</label>
												<input
													type='text'
													className='form-control'
													name='jobTitle'
													value={formData.jobTitle}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Company</label>
												<input
													type='text'
													className='form-control'
													name='company'
													value={formData.company}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-12 mb-3'>
												<div className='d-flex justify-content-between align-items-center'>
													<label className='form-label'>Email</label>
													<div className='form-check form-switch'>
														<input
															className='form-check-input'
															type='checkbox'
															name='emailOptOut'
															checked={formData.emailOptOut}
															onChange={handleChange}
														/>
														<label className='form-check-label ms-2'>
															Email Opt Out
														</label>
													</div>
												</div>
												<input
													type='email'
													className='form-control'
													name='email'
													value={formData.email}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Phone 1</label>
												<input
													type='text'
													className='form-control'
													name='phone1'
													value={formData.phone1}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Phone 2</label>
												<input
													type='text'
													className='form-control'
													name='phone2'
													value={formData.phone2}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Fax</label>
												<input
													type='text'
													className='form-control'
													name='fax'
													value={formData.fax}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Deals</label>
												<input
													type='text'
													className='form-control'
													name='deals'
													value={formData.deals}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Date of Birth</label>
												<input
													type='text'
													className='form-control'
													placeholder='dd/mm/yyyy'
													name='dob'
													value={formData.dob}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Reviews</label>
												<input
													type='text'
													className='form-control'
													name='reviews'
													value={formData.reviews}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Owner</label>
												<input
													type='text'
													className='form-control'
													name='owner'
													value={formData.owner}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Tags</label>
												<input
													type='text'
													className='form-control'
													name='tags'
													value={formData.tags}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Source</label>
												<input
													type='text'
													className='form-control'
													name='source'
													value={formData.source}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Industry</label>
												<input
													type='text'
													className='form-control'
													name='industry'
													value={formData.industry}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Currency</label>
												<input
													type='text'
													className='form-control'
													name='currency'
													value={formData.currency}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Language</label>
												<input
													type='text'
													className='form-control'
													name='language'
													value={formData.language}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-12 mb-3'>
												<label className='form-label'>Description</label>
												<textarea
													className='form-control'
													rows='3'
													name='description'
													value={formData.description}
													onChange={handleChange}></textarea>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Address Info */}
							<div className='accordion-item border-top rounded mb-3'>
								<div className='accordion-header'>
									<button
										type='button'
										className='accordion-button accordion-custom-button rounded d-flex justify-content-between w-100'
										onClick={() => toggleSection("address")}
										aria-expanded={openSections.address}>
										<div className='d-flex align-items-center'>
											<span className='avatar avatar-md rounded me-1 d-flex align-items-center justify-content-center'>
												<IconMapPinCog size={16} />
											</span>
											<span>Address Info</span>
										</div>
										<IconChevronDown
											size={16}
											className={`transition-transform ${
												openSections.address ? "rotate-180" : ""
											}`}
										/>
									</button>
								</div>
								<div
									className={`accordion-collapse collapse ${
										openSections.address ? "show" : ""
									}`}>
									<div className='accordion-body border-top p-4'>
										<div className='row'>
											<div className='col-md-12 mb-3'>
												<label className='form-label'>Street Address</label>
												<input
													type='text'
													className='form-control'
													name='streetAddress'
													value={formData.streetAddress}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Country</label>
												<input
													type='text'
													className='form-control'
													name='country'
													value={formData.country}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>State</label>
												<input
													type='text'
													className='form-control'
													name='state'
													value={formData.state}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>City</label>
												<input
													type='text'
													className='form-control'
													name='city'
													value={formData.city}
													onChange={handleChange}
												/>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Zip Code</label>
												<input
													type='text'
													className='form-control'
													name='zipcode'
													value={formData.zipcode}
													onChange={handleChange}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Social Profile */}
							<div className='accordion-item border-top rounded mb-3'>
								<div className='accordion-header'>
									<button
										type='button'
										className='accordion-button accordion-custom-button rounded d-flex justify-content-between w-100'
										onClick={() => toggleSection("social")}
										aria-expanded={openSections.social}>
										<div className='d-flex align-items-center'>
											<span className='avatar avatar-md rounded me-1 d-flex align-items-center justify-content-center'>
												<IconSocial size={16} />
											</span>
											<span>Social Profile</span>
										</div>
										<IconChevronDown
											size={16}
											className={`transition-transform ${
												openSections.social ? "rotate-180" : ""
											}`}
										/>
									</button>
								</div>
								<div
									className={`accordion-collapse collapse ${
										openSections.social ? "show" : ""
									}`}>
									<div className='accordion-body border-top p-4'>
										<div className='row'>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Facebook</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconBrandFacebook size={16} />
													</span>
													<input
														type='text'
														className='form-control'
														name='facebook'
														value={formData.facebook}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>LinkedIn</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconBrandLinkedin size={16} />
													</span>
													<input
														type='text'
														className='form-control'
														name='linkedin'
														value={formData.linkedin}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Twitter</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconBrandTwitter size={16} />
													</span>
													<input
														type='text'
														className='form-control'
														name='twitter'
														value={formData.twitter}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>WhatsApp</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconBrandWhatsapp size={16} />
													</span>
													<input
														type='text'
														className='form-control'
														name='whatsapp'
														value={formData.whatsapp}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Instagram</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconBrandInstagram size={16} />
													</span>
													<input
														type='text'
														className='form-control'
														name='instagram'
														value={formData.instagram}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-md-6 mb-3'>
												<label className='form-label'>Skype</label>
												<div className='input-group'>
													<span className='input-group-text'>
														<IconBrandSkype size={16} />
													</span>
													<input
														type='text'
														className='form-control'
														name='skype'
														value={formData.skype}
														onChange={handleChange}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Access */}
							<div className='accordion-item border-top rounded mb-3'>
								<div className='accordion-header'>
									<button
										type='button'
										className='accordion-button accordion-custom-button rounded d-flex justify-content-between w-100'
										onClick={() => toggleSection("access")}
										aria-expanded={openSections.access}>
										<div className='d-flex align-items-center'>
											<span className='avatar avatar-md rounded me-1 d-flex align-items-center justify-content-center'>
												<IconAccessible size={16} />
											</span>
											<span>Access</span>
										</div>
										<IconChevronDown
											size={16}
											className={`transition-transform ${
												openSections.access ? "rotate-180" : ""
											}`}
										/>
									</button>
								</div>
								<div
									className={`accordion-collapse collapse ${
										openSections.access ? "show" : ""
									}`}>
									<div className='accordion-body border-top p-4'>
										<div className='row'>
											<div className='col-md-12 mb-3'>
												<label className='form-label'>Visibility</label>
												<select
													className='form-select'
													name='visibility'
													value={formData.visibility}
													onChange={handleChange}>
													<option value='select-people'>Select People</option>
													<option value='private'>Private</option>
													<option value='public'>Public</option>
													<option value='team'>Team Only</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='d-flex align-items-center justify-content-end mt-4'>
							<button
								type='button'
								onClick={onHide}
								className='btn btn-light me-2'>
								Cancel
							</button>
							<button type='submit' className='btn btn-primary'>
								{mode === "add" ? "Create New" : "Save Changes"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;