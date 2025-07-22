import React, { useState, useEffect } from "react";
import {
	IconUserPlus,
	IconMapPin,
	IconId,
	IconPhone,
	IconMail,
	IconFileText,
	IconChevronDown,
	IconAccessible,
} from "@tabler/icons-react";
import ConfirmSubmitModal from "./ConfirmSubmitModal";

const documentValidation = {
	"Aadhar Card": 12,
	"PAN Card": 10,
	"Voter ID": 10,
	"Ration Card": 8,
	"Driving License": 16,
};

const ContactModal = ({ show, onHide, mode = "add", customer = null }) => {
	const [formData, setFormData] = useState({
		customerId: "",
		name: "",
		phone: "",
		email: "",
		state: "",
		city: "",
		address: "",
		documentType: "",
		documentNumber: "",
	});

	const [errors, setErrors] = useState({});
        const [showConfirmModal, setShowConfirmModal] = useState(false);


	useEffect(() => {
		if (customer) {
			setFormData(customer);
		} else {
			setFormData({
				customerId: "",
				name: "",
				phone: "",
				email: "",
				state: "",
				city: "",
				address: "",
				documentType: "",
				documentNumber: "",
			});
		}
	}, [customer]);

	const validateForm = () => {
		const newErrors = {};
		if (!formData.customerId) newErrors.customerId = "Customer ID is required.";
		if (!formData.name) newErrors.name = "Name is required.";
		if (!/^\d{10}$/.test(formData.phone))
			newErrors.phone = "Phone must be 10 digits.";
		if (!/\S+@\S+\.\S+/.test(formData.email))
			newErrors.email = "Invalid email.";
		if (!formData.documentType)
			newErrors.documentType = "Document Type is required.";
		const requiredLength = documentValidation[formData.documentType] || 0;
		if (!new RegExp(`^\\d{${requiredLength}}$`).test(formData.documentNumber)) {
			newErrors.documentNumber = `${formData.documentType} must be ${requiredLength} digits.`;
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("Submitting customer data:", formData);
			onHide();
			setShowConfirmModal(false); // close the modal after submission
			console.log("Complaint submitted!");
            setFormData({
							customerId: "",
							name: "",
							phone: "",
							email: "",
							state: "",
							city: "",
							address: "",
							documentType: "",
							documentNumber: "",
						});
		}
	};

	return (
		<div>
			{show && (
				<div className='offcanvas-backdrop fade show' onClick={onHide}></div>
			)}
			<ConfirmSubmitModal
				show={showConfirmModal}
				onClose={() => setShowConfirmModal(false)}
				onConfirm={handleSubmit}
			/>
			<div
				className={`offcanvas offcanvas-end offcanvas-large ${
					show ? "show" : ""
				}`}
				tabIndex='-1'
				style={{ visibility: show ? "visible" : "hidden" }}>
				<div className='offcanvas-header border-bottom'>
					<h5 className='offcanvas-title'>
						{mode === "add" ? "Add Customer" : "Edit Customer"}
					</h5>
					<button
						type='button'
						className='btn-close'
						onClick={onHide}
						aria-label='Close'></button>
				</div>
				<div className='offcanvas-body'>
					<form onSubmit={handleSubmit}>
						<div className='row'>
							<div className='col-md-6 mb-3'>
								<label className='form-label'>Customer ID</label>
								<input
									type='text'
									className='form-control'
									name='customerId'
									value={formData.customerId}
									onChange={handleChange}
									required
								/>
								{errors.customerId && (
									<small className='text-danger'>{errors.customerId}</small>
								)}
							</div>
							<div className='col-md-6 mb-3'>
								<label className='form-label'>Name</label>
								<input
									type='text'
									className='form-control'
									name='name'
									value={formData.name}
									onChange={handleChange}
									required
								/>
								{errors.name && (
									<small className='text-danger'>{errors.name}</small>
								)}
							</div>
							<div className='col-md-6 mb-3'>
								<label className='form-label'>Phone</label>
								<input
									type='text'
									className='form-control'
									name='phone'
									value={formData.phone}
									onChange={handleChange}
								/>
								{errors.phone && (
									<small className='text-danger'>{errors.phone}</small>
								)}
							</div>
							<div className='col-md-6 mb-3'>
								<label className='form-label'>Email</label>
								<input
									type='email'
									className='form-control'
									name='email'
									value={formData.email}
									onChange={handleChange}
								/>
								{errors.email && (
									<small className='text-danger'>{errors.email}</small>
								)}
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
							<div className='col-md-12 mb-3'>
								<label className='form-label'>Address</label>
								<textarea
									className='form-control'
									rows='2'
									name='address'
									value={formData.address}
									onChange={handleChange}></textarea>
							</div>
							<div className='col-md-6 mb-3'>
								<label className='form-label'>Document Type</label>
								<select
									className='form-select'
									name='documentType'
									value={formData.documentType}
									onChange={handleChange}>
									<option value=''>Select Document</option>
									{Object.keys(documentValidation).map((doc, i) => (
										<option key={i} value={doc}>
											{doc}
										</option>
									))}
								</select>
								{errors.documentType && (
									<small className='text-danger'>{errors.documentType}</small>
								)}
							</div>
							<div className='col-md-6 mb-3'>
								<label className='form-label'>Document Number</label>
								<input
									type='text'
									className='form-control'
									name='documentNumber'
									value={formData.documentNumber}
									onChange={handleChange}
								/>
								{errors.documentNumber && (
									<small className='text-danger'>{errors.documentNumber}</small>
								)}
							</div>
						</div>
						<div className='d-flex align-items-center justify-content-end mt-4'>
							<button
								type='button'
								onClick={onHide}
								className='btn btn-light me-2'>
								Cancel
							</button>
							<button
								type='submit'
								className='btn btn-primary'
								onClick={() => setShowConfirmModal(true)}>
								{mode === "add" ? "Create Customer" : "Save Changes"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
